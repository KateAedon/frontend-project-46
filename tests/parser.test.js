import fs from 'fs';
import path from 'path';
import parse from '../src/parse.js';

test('parse JSON file correctly', () => {
  const filePath = path.resolve(process.cwd(), './tests/fixtures/file1.json');
  const fileData = fs.readFileSync(filePath, 'utf-8');
  const result = parse(fileData, filePath);

  const expected = {
    host: 'hexlet.io',
    timeout: 50,
    proxy: '123.234.53.22',
    follow: false,
  };

  expect(result).toEqual(expected);
});

test('parse YAML file correctly', () => {
  const filePath = path.resolve(process.cwd(), './tests/fixtures/file1.yml');
  const fileData = fs.readFileSync(filePath, 'utf-8');
  const result = parse(fileData, filePath);

  const expected = {
    host: 'hexlet.io',
    timeout: 50,
    proxy: '123.234.53.22',
    follow: false,
  };

  expect(result).toEqual(expected);
});
