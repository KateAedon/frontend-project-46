import _ from 'lodash';

const compareFiles = (data1, data2) => {
  const allKeys = _.union(_.keys(data1), _.keys(data2));
  const sortedKeys = _.sortBy(allKeys);

  return sortedKeys.map((key) => {
    if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      return {
        key,
        children: compareFiles(data1[key], data2[key]),
        type: 'nested',
      };
    }

    if (!_.has(data1, key) && _.has(data2, key)) {
      return {
        key,
        value: data2[key],
        type: 'added',
      };
    }

    if (_.has(data1, key) && !_.has(data2, key)) {
      return {
        key,
        value: data1[key],
        type: 'deleted',
      };
    }

    if (!_.isEqual(data1[key], data2[key])) {
      return {
        key,
        value1: data1[key],
        value2: data2[key],
        type: 'changed',
      };
    }

    return {
      key,
      value: data1[key],
      type: 'unchanged',
    };
  });
};

export default compareFiles;
