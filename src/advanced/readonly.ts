class Configuration {
  readonly apiKey: string;
  readonly environment: string;
  private secretToken: string;

  constructor(apiKey: string, environment: string, secretToken: string) {
    this.apiKey = apiKey;
    this.environment = environment;
    this.secretToken = secretToken;
  }

  getInfo(): void {
    console.log(`Environment: ${this.environment}`);
    console.log(`API Key: ${this.apiKey}`);
  }

  // This would error:
  // changeApiKey(newKey: string): void {
  //   this.apiKey = newKey; // ERROR: readonly property
  // }
}

let config = new Configuration("abc123", "production", "secret");
config.getInfo();

// config.apiKey = "new-key"; // ERROR: readonly property
