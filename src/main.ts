import { CONFIG } from "./config";
import { buildServer } from "./server/app";

async function gracefulShutdown({
  app,
}: {
  app: Awaited<ReturnType<typeof buildServer>>;
}) {
  await app.close();
}

async function main() {
  const app = await buildServer();

  await app.listen({
    host: CONFIG.HOST,
    port: CONFIG.PORT,
  });

  const signals = ["SIGINT", "SIGTERM"];

  for (const signal of signals) {
    process.on(signal, () => {
      console.log("Got Signal", signal);
      gracefulShutdown({
        app,
      });
    });
  }
}

main();
