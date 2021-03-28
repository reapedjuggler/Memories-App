// You won't regret working hard , Remember the struggle always pays its debts

const express = require("express");
const db = require("./db");
const cors = require("cors");

const app = express();

const corsOptions = {
	origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(express.json());

app.use(
	express.urlencoded({
		extended: true,
	})
);

// const fun = res => console.log(res);         Commented, Was originally created for testing prettier :)

app.use("/index", require("./routes/index").route);
app.use("/users", require("./routes/user").route);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
