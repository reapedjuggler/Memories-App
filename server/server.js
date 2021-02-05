// You won't regret working hard , Remember the struggle always pays its debts
const express = require('express');
const db = require('./db');
const cors = require('cors');

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000'
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/index', require('./routes').route);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));