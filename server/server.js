// You won't regret working hard , Remember the struggle always pays its debts
const express = require('express');

const cors = require('cors');

const app = express();

const corsOptions = {
    origin: 'http://localhost:8000'
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => res.send("Hello I got your back :)"))

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log("Server started on http://localhost:8000"));