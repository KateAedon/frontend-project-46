import yaml from 'js-yaml';

export default function parseFile(fileData, filePath) {
  const extension = filePath.split('.').pop();

  if (extension === 'json') {
    return JSON.parse(fileData);
  } else if (extension === 'yaml' || extension === 'yml') {
    return yaml.load(fileData);
  }
};