import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  entry: ["src/index.ts"],
  format: ["esm"],
  sourcemap: false,
  minify: true,
  target: "esnext",
  outDir: "dist",
  treeshake: true,
  onSuccess: async () => {
    const fs = await import("fs/promises");
    const path = await import("path");

    // Copy templates directory
    const srcTemplates = path.resolve("src/templates");
    const distTemplates = path.resolve("dist/templates");

    // Recursive copy function
    async function copyDir(src: string, dest: string) {
      await fs.mkdir(dest, { recursive: true });
      const entries = await fs.readdir(src, { withFileTypes: true });

      for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
          await copyDir(srcPath, destPath);
        } else {
          await fs.copyFile(srcPath, destPath);
        }
      }
    }

    await copyDir(srcTemplates, distTemplates);
    console.log("✓ Templates copied to dist/");
  },
});
