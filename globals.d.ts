// Ambient declarations for global stylesheet side-effect imports
// (e.g. `import "./globals.css"`). Next.js handles CSS at build time;
// this just satisfies the TypeScript checker under moduleResolution: "bundler".
declare module "*.css";
