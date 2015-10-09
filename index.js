#! /usr/bin/env node

const child_process = require('child_process');
const fs = require('fs-extra');
const path = require('path');
const colors = require('colors');

const LOG_PREFIX = '** karma-template:';
const SRC_DIR = path.join(__dirname, 'src');
const DEPENDENCIES = [
  'babel-loader',
  'karma',
  'karma-babel-preprocessor',
  'karma-chrome-launcher',
  'karma-firefox-launcher',
  'karma-mocha',
  'karma-mocha-reporter',
  'karma-sourcemap-loader',
  'karma-webpack'
  'mocha',
  'webpack'
];

const argv = require('minimist')(process.argv.slice(2));

function log(text, error) {
  console.log(`${LOG_PREFIX} ${text}`[error ? 'red' : 'green']);
}

function installDependencies() {
  const saveCommand = argv.save !== false ? '--save-dev' : '';
  log('Installing dependencies...');
  child_process.execSync(`npm install ${DEPENDENCIES.join(' ')} ${saveCommand}`, {
    stdio: [0, process.stdout, process.stderr]
  });
}

function copyFiles() {
  log('Copying files...');
  try {
    fs.copySync(SRC_DIR, '.', {clobber: argv.force});
  } catch (err) {
    log(`Oops, could not copy files!

   Do you already have a ./tests directory or a karma.conf.js file?
   This tool won't overwrite them unless you use --force`, 'error');
    console.log(err.stack.red);
    process.exit(1);
  }

  log('Success! Files copied.');
}

function travis() {
  log(`You may need to add this to travis:

before_install:
- export DISPLAY=:99.0
- sh -e /etc/init.d/xvfb start\n`);
}

if (argv.install !== false) installDependencies();
copyFiles();
travis();
