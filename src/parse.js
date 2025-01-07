import yaml from 'js-yaml';
import path from 'path';

export default function parse(fileData, filePath) {
  const extension = path.extname(filePath).slice(1).toLowerCase();

  if (extension === 'json') {
    return JSON.parse(fileData);
  } if (extension === 'yaml' || extension === 'yml') {
    return yaml.load(fileData);
  }

  throw new Error(`Unsupported file type: ${extension} for file: ${filePath}`);
}
