import express from "express";
import type {Request, Response} from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const PORT = process.env.PORT;
const mongodbURL = process.env.MONGO_URL as string;

mongoose.connect(mongodbURL)
.then(() => console.log("MongoDB connected successfully"))
.catch((err) => console.log("Connection Errorrrrrr!!!!!",err))

app.get('/api/test',(req: Request, res: Response) => {
    const UserInfo = ({
        name: "Neel Raiyani",
        city: "Bhuj"
    })

    res.json(UserInfo);
});

app.listen(PORT, () => {
    console.log(`App running on ${PORT}`);
});
