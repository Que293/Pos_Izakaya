const express = require('express');
const app = express();
const morgan = require('morgan');

const cors = require('cors');
const { readdirSync } = require('fs');
const reservationStatusUpdater = require('../cron/reservationStatusUpdater');

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());


// app.get ('/', (req, res) => {
//     res.send('Hello World!');
// })
readdirSync('./src/routes')
.map((c) => app.use('/api', require('./routes/' + c)));


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});