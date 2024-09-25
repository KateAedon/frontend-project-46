export default function compareFiles(obj1, obj2) {
  const keys = Object.keys(obj1).concat(Object.keys(obj2));

  const uniqueKeys = [];
  keys.forEach((key) => {
    if (!uniqueKeys.includes(key)) {
      uniqueKeys.push(key);
    }
  });

  uniqueKeys.sort();

  const result = uniqueKeys.map((key) => {
    if (!(key in obj1)) {
      return `+ ${key}: ${obj2[key]}`;
    }
    if (!(key in obj2)) {
      return `- ${key}: ${obj1[key]}`;
    }
    if (obj1[key] !== obj2[key]) {
      return `- ${key}: ${obj1[key]}\n+ ${key}: ${obj2[key]}`;
    }
    return `  ${key}: ${obj1[key]}`;
  });

  return result.join('\n');
}
