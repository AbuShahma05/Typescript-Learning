interface Config {
  appName: string;
  version: string;
  apiUrl: string;
  port: number;
}

const config: Config = {
  appName: "MyApp",
  version: "1.0.0",
  apiUrl: "https://api.example.com",
  port: 3000
};

export default config;