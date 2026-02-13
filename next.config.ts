import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig: NextConfig = {
  /* config options here */
};

// Only wrap with Sentry when DSN is available
export default process.env.NEXT_PUBLIC_SENTRY_DSN
  ? withSentryConfig(nextConfig, {
      // Suppress all Sentry CLI logs during build
      silent: true,

      // Upload source maps for better stack traces
      widenClientFileUpload: true,

      // Disable Sentry telemetry
      telemetry: false,

      // Source maps config
      sourcemaps: {
        deleteSourcemapsAfterUpload: true,
      },
    })
  : nextConfig;
