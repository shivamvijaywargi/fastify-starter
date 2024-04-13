const logger = {
  level: "debug",
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
    },
  },
  // Add any other env name that you want to not show in the logs
  redact: ["MONGO_URI", "DATABASE_CONNECTION"],
};

export default logger;
