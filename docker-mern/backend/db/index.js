import mongoose from "mongoose"


export const connectdb = () => {
    try {
        mongoose.connect(process.env.DB_URL)
        console.log("database connected successfully");
    } catch (error) {
        console.log("database connection failed. exiting now...");
        console.error(error);
        process.exit(1);
    }

}