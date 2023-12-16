import express from "express";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import prodRouter from "./routes/product.js";
import orderRouter from "./routes/order.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";

export const app = express();

config({
  path: "./data/config.env",
});

// Using Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Using routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", taskRouter);
app.use("/api/v1/prod", prodRouter);
app.use("/api/v1/order", orderRouter);

app.get("/", (req, res) => {
  res.send("Nice working");
});


app.use(errorMiddleware);
