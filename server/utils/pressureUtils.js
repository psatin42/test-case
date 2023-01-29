const units = ['Па', 'Бар', 'Ат', 'Атм'];

function pressureUtil(i, number) {
  const result = {};
  number = Number(number);
  if (i === 0) {
    result[units[i]] = number.toFixed(4);
    result[units[i + 1]] = (number / 100000).toFixed(4);
    result[units[i + 2]] = (number * 1.01972 / 100000).toFixed(4);
    result[units[i + 3]] = (number * 9.8692 / 1000000).toFixed(4);
  } else if (i === 1) {
    result[units[i]] = number.toFixed(4);
    result[units[i - 1]] = (number * 100000).toFixed(4);
    result[units[i + 1]] = (number * 1.01972).toFixed(4);
    result[units[i + 2]] = (number * 0.98692).toFixed(4);
  } else if (i === 2) {
    result[units[i]] = number.toFixed(4);
    result[units[i - 1]] = (number * 0.980655).toFixed(4);
    result[units[i - 2]] = (number * 98066.5).toFixed(4);
    result[units[i + 1]] = (number * 0.96784).toFixed(4);
  } else {
    result[units[i]] = number.toFixed(4);
    result[units[i - 1]] = (number * 1.03323).toFixed(4);
    result[units[i - 2]] = (number * 1.01325).toFixed(4);
    result[units[i - 3]] = (number * 101325).toFixed(4);
  }
  return result;
}

module.exports = pressureUtil;
