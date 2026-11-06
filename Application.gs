/**
 * Único servicio inicial para la interfaz. Devuelve exclusivamente metadatos.
 * Los futuros servicios con datos comerciales deberán comprobar permisos.
 * Mantener los valores compatibles con google.script.run (sin objetos Date).
 */
function getApplicationBootstrap() {
  return JSON.parse(JSON.stringify(BRUMAR_CONFIG));
}
