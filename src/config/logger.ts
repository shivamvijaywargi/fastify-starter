import pino from "pino";
// import { z } from "zod";
// import { CONFIG } from ".";

// const logLevelToSeverityLookup: Record<string, string> = {
//   "10": "TRACE",
//   "20": "DEBUG",
//   "30": "INFO",
//   "40": "WARNING",
//   "50": "ERROR",
//   "60": "CRITICAL",
// };

export const logger = pino({
  level: "debug",
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
    },
  },
  // Add env vars below to not let them get displayed in logs
  redact: ["DATABASE_CONNECTION", "MONGO_URI"],
});

// export let logger: Readonly<Logger>;

// const loggerConfig = z.object({
//   AWS_CLOUDWATCH_LOG_GROUP_NAME: z.string().default("fastify-log-stream"),
//   AWS_CLOUDWATCH_LOG_REGION: z.string().default("us-east-1"),
//   AWS_CLOUDWATCH_LOG_ACCESS_KEY_ID: z.string().min(1).optional(),
//   AWS_CLOUDWATCH_LOG_ACCESS_KEY_SECRET: z.string().min(1).optional(),
//   AWS_CLOUDWATCH_LOG_INTERVAL: z.coerce.number().default(1000),
//   NODE_ENV: z.enum(["development", "test", "production"]).default("production"),
// });

// export const initLogger = async () => {
//   const config = loggerConfig.parse(process.env);
//   const targets: pino.TransportMultiOptions["targets"][number][] = [
//     {
//       level: "info",
//       target: "pino/file",
//       options: {
//         destination: 1,
//         mkdir: true,
//       },
//     },
//   ];

//   const transport = pino.transport({
//     targets,
//   });

//   logger = pino(
//     {
//       mixin(_context, level) {
//         return {
//           severity:
//             logLevelToSeverityLookup[level] || logLevelToSeverityLookup["30"],
//         };
//       },
//       level: CONFIG.LOG_LEVEL || "info",
//       formatters: {
//         bindings: (bindings) => ({
//           pid: bindings.pid,
//           hostname: bindings.hostname,
//           // node_version: process.version
//         }),
//       },
//     },
//     transport
//   );

//   return logger;
// };
