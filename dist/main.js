"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config"));
console.log("App Name:", config_1.default.appName);
console.log("Version:", config_1.default.version);
console.log("API URL:", config_1.default.apiUrl);
console.log("Port:", config_1.default.port);
