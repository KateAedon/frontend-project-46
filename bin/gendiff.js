#!/usr/bin/env node

import { Command } from 'commander';
import fs from 'fs';
import path from 'path';
import parse from '../src/parser.js'

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    const absolutePath1 = path.resolve(process.cwd(), filepath1);
    const absolutePath2 = path.resolve(process.cwd(), filepath2);

    const file1 = fs.readFileSync(filepath1, 'utf-8');
    const file2 = fs.readFileSync(filepath2, 'utf-8');

    const parsedFile1 = parse(file1, absolutePath1);
    const parsedFile2 = parse(file2, absolutePath2);

    

    console.log('file1:', parsedFile1);
    console.log('file2', parsedFile2);
  })
  .parse(process.argv);