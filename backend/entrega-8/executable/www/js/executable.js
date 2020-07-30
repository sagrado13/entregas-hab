const fs = require("fs").promises;
const path = require("path");
const { formatDistanceToNow } = require("date-fns");
const { es } = require("date-fns/locale");

async function lastExecution(file) {
  try {
    // Miramos si existe el archivo,si no existe mandamos un mensaje que es la primera vez que se ejecuta.
    try {
      await fs.access(file);
    } catch (error) {
      throw new Error(`Es la primera vez que se ejecuta el programa`);
    }
    // Si no es la primera vez que se ejecuta leemos el archivo
    const jsonRead = await fs.readFile(file);
    const { lastUpdate } = JSON.parse(jsonRead.toString());
    // Calculamos cuanto tiempo pasó desde la última ejecución.
    const distance = formatDistanceToNow(lastUpdate, {
      includeSeconds: true,
      locale: es,
    });
    console.log(`Hace ${distance} que se ejecutó el programa.`);
    // Imprimimos el error.
  } catch (error) {
    console.error(error.message);
    // Si no existe el archivo JSON,lo creamos. Y si existe lo sobreescribimos con la fecha y hora actual.
  } finally {
    const now = new Date();
    const update = {
      lastUpdate: now.getTime(),
    };
    await fs.writeFile(file, JSON.stringify(update, null, 2));
  }
}

lastExecution(path.join(path.join(__dirname, "../"), "executions.json"));
