import chalk from 'chalk';
import fs from 'fs';

function exception(error) {
    throw new Error(chalk.red(error));
};

function getFile(path) {
    const enconding = 'utf-8';
    fs.promises.readFile(path, enconding)
        .then((data) => {
            console.log(chalk.green(data));
        })
        .catch((error) => {
            exception(error);
        });
};

getFile('./files/texto.md');

