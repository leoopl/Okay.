import express, { Express } from "express";
import mongoose from "mongoose";
import router from "./routes/professionalsRoutes";
const cors = require("cors");
require("dotenv").config();

const app: Express = express();
const port = process.env.PORT || 8000;

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

//connecting MongoDB
const uri: string = process.env.MONGODB_URI || "";
const db_name: string = process.env.DB_NAME || "";
mongoose
	.connect(uri, { dbName: db_name })
	.then(() => {
		console.log("Connected to MongoDB");
		app.listen(port, () => {
			console.log(`Server running on port ${port}`);
		});
	})
	.catch((err: Error) => console.error("Error connecting to MongoDB", err));

// const db = mongoose.connection;
// db.once("open", () => console.log("Connected"));
