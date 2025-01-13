import fs from 'fs';
import path from 'path';
import parse from './parse.js';
import compareFiles from './compareFiles.js';

const getPath = (filePath) => path.resolve(process.cwd(), filePath);
const readFile = (filePath) => fs.readFileSync(filePath, 'utf-8');
const parseFile = (filePath) => parse(readFile(filePath), getPath(filePath));

const difference = (filePath1, filePath2) => {
  const file1 = parseFile(filePath1);
  const file2 = parseFile(filePath2);

  const diff = compareFiles(file1, file2);
  console.log(diff, 'difference!!');
  return diff;
};

export default difference;
