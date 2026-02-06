"use strict";
function logMessage(message) {
    console.log("[LOG]:", message);
}
function logError(error) {
    console.log("[ERROR]:", error);
}
logMessage("Application started");
logError("Something went wrong!");
