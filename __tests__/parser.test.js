import fs from 'fs';
import path from 'path';
import parse from '../src/parse.js';

test('parse JSON file correctly', () => {
  const filePath = path.resolve(process.cwd(), '__fixtures__/file1.json');
  const fileData = fs.readFileSync(filePath, 'utf-8');
  const extension = path.extname(filePath).slice(1).toLowerCase();
  const result = parse(fileData, extension);

  const expected = {
    common: {
      setting1: 'Value 1',
      setting2: 200,
      setting3: true,
      setting6: {
        key: 'value',
        doge: {
          wow: '',
        },
      },
    },
    group1: {
      baz: 'bas',
      foo: 'bar',
      nest: {
        key: 'value',
      },
    },
    group2: {
      abc: 12345,
      deep: {
        id: 45,
      },
    },
  };

  expect(result).toEqual(expected);
});

test('parse YAML file correctly', () => {
  const filePath = path.resolve(process.cwd(), '__fixtures__/file1.yml');
  const fileData = fs.readFileSync(filePath, 'utf-8');
  const extension = path.extname(filePath).slice(1).toLowerCase();
  const result = parse(fileData, extension);

  const expected = {
    common: {
      setting1: 'Value 1',
      setting2: 200,
      setting3: true,
      setting6: {
        key: 'value',
        doge: {
          wow: '',
        },
      },
    },
    group1: {
      baz: 'bas',
      foo: 'bar',
      nest: {
        key: 'value',
      },
    },
    group2: {
      abc: 12345,
      deep: {
        id: 45,
      },
    },
  };

  expect(result).toEqual(expected);
});

test('throw error for unsupported file type', () => {
  const fileData = 'dummy content';
  const extension = 'txt';

  expect(() => parse(fileData, extension))
    .toThrow('Unsupported file type: txt');
});
