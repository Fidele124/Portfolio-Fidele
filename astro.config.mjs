import { defineConfig } from "astro/config";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://example.com", // à remplacer par l'URL de déploiement
  integrations: [icon(), sitemap()],
});
