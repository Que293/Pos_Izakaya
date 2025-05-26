require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { readdirSync } = require('fs');
const morgan = require('morgan')
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

readdirSync('./src/routes')
.map((c) => app.use('/api', require('./src/routes/' + c)));
// app.get('/', (req, res) => {
//     res.status(200).json({message:"Hello"})
// })

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'production' ? {} : err
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// Start Server

