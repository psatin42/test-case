import React from 'react'
import CalculationInput from '../CalculationInput/CalculationInput';
import './CalculationForm.css'

const units = ['м³/сек', 'тыс м³/час', 'млн м³/сут', 'млрд м³/год'];

export default function CalculationForm() {
  return (
    <form className='form'>
      <div className='form-inputs'>
      {units.map((el) => <CalculationInput unit={el} key={el} />)}
      </div>
      <button type='submit' className='form-button'>РАСЧЕТ</button>
    </form>
  )
}
