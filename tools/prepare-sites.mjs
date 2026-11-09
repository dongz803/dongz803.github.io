import { cpSync, existsSync, readFileSync, rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

// Hexo's public/ stays the GitHub Pages output. Sites serves the same build
// from dist/, which is one of its supported static output directories.
const source = fileURLToPath(new URL('../public/', import.meta.url));
const destination = fileURLToPath(new URL('../dist/', import.meta.url));

if (!existsSync(new URL('../public/index.html', import.meta.url))) {
  throw new Error('Missing public/index.html. Run npm run build first.');
}
if (!/<html[\s>]/i.test(readFileSync(new URL('../public/index.html', import.meta.url), 'utf8'))) {
  throw new Error('Hexo generated an empty or invalid page. Check that the theme dependencies are installed.');
}

rmSync(destination, { recursive: true, force: true });
cpSync(source, destination, { recursive: true, dereference: false });
console.log('Sites 静态文件已生成：dist/（与 public/ 内容一致）');
