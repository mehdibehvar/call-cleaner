import mongoose from "mongoose";
import winston from "winston";

let isConnected = false;

const initDatabase = async () => {
  if (isConnected) {
    winston.info("MongoDB already connected");
    return;
  }

  const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/call-cleaner";
  const safeUri = mongoUri.replace(/:(?:\/\/)?(.*@)/, "//***@") || mongoUri;
  winston.info(`Attempting MongoDB connection to ${safeUri}`);

  const maxAttempts = 2;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      await mongoose.connect(mongoUri, { serverSelectionTimeoutMS: 5000 });
      isConnected = true;
      winston.info("Connected to MongoDB");
      return;
    } catch (err) {
      winston.warn(`MongoDB connection attempt ${attempt} failed: ${err.message || err}.`);
      if (attempt === maxAttempts) {
        winston.error("Could not connect to MongoDB after multiple attempts:", err.message || err);
        throw err;
      }
      const backoff = 500 * Math.pow(2, attempt - 1);
      await new Promise((r) => setTimeout(r, backoff));
    }
  }
};

export default initDatabase;
