import cors from "cors";
import express from "express";
import morgan from "morgan";
import router from "./routes/task.routes.js";
import "./db.js"

const  app = express();
// Settings
app.set("port", process.env.PORT || 25565);

// Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api", router);

// Starting the server
app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")}`);
});


