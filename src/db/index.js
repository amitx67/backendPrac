import dns from "node:dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

import mongoose from "mongoose";
import { DB_NAME } from "../constant.js"; // Ensure this path is correct based on your folder structure

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n☘️  MongoDB Connected! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MONGODB connection FAILED: ", error);
        process.exit(1); // Stop the app if DB fails to connect
    }
};

export default connectDB;
