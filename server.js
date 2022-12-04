import express from "express";
//middleware
import errorHandlerMiddleWare from "./middleware/error.handler.js";
import notFoundMiddleWare from "./middleware/not.found.js";
import authenticateUser from "./middleware/auth.js";

import morgan from "morgan";

import * as dotenv from "dotenv";
dotenv.config();
import "express-async-errors";

//db and authenticateUser
import connectDB from "./db/connect.js";

//routers
import authRouter from "./routes/authRouter.js";
import jobRouter from "./routes/jobRouter.js";

const app = express();

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "Whgfelcome" });
});

app.get("/api/v1", (req, res) => {
  res.json({ msg: "API" });
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authenticateUser, jobRouter);

//route not found middleware
app.use(notFoundMiddleWare);

//if error found in any route
app.use(errorHandlerMiddleWare);

const start = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
