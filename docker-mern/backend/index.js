import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import { connectdb } from './db/index.js';
import Anime from './models/anime.model.js';



const app = express();

app.use(express.json());
app.use(cors(
    {
        origin: "*"
    }
));
app.use(express.urlencoded({ extended: true }));

connectdb();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get("/api/anime", async (req, res) => {
    try {
        const anime = await Anime.find();
        res.json(anime)
    } catch (error) {
        console.error("Error fetching anime data:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
})

app.post("/api/anime", async (req, res) => {
    const anime = new Anime(req.body);
    await anime.save();
    res.json(anime);
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
})