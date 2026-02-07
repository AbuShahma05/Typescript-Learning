import { Logger } from "./logger";

let appLogger = new Logger("APP");
let dbLogger = new Logger("DATABASE");

appLogger.info("Application started");
dbLogger.info("Connected to database");
appLogger.warning("Low memory");
dbLogger.error("Connection lost");
