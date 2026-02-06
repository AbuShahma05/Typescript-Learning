function logMessage(message: string): void {
  console.log("[LOG]:", message);
}

function logError(error: string): void {
  console.log("[ERROR]:", error);
}

logMessage("Application started");
logError("Something went wrong!");