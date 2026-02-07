"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("./logger");
let appLogger = new logger_1.Logger("APP");
let dbLogger = new logger_1.Logger("DATABASE");
appLogger.info("Application started");
dbLogger.info("Connected to database");
appLogger.warning("Low memory");
dbLogger.error("Connection lost");
