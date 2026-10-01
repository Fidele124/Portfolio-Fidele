// Génère public/og-image.png (1200x630) à partir des tokens. Usage : node scripts/og-image.mjs (nécessite playwright-core et Chrome).
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { chromium } from "playwright-core";

const css = readFileSync("src/styles/tokens.css", "utf8");
const fontDir = (n) => "file://" + resolve("node_modules/@fontsource-variable", n, "files");
const html = `<html><head><style>${css}
@font-face{font-family:"Plus Jakarta Sans Variable";src:url(${fontDir("plus-jakarta-sans")}/plus-jakarta-sans-latin-wght-normal.woff2);font-weight:200 800}
@font-face{font-family:"Inter Variable";src:url(${fontDir("inter")}/inter-latin-wght-normal.woff2);font-weight:100 900}
body{margin:0;width:1200px;height:630px;background:var(--color-bg-alt);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:center;padding:0 90px;box-sizing:border-box;border-left:16px solid var(--color-accent)}
h1{font-family:var(--font-heading);color:var(--color-heading);font-size:68px;line-height:1.1;margin:0 0 24px}
p{color:var(--color-text-muted);font-size:34px;margin:0}
.n{color:var(--color-accent);font-weight:600;font-size:30px;margin-bottom:28px}
</style></head><body><div class="n">Odette Fidèle Gossi LOKOSSOU</div>
<h1>Je développe des applications web et j'assure le suivi des transactions de paiement.</h1>
<p>Développeuse full stack junior et data analyst des transactions</p></body></html>`;

const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html);
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(300);
await page.screenshot({ path: "public/og-image.png" });
await browser.close();
