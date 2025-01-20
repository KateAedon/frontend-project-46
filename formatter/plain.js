// import _ from 'lodash';

const stringify = (value) => {
  if (typeof value === 'object' && value !== null) {
    return '[complex value]';
  }

  if (typeof value === 'string') {
    return `'${value}'`;
  }

  return value;
};

const plain = (diff, path = '') => {
  const formatNode = (node, currentPath) => {
    const pathName = currentPath ? `${currentPath}.${node.key}` : node.key;

    switch (node.type) {
      case 'added':
        return `Property '${pathName}' was added with value: ${stringify(node.value)}`;
      case 'deleted':
        return `Property '${pathName}' was removed`;
      case 'changed':
        return `Property '${pathName}' was updated. From ${stringify(node.value1)} to ${stringify(node.value2)}`;
      case 'nested':
        return plain(node.children, [pathName]);
      default:
        throw new Error(`This type does not exist: ${node.type}`);
    }
  };

  const result = diff
    .filter((node) => node.type !== 'unchanged')
    .map((node) => formatNode(node, path));

  return result.join('\n');
};

export default plain;
