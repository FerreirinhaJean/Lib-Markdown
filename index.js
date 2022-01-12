import chalk from 'chalk';
import fs, { link } from 'fs';

function exception(error) {
    throw new Error(chalk.red(error));
};

//Utilizando Async/Await
async function getFile(path) {
    try {
        const enconding = 'utf-8';
        const text = await fs.promises.readFile(path, enconding);

        console.log(extractLinks(text));
    } catch (error) {
        exception(error);
    }
};

function extractLinks(text) {
    const regex = /\[([^\]]*)\]\((http?s:\/\/[^$#\s].[^\s]*)\)/gm;
    const results = [];
    let temp;

    while ((temp = regex.exec(text)) !== null)
        results.push({ [temp[1]]: temp[2] });

    return results;
};

//Utilizando Promisse com Then()
// function getFile(path) {
//     const enconding = 'utf-8';
//     fs.promises.readFile(path, enconding)
//         .then((data) => {
//             console.log(chalk.green(data));
//         })
//         .catch((error) => {
//             exception(error);
//         });
// };

getFile('./files/texto.md');