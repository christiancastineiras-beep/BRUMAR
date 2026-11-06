import { mkdir, readFile, writeFile } from 'node:fs/promises';
import vm from 'node:vm';

const root = new URL('../', import.meta.url);
const source = name => readFile(new URL('src/' + name, root), 'utf8');
const context = vm.createContext({});
vm.runInContext(await source('Config.gs'), context);
vm.runInContext(await source('Application.gs'), context);
const bootstrap = vm.runInContext('getApplicationBootstrap()', context);
let html = await source('Index.html');
for (const name of ['Styles', 'JavaScript']) {
  html = html.replace(`<?!= include_('${name}'); ?>`, await source(name + '.html'));
}
const serialized = JSON.stringify(bootstrap).replace(/</g, '\\u003c');
html = html.replace('</head>', `<script>window.BRUMAR_LOCAL_BOOTSTRAP = ${serialized};</script>\n</head>`);
if (html.includes('<?')) throw new Error('Quedaron instrucciones de plantilla sin resolver.');
await mkdir(new URL('preview/', root), { recursive: true });
const output = new URL('preview/Index.html', root);
await writeFile(output, html, 'utf8');
console.log('Vista local generada: ' + decodeURIComponent(output.pathname));
