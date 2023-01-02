const express = require("express");
const userRouter = require("./routes/userRoutes.js");
const studentRouter = require("./routes/studentRoute.js");
const AppError = require("./appError");
const globalErrorHandler = require("./controllers/errorController");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1/users", userRouter);
app.use("/api/v1/students", studentRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`n cant find ${req.originalUrl} on this server!`, 404));
});

//Global error handling middleware

app.use(globalErrorHandler);
module.exports = app;
