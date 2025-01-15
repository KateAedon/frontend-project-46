#!/usr/bin/env node

import { Command } from 'commander';
import gendiff from '../index.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format (options: stylish, plain, json)', 'stylish')
  .action((filepath1, filepath2, options) => {
    const difference = gendiff(filepath1, filepath2, options.format);
    console.log(difference);
  })
  .parse(process.argv);
ß