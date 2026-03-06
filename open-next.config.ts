import type { OpenNextConfig } from "@opennextjs/cloudflare";

const config: OpenNextConfig = {
  // The default list of files to bundle in the worker
  bundleFiles: true,
  // Minify the worker bundle
  minify: true,
  // The build output directory
  buildDir: ".open-next",
  // Internal cache directory
  cacheDir: ".open-next/cache",
};

export default config;
