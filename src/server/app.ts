import fastify from "fastify";
import { logger } from "../config/logger";

export async function buildServer() {
  const app = fastify({
    logger: logger,
  });

  // Register plugins
  // app.register(...);

  // Register routes
  // app.register(...);

  return app;
}
