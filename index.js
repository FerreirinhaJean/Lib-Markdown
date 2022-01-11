import chalk from 'chalk';
import fs from 'fs';

function exception(error) {
    throw new Error(chalk.red(error));
};

//Utilizando Async/Await
async function getFile(path) {
    try {
        const enconding = 'utf-8';
        const text = await fs.promises.readFile(path, enconding);

        console.log(chalk.green(text));
    } catch (error) {
        exception(error);
    }
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

