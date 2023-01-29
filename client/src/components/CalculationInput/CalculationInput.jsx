import React from 'react';
import './CalculationInput.css';

export default function CalculationInput({ unit, data }) {
  return (
    <div className="wrapper">
      <label htmlFor={unit} className="form-label">
        {unit}
      </label>
      <input type="number" step="any" placeholder="Введите значение" className="form-input" id={unit} name={unit} value={data[unit]} />
    </div>
  );
}
