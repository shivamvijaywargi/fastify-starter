import "dotenv/config";

const { PORT, NODE_ENV, HOST } = process.env;

export const CONFIG = {
  PORT: Number(PORT) || 5500,
  NODE_ENV: NODE_ENV || "dev",
  HOST: HOST || "0.0.0.0",
};
