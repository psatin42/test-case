import React from 'react'
import './CalculationInput.css'

export default function CalculationInput({unit}) {
  return (
    <div className="wrapper">
    <label htmlFor={unit} className="form-label">
      {unit}
    </label>
      <input placeholder="Введите значение" className="form-input" id={unit} />
      </div>
  )
}
