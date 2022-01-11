import chalk from 'chalk';
import fs from 'fs';

function exception(error) {
    throw new Error(chalk.red(error));
};

function getFile(path) {
    const enconding = 'utf-8';
    fs.readFile(path, enconding, function (error, data) {
        if (error)
            exception(error);
        else
            console.log(chalk.green(data));
    });
};

getFile('./files/texto.md');

