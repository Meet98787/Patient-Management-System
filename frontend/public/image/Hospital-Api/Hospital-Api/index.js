const express = require('express');
const connectDB = require('./db/db');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();
connectDB;

app.use(bodyParser.json());

app.use('/api/auth', require('./routes/userRoute'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
