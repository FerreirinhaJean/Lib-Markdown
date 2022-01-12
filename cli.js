import { getFile } from './index.js';
import chalk from 'chalk';
import { validateLinks } from './http-validacao.js';

const path = process.argv;

async function processText(path) {
    const result = await getFile(path[2]);

    if (path[3] === 'validar')
        console.log(chalk.yellow('links validados'), await validateLinks(result));
    else
        console.log(chalk.yellow('Lista de links'), result);
};

processText(path);