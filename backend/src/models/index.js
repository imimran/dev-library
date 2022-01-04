import mongoose from "mongoose";
import logger from "../utils/logger";
import {MONGO_URL} from '../config'

export async function createConnectionAndInitialize() {
  try {
    await mongoose.connect(MONGO_URL);

    logger.info("DB connected");
  } catch (error) {
    logger.error("DB not connected", error);
  }
}