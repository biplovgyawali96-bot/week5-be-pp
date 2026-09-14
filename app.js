require("dotenv").config();

const express = require("express");
const app = express();

const connectDB = require("./config/db");

const tourRouter = require("./routes/tourRouter");
const userRouter = require("./routes/userRouter");
const { unknownEndpoint } = require("./middleware/customMiddleware");

const morgan = require("morgan");

app.use(morgan("dev"));

// Middleware to parse JSON
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

// Use the tourRouter for all "/tours" routes
app.use("/api/tours", tourRouter);

// Use the userRouter for all "/users" routes
app.use("/api/users", userRouter);

app.use(unknownEndpoint);

const port = process.env.PORT || 4000;

// Connect to MongoDB
connectDB();

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});