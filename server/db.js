const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.set("useFindAndModify", false);

mongoose
	.connect(process.env.DB_CONNECT, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("Connected to DB!"))
	.catch(() => console.log("Error in connection"));
