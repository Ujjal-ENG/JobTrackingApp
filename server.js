import express from "express";
import errorHandlerMiddleWare from "./middleware/error.handler.js";
import notFoundMiddleWare from "./middleware/not.found.js";

import * as dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/connect.js";

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Welcome");
});

//route not found middleware
app.use(notFoundMiddleWare);

//if error found in any route
app.use(errorHandlerMiddleWare);

const start = async () => {
  try {
    await connectDB(process.env.MONOGO_URL)
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
