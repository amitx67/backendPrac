import "dotenv/config";
import connectDB from "./db/index.js";
import { app } from "./app.js";

const PORT = process.env.PORT || 8000;

// Connect to Database first, then start server
connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.error("Express Server Error: ", error);
        });

        app.listen(process.env.PORT || 8000, () => {
            console.log(`⚙️  Server is running at port: ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("MONGO DB connection failed! ", err);
    });
