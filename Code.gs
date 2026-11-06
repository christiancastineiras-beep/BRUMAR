/** Entrada de la aplicación web. */
function doGet() {
  return HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setTitle('BRUMAR · Gestión integral')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

/** Solo incluye fragmentos estáticos del proyecto; no recibe nombres del visitante. */
function include_(name) {
  if (['Styles', 'JavaScript'].indexOf(name) === -1) {
    throw new Error('Fragmento no permitido.');
  }
  return HtmlService.createHtmlOutputFromFile(name).getContent();
}
