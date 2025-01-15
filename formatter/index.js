import stylish from './stylish.js';

const formatter = (node, format) => {
    switch (format) {
      case 'stylish':
        return stylish(node);

      default:
        throw new Error(`Unknown format: '${format}'`);
    }
  };

export default formatter;
