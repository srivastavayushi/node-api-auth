const express = require("express");
const app = express();

// Import ROUTES
const authRoute = require("./routes/auth");

//Routes Middleware
app.use("/api/users", authRoute);

app.listen(9000, () => console.log("server running"));
