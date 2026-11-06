import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import vm from 'node:vm';

const src = new URL('../src/', import.meta.url);
const files = await readdir(src);
const context = vm.createContext({});
for (const file of files.filter(name => name.endsWith('.gs'))) {
  vm.runInContext(await readFile(new URL(file, src), 'utf8'), context, { filename: file });
}
const bootstrap = vm.runInContext('getApplicationBootstrap()', context);
assert.equal(bootstrap.name, 'BRUMAR');
assert.equal(bootstrap.modules.length, 5);
assert.equal(new Set(bootstrap.modules.map(item => item.id)).size, bootstrap.modules.length);
assert.doesNotThrow(() => JSON.parse(JSON.stringify(bootstrap)));
bootstrap.modules[0].title = 'Modificado por un visitante';
assert.equal(vm.runInContext('getApplicationBootstrap().modules[0].title', context), 'Pedidos y seguimiento');
assert.throws(() => vm.runInContext("include_('Config')", context), /Fragmento no permitido/);

const manifest = JSON.parse(await readFile(new URL('appsscript.json', src), 'utf8'));
assert.equal(manifest.runtimeVersion, 'V8');
new Intl.DateTimeFormat('es-AR', { timeZone: manifest.timeZone });

const index = await readFile(new URL('Index.html', src), 'utf8');
for (const name of ['Styles', 'JavaScript']) {
  assert.ok(index.includes(`<?!= include_('${name}'); ?>`));
  const fragment = await readFile(new URL(name + '.html', src), 'utf8');
  if (name === 'JavaScript') {
    const script = fragment.match(/^<script>([\s\S]*)<\/script>\s*$/);
    assert.ok(script, 'El fragmento JavaScript debe incluir sus etiquetas script.');
    new vm.Script(script[1], { filename: name + '.html' });
  }
}
console.log('OK: sintaxis GS/JS, manifiesto, fragmentos y contrato inicial del servidor.');
console.log('Pendiente: prueba real de HTMLService y google.script.run en Google Apps Script.');
