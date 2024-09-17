import compareFiles from '../src/compareFiles';

test('compare two objects with changed keys', () => {
  const obj1 = {
    host: 'hexlet.io',
    timeout: 50,
    proxy: '123.234.53.22',
    follow: false,
  };

  const obj2 = {
    timeout: 20,
    verbose: true,
    host: 'hexlet.io',
  };

  const expectedLines = [
    '  host: hexlet.io',
    '- follow: false',
    '- proxy: 123.234.53.22',
    '- timeout: 50',
    '+ timeout: 20',
    '+ verbose: true',
  ];

  const result = compareFiles(obj1, obj2).split('\n').sort();
  const expected = expectedLines.sort();
});

test('compare two objects with unchanged keys', () => {
  const obj1 = {
    host: 'hexlet.io',
    timeout: 50,
  };

  const obj2 = {
    host: 'hexlet.io',
    timeout: 50,
  };

  const expectedLines = [
    '  host: hexlet.io',
    '  timeout: 50',
  ];

  const result = compareFiles(obj1, obj2).split('\n').sort();
  const expected = expectedLines.sort();

  expect(result).toEqual(expected);
});

test('compare two objects with changed values', () => {
  const obj1 = {
    host: 'hexlet.io',
    timeout: 50,
  };

  const obj2 = {
    host: 'hexlet.io',
    timeout: 20,
  };

  const expectedLines = [
    '  host: hexlet.io',
    '- timeout: 50',
    '+ timeout: 20',
  ];

  const result = compareFiles(obj1, obj2).split('\n').sort();
  const expected = expectedLines.sort();

  expect(result).toEqual(expected);
});
