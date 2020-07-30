"use strict";

const fs = require("fs").promises;
const path = require("path");
const chalk = require("chalk");
const { formatDistanceToNow } = require("date-fns");
const { es } = require("date-fns/locale");

async function getFile(pathName) {
  try {
    let pathInfo;
    try {
      /* Sacamos la información de los archivos o directorios que están en la ruta
      que pasamos y si no existe la ruta imprimimos un mensaje. */
      pathInfo = await fs.stat(pathName);
    } catch (error) {
      throw new Error(`La ruta ${pathName} no existe`);
    }
    // Comprobamos que es un archivo
    if (!pathInfo.isFile()) {
      throw new Error(`La ruta ${pathName} no es un fichero`);
    }
    // Comprobamos que ocupa menos de 10000 bytes
    if (pathInfo.size > 10000) {
      throw new Error(`El fichero ${pathName} pesa máis de 10Kb`);
    }
    const content = await fs.readFile(pathName);
    return {
      createAt: pathInfo.birthtimeMs,
      content: content.toString(),
    };
    // Leemos el archivo y devolvemos la información necesaria
  } catch (error) {
    console.error();
    console.error(chalk.red.italic.bold(error.message));
    console.error(chalk.red.bold("----------------------------"));
  }
}
async function main() {
  // Procesamos los argumentos
  const args = process.argv.slice(2);
  for (const argument of args) {
    const pathName = path.join(__dirname, argument);
    const fileData = await getFile(pathName);
    // Calculamos cuánto tiempo paso desde su creación
    if (fileData) {
      const distance = formatDistanceToNow(fileData.createAt, {
        locale: es,
        includeSeconds: true,
      });
      console.log();
      console.log(
        chalk.blue.italic.bold(
          `El fichero ${argument} fue creado hace ${distance}`
        )
      );
      console.log(chalk.yellow.bold("Los contenido del fichero son:"));
      console.log(fileData.content);
    }
  }
}

main();
