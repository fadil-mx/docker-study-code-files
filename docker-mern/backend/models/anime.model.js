import mongoose from "mongoose";


const animeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    link: {
        type: String,
    },
    description: {
        type: String,
    },
})

const Anime = mongoose.models.Anime || mongoose.model("Anime", animeSchema);

export default Anime;