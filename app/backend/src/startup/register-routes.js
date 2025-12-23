import express from "express";
import userRouter from "../routes/users.js";
import authRouter from "../routes/auth.js";
import { errorMiddleware } from "../middlewares/error.js";
import companyRouter from "../routes/company.js";

const registerRoutes = (app) => {
  app.use(express.json()); ///convert json to object this is a middleware
  app.use("/api/v1/company", companyRouter);
  app.use("/api/v1/users", userRouter);
  app.use("/api/v1/auth", authRouter);
  app.use(errorMiddleware);
};
export default registerRoutes;
