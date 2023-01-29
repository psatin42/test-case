import React from 'react';
import { Route, Routes } from 'react-router';
import { Container } from 'reactstrap';
import CalculationForm from './components/CalculationForm/CalculationForm';
import Headers from './components/Headers/Headers';
import PressureForm from './components/PressureForm/PressureForm';
import TemperatureForm from './components/TemperatureForm/TemperatureForm';

function App() {
  return (
    <Container>
      <Headers />
      <Routes>
        <Route path="/Расход" element={<CalculationForm />} />
        <Route path="/Давление" element={<PressureForm />} />
        <Route path="/Температура" element={<TemperatureForm />} />
      </Routes>
    </Container>
  );
}

export default App;
