const units = ['м³/сек', 'тыс м³/час', 'млн м³/сут', 'млрд м³/год'];

function calculationUtil(i, number) {
  const result = {};
  number = Number(number);
  if (i === 0) {
    result[units[i]] = number.toFixed(4);
    result[units[i + 1]] = (number * 3600 / 1000).toFixed(4);
    result[units[i + 2]] = (number * 3600 * 24 / (1000 * 1000)).toFixed(4);
    result[units[i + 3]] = (number * 3600 * 24 * 365 / (1000 * 1000 * 1000)).toFixed(4);
  } else if (i === 1) {
    result[units[i]] = number.toFixed(4);
    result[units[i - 1]] = (number * 1000 / 3600).toFixed(4);
    result[units[i + 1]] = (number * 24 / 1000).toFixed(4);
    result[units[i + 2]] = (number * 365 * 24 / (1000 * 1000)).toFixed(4);
  } else if (i === 2) {
    result[units[i]] = number.toFixed(4);
    result[units[i - 1]] = (number * 1000 / 24).toFixed(4);
    result[units[i - 2]] = (number * 1000 * 1000 / (24 * 3600)).toFixed(4);
    result[units[i + 1]] = (number * 365 / 1000).toFixed(4);
  } else {
    result[units[i]] = number.toFixed(4);
    result[units[i - 1]] = (number * 1000 / 365).toFixed(4);
    result[units[i - 2]] = (number * 1000 * 1000 / (24 * 365)).toFixed(4);
    result[units[i - 3]] = (number * 1000 * 1000 * 1000/ (24 * 3600 * 365)).toFixed(4);
  }
  return result;
}

module.exports = calculationUtil;
