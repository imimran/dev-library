import logger from "../utils/logger";

export default (error, _req, res, next) => {
  res.status(500).json({ message: "Server error" });
  logger.error(error.message);
  next(error);
};