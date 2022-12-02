'use strict';

const path = require('path');
const chalk = require('chalk');
const fs = require('fs-extra');

async function copyLocalesFiles() {
    try {
        if (fs.pathExists('src/locales')) {
            console.log(`${chalk.underline.red('src/locales')} dir already existed, please remove it and try again`)
        } else {
            await fs.copy('templates/locales', resolveApp('src/locales'))
            console.log('Initialize successful!')
        }
    } catch (err) {
        console.error(err)
    }
}
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

copyLocalesFiles()