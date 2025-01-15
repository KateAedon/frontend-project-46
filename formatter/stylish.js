const indent = (depth, spaces = 4) => ' '.repeat(depth * spaces - 2);

const formatValue = (value, depth) => {
  if (typeof value !== 'object' || value === null) {
    return `${value}`;
  }

  const entries = Object.entries(value)
    .map(([key, val]) => `${indent(depth + 1)}  ${key}: ${formatValue(val, depth + 1)}`)
    .join('\n');

  return `{\n${entries}\n${indent(depth)}}`;
};

const stylish = (tree, depth = 1) => {
  const lines = tree.map((node) => {
    const {
      key, value, value1, value2, type, children,
    } = node;

    switch (type) {
      case 'nested':
        return `${indent(depth)}  ${key}: {\n${stylish(children, depth + 1)}\n${indent(depth)}  }`;
      case 'added':
        return `${indent(depth)}+ ${key}: ${formatValue(value, depth)}`;
      case 'deleted':
        return `${indent(depth)}- ${key}: ${formatValue(value, depth)}`;
      case 'changed':
        return [
          `${indent(depth)}- ${key}: ${formatValue(value1, depth)}`,
          `${indent(depth)}+ ${key}: ${formatValue(value2, depth)}`,
        ].join('\n');
      case 'unchanged':
        return `${indent(depth)}  ${key}: ${formatValue(value, depth)}`;
      default:
        throw new Error(`Unknown type: ${type}`);
    }
  });

  return lines.join('\n');
};

export default stylish;