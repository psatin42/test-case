import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CalculationInput from '../CalculationInput/CalculationInput';
import './CalculationForm.css';
import { sendData } from '../../redux/actions/calculationsActions';

const units = ['м³/сек', 'тыс м³/час', 'млн м³/сут', 'млрд м³/год'];

export default function CalculationForm() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.calculation);
  return (
    <form className="form" onSubmit={(e) => dispatch(sendData(e, Object.fromEntries(new FormData(e.target))))}>
      <p className="error-message">{data.message}</p>
      <div className="form-inputs">
        {units.map((el) => <CalculationInput unit={el} key={el} data={data} />)}
      </div>
      <button type="submit" className="form-button">РАСЧЕТ</button>
    </form>
  );
}
