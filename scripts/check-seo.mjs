// scripts/check-seo.mjs
import fs from "fs";

const requiredFiles = [
  "app/sitemap.ts",
  "app/robots.ts",
  "app/manifest.ts",
  "app/opengraph-image.tsx",
  "app/icon.svg",
  "app/apple-icon.png",
];

let missing = 0;
for (const file of requiredFiles) {
  if (!fs.existsSync(file)) {
    console.log(`❌ Missing: ${file}`);
    missing++;
  } else {
    console.log(`✅ Found: ${file}`);
  }
}

if (missing > 0) {
  console.log(`\n${missing} files missing. Please add them for SEO.`);
  process.exit(1);
}
console.log("\n✅ All SEO files present.");