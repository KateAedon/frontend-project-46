import { fileURLToPath } from 'url';
import { join, dirname } from 'path';
import { readFileSync } from 'fs';
import { expect, test } from '@jest/globals';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);
const readContent = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

const testData = [
  ['file1.json', 'file2.json', 'stylish', 'expectedResultStylish.txt'],
  ['file1.yml', 'file2.yml', 'stylish', 'expectedResultStylish.txt'],
  ['file1.yml', 'file2.yml', 'plain', 'expectedResultPlain.txt'],
  ['file1.json', 'file2.yml', 'plain', 'expectedResultPlain.txt'],
  ['file1.json', 'file2.yml', 'json', 'expectedResultJson.txt'],
  ['file1.yml', 'file2.yml', 'json', 'expectedResultJson.txt'],
];

describe.each(testData)('Test compare function', (file1, file2, format, expectedResult) => {
  test(`difference for ${file1} === ${file2} in ${format}`, () => {
    const data1 = getFixturePath(file1);
    const data2 = getFixturePath(file2);

    const received = gendiff(data1, data2, format);
    const expected = readContent(expectedResult);

    expect(received).toEqual(expected);
  });
});
