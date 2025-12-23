import express from "express";
import movieRouter from "../routes/company.js";
import userRouter from "../routes/users.js";
import authRouter from "../routes/auth.js";
import { errorMiddleware } from "../middlewares/error.js";
import homeRouter from "../routes/home-routes.js";

const registerRoutes = (app) => {
  app.use(express.json()); ///convert json to object this is a middleware
  app.use("/", homeRouter);
  app.use("/api/v1/company", movieRouter);
  app.use("/api/v1/users", userRouter);
  app.use("/api/v1/auth", authRouter);
  app.use(errorMiddleware);
};
export default registerRoutes;
