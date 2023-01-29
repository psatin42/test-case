const express = require('express');
const pressureUtil = require('../utils/pressureUtils')

const router = express.Router();

const units = ['Па', 'Бар', 'Ат', 'Атм'];

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
      const result = pressureUtil(i, req.body[units[i]]);
      return res.send(result);
    }
  }
  return res.json({ message: 'Пожалуйста, заполните одно из полей' });
});

module.exports = router;
