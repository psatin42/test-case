const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const calculationRouter = require('./routes/calculationRouter');
const pressureRouter = require('./routes/pressureRouter');
const temperatureRouter = require('./routes/temperatureRouter')

const app = express();
const PORT = 3001;

app.use(cors({
  credentials: true,
  origin: true,
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/calculations', calculationRouter);
app.use('/api/pressure', pressureRouter);
app.use('/api/temperature', temperatureRouter);

app.listen(PORT, () => console.log(`Server listen your commands on PORT ${PORT}`));
