import fs from 'node:fs';
import path from 'node:path';

const source = path.join(process.cwd(), 'dist', 'sitemap-index.xml');
const target = path.join(process.cwd(), 'dist', 'sitemap.xml');

if (fs.existsSync(source)) {
  fs.copyFileSync(source, target);
  console.log('✅ Sitemap copied: dist/sitemap-index.xml -> dist/sitemap.xml');
} else {
  console.log('⚠️ sitemap-index.xml not found in dist/');
}
