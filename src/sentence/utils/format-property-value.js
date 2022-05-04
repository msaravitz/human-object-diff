const format = require('date-fns/format');
const isObject = require('../../diff/utils/is-object');

function formatPropertyValue(value, config) {
  console.log('config: ' + JSON.stringify(config, null, 2));
  if (typeof value === 'string') return `"${value}"`;
  if (isObject(value)) return String(value[config.childProperty]);
  if (typeof value === 'number' || typeof value === 'boolean')
    return String(value);
  if (value instanceof Date) return `${format(value, config.dateFormat)}`;
  return JSON.stringify(value);
}

module.exports = formatPropertyValue;
