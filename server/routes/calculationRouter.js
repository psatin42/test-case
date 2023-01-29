const express = require('express');
const calculationUtil = require('../utils/calculationUtils')

const router = express.Router();

const units = ['м³/сек', 'тыс м³/час', 'млн м³/сут', 'млрд м³/год'];

router.post('/', (req, res) => {
  let number = 0;
  for (let i = 0; i < units.length; i += 1) {
    if (req.body[units[i]]) {
      number += 1;
      if (number >= 2) {
        return res.json({ message: 'Пожалуйста, заполните только одно поле'})
      }
    }
  }
  for (let i = 0; i < units.length; i += 1) {
    if (req.body[units[i]]) {
      const result = calculationUtil(i, req.body[units[i]]);
      return res.send(result);
    }
  }
  return res.json({ message: 'Пожалуйста, заполните одно из полей' });
});

module.exports = router;
