import resolveConfig from "tailwindcss/resolveConfig.js";
import tailwindConfig from "./tailwind.config.mjs";

const fullConfig = resolveConfig(tailwindConfig);
console.log("Screens =", fullConfig.theme.screens);
