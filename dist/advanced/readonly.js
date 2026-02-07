"use strict";
class Configuration {
  constructor(apiKey, environment, secretToken) {
    this.apiKey = apiKey;
    this.environment = environment;
    this.secretToken = secretToken;
  }
  getInfo() {
    console.log(`Environment: ${this.environment}`);
    console.log(`API Key: ${this.apiKey}`);
  }
}
let config = new Configuration("abc123", "production", "secret");
config.getInfo();
// config.apiKey = "new-key"; // ERROR: readonly property
