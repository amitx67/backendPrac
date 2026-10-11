import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express";

// Load environment variables
dotenv.config({ path: './.env' }); // Note: usually it's '.env', check if yours is named 'env' or '.env'

const app = express();
const PORT = process.env.PORT || 8000;

// Connect to Database first, then start server
connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.error("Express Server Error: ", error);
        });

        app.listen(PORT, () => {
            console.log(`⚙️  Server is running at port: ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("MONGO DB connection failed! ", err);
    });
