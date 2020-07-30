"use strict";

const fs = require("fs").promises;
const path = require("path");
const sharp = require("sharp");
const minimist = require("minimist");
const uuid = require("uuid");

// Procesamos los argumentos.
const args = minimist(process.argv.slice(2));

// Hacemos que sea obligatorio introducir el directorio de origen y destino.
if (!args["input-dir"] || !args["output-dir"]) {
  console.error(`Los parámetos --input-dir y --output-dir son obligatorios`);
  process.exit();
}
// Metemos en variables los argumentos para trabajar con ellos más facilmente.
const inputDir = args["input-dir"];
const outputDir = args["output-dir"];
const size = args.size;
const watermark = args.watermark;

async function miniaturizer({ inputDir, outputDir, size = 500, watermark }) {
  const inputDirectory = path.join(__dirname, inputDir);
  const outputDirectory = path.join(__dirname, outputDir);
  const watermarkImage = path.join(__dirname, watermark);
  try {
    try {
      const inputInfo = await fs.stat(inputDirectory);
      if (!inputInfo.isDirectory()) {
        throw new Error();
      }
    } catch (error) {
      throw new Error(
        `El directorio de imágenes no existe o no es un directorio`
      );
    }

    try {
      await fs.mkdir(outputDirectory);
    } catch (error) {
      console.log(`El directorio de destino ya existe`);
    }

    const inputContent = await fs.readdir(inputDirectory);

    const validExtensions = [`.png`, `.jpg`, `.jpeg`];

    const validImages = inputContent.filter((file) => {
      return validExtensions.includes(path.extname(file));
    });

    for (const image of validImages) {
      console.log(`Procesando imagen: ${image}`);

      const processedImage = sharp(path.join(inputDirectory, image));

      processedImage.resize(size, size);

      if (watermark) {
        processedImage.composite([
          {
            input: watermarkImage,
            gravity: `southeast`,
          },
        ]);
      }

      await processedImage.toFile(
        path.join(outputDirectory, `mini_${uuid.v1()}_${image}`)
      );
    }
  } catch (error) {
    console.error(error.message);
  }
}

miniaturizer({
  inputDir,
  outputDir,
  size,
  watermark,
});
