const express = require("express");
const app = express();
const connectDB = require("./config/db");
dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });

// connect DB
connectDB();

//BodyParser Middleware
app.use(express.json());

// Import ROUTES
const authRoute = require("./routes/auth");

//Routes Middleware
app.use("/api/users", authRoute);

app.listen(9000, () => console.log("server running"));
