import path from "path";
import { createLogger, format, transports } from "winston";

const currentDir = __dirname;
const srcDir = path.resolve(currentDir, "..");
const loggingDir = path.resolve(srcDir, "logging");
const { combine, timestamp, printf, colorize } = format;
// Custom log format
const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`;
});

const logger = createLogger({
  level: "info", // default level
  format: combine(
    colorize(), // adds color to console logs
    timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    logFormat
  ),
  transports: [
    // log to console
    new transports.Console({ level: "debug" }),
    // log to file
    new transports.File({
      filename: path.join(loggingDir, "test_run.log"),
      level: "info",
    }),
    new transports.File({
      filename: path.join(loggingDir, "test_error.log"),
      level: "error",
    }),
  ],
});

export default logger;
