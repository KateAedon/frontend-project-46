import fs from 'fs';
import path from 'path';
import parse from './parse.js';
import compareFiles from './compareFiles.js';

const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);
const getExtension = (filepath) => path.extname(filepath).slice(1).toLowerCase();
const readFile = (filepath) => fs.readFileSync(getFullPath(filepath), 'utf-8');

const difference = (filepath1, filepath2) => {
  const obj1 = parse(readFile(filepath1), getExtension(filepath1));
  const obj2 = parse(readFile(filepath2), getExtension(filepath2));

  const diff = compareFiles(obj1, obj2);
  console.log(diff, 'diff from indx');
  console.log(obj1, 'obj1');
  console.log(obj2, 'obj2');
  return diff;
};

export default difference;
