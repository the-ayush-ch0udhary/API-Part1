require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./configuration/database");

const taskRoutes = require("./routes/Troutes");

const app = express();

// connect database

connectDB();

// middleware

app.use(express.json());

app.use(cors());

// all task routes start with /api

app.use("/api", taskRoutes);

// checking server

app.get("/", (req, res) => {

    res.send("Server is Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);
});