import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './PressureForm.css';
import { sendData } from '../../redux/actions/pressureActions';
import CalculationInput from '../CalculationInput/CalculationInput';

const units = ['Па', 'Бар', 'Ат', 'Атм'];

export default function PressureForm() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.pressure);
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
