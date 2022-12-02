'use strict';

const { Command } = require('commander');
const path = require('path');
const chalk = require('chalk');
const fs = require('fs-extra');
const globAsync = require('fast-glob');
const lodash = require('lodash')

const program = new Command();
const languages = require('../utils/languages.json')

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

/**
 * Converts directory separators to slashes, so the path can be used in fast-glob.
 * @param {string} pathToNormalize
 * @returns
 */
function normalizePath(pathToNormalize) {
    return pathToNormalize.replace(/\\/g, '/');
}

/**
 * Diff locales files by english locale
 * @param {*} localesDir 
 * @returns 
 */
const diffLanguageItems = async (localesDir) => {
    const localesFiles = await globAsync(normalizePath(path.join(localesDir, '*.json')));
    const localesNames = localesFiles.map((file) => path.basename(file).replace('.json', '')).filter(l => languages.includes(l));
    if (!localesNames.includes('en-US')) {
        console.log(chalk.red(`en-US.json not found in ${localesDir} dir`));
        process.exit(0);
    }
    const englishTranJson = require(path.join(localesDir, 'en-US.json'));
    let toTranslations = {}
    for (let i = 0; i < localesNames.length; i++) {
        const locale = localesNames[i];
        if (locale === 'en-US') {
            continue
        }
        const targetJson = require(path.join(localesDir, `${locale}.json`));
        toTranslations = { ...toTranslations, ...lodash.omit(englishTranJson, Object.keys(targetJson)) }
    }
    return toTranslations
}



const start = async (authorization, localesDir) => {
    const diffItems = await diffLanguageItems(localesDir)
    if (Object.keys({}).length === 0) {

    }
};

program
    .argument('<script>')
    .option('-k, --key <string>', 'languageWire key')
    .option('--localesDir <string>', 'locales dir', 'src/locales')
    .action((name, options, command) => {
        if (!options.key) {
            console.log(chalk.red(`Localize failed: Your must provide a language wire Key`));
            process.exit(0);
        } else {
            let authorization = `PrivateKey ${options.key.trim()}`;
            if (options.localesDir) {
                start(authorization, resolveApp(options.localesDir.trim()));
            }
        }
    });

program.parse(process.argv);
