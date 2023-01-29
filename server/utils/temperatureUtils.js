const units = ['Кельвин', 'Цельсия', 'Фаренгейт'];

function temperatureUtil(i, number) {
  const result = {};
  number = Number(number);
  if (i === 0) {
    result[units[i]] = number.toFixed(4);
    result[units[i + 1]] = (number - 273.15).toFixed(4);
    result[units[i + 2]] = ((number - 273.15) * 1.8 + 32).toFixed(4);
  } else if (i === 1) {
    result[units[i]] = number.toFixed(4);
    result[units[i - 1]] = (number + 273.15).toFixed(4);
    result[units[i + 1]] = (number * 1.8 + 32).toFixed(4);
  } else {
    result[units[i]] = number.toFixed(4);
    result[units[i - 1]] = ((number - 32) / 1.8).toFixed(4);
    result[units[i - 2]] = ((number - 32) / 1.8 + 273.15).toFixed(4);
  } 
  return result;
}

module.exports = temperatureUtil;
