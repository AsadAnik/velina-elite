import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const appRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // Keep Turbopack scoped to ve-web (avoids scanning the whole monorepo)
  turbopack: {
    root: appRoot,
  },
};

export default nextConfig;
