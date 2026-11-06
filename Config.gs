/** Metadatos de la base. Los módulos operativos se definirán con BRUMAR. */
const BRUMAR_CONFIG = Object.freeze({
  name: 'BRUMAR',
  version: '0.1.0',
  stage: 'Base inicial',
  modules: [
    {
      id: 'pedidos',
      title: 'Pedidos y seguimiento',
      description: 'Desde la recepción del pedido hasta su entrega y cierre.',
      pending: 'Definir cómo se recibe el pedido, sus datos, estados, responsables y cantidades finales.'
    },
    {
      id: 'clientes',
      title: 'Cartera de clientes',
      description: 'Contactos e historial comercial en un mismo lugar.',
      pending: 'Definir los datos de cada cliente, sus condiciones comerciales y el historial necesario.'
    },
    {
      id: 'stock',
      title: 'Control de stock',
      description: 'Productos, existencias, entradas y salidas de mercadería.',
      pending: 'Definir unidades, pesaje, movimientos, reservas, lotes y mermas según la operación real.'
    },
    {
      id: 'resultados',
      title: 'Costos y ganancias',
      description: 'Información para conocer el resultado del negocio.',
      pending: 'Definir costos, precios, gastos y criterios para calcular los resultados.'
    },
    {
      id: 'avisos',
      title: 'Avisos y recordatorios',
      description: 'Pendientes y alertas vinculados con la actividad diaria.',
      pending: 'Definir eventos, destinatarios, canales y frecuencia de los avisos.'
    }
  ]
});
