import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import router from "./routes/route.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/", router);

const port = process.env.PORT;
app.listen(port, () => console.log(`Surver is running on PORT ${port}`));
connectDB();
