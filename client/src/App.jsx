import React from 'react';
import { Container } from 'reactstrap';
import CalculationForm from './components/CalculationForm/CalculationForm';
import Headers from './components/Headers/Headers';

function App() {
  return (
    <Container>
      <Headers />
      <CalculationForm />
    </Container>
  );
}

export default App;
