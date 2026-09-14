require("dotenv").config();

const express = require("express");

const app = express();

const port = process.env.PORT || 4000;

app.use(express.json());

// Routes
const tourRouter = require("./routes/tourRouter");
const userRouter = require("./routes/userRouter");

app.use("/api/tours", tourRouter);
app.use("/api/users", userRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});