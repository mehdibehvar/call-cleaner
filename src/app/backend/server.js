import "dotenv/config"; // باید اول باشه
import express from "express";
import cors from "cors";
import winston from "winston";
import registerRoutes from "./src/startup/register-routes.js";
import initDatabase from "./src/startup/init-database.js";
import initLogger from "./src/startup/init-logger.js";
import setTemplateEngine from "./src/startup/set-template-engine.js";
import initConfig from "./src/startup/init-config.js";
import 'dotenv/config';
const app = express();
const port = process.env.PORT || 5000;  

// CORS
const corsOriginEnv = process.env.CORS_ORIGIN || "http://localhost:5173";
const allowedOrigins = corsOriginEnv.split(",").map((s) => s.trim());
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error("Origin not allowed by CORS"));
    },
    credentials: true,
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "x-auth-token",
      "Accept",
      "Origin",
      "X-Requested-With",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);

// JSON parser
app.use(express.json());

// Dev logging
if (process.env.NODE_ENV !== "production") {
  app.use((req, res, next) => {
    winston.debug(`Incoming request: ${req.method} ${req.url}`);
    next();
  });
}

// Init
initLogger(app);
registerRoutes(app);
setTemplateEngine(app);
initConfig();
app.use(express.static("public"));

// Connect DB and start server
(async () => {
  await initDatabase(); // یکبار کانکت
  app.listen(port, () => {
    winston.info(`Server running on port ${port}`);
  });
})();
