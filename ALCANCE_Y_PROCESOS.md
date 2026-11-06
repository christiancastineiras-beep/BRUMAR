# Alcance y procesos de BRUMAR

## Confirmado por el usuario

- Comercio de venta de pescado llamado BRUMAR.
- Sistema integral de gestión y automatización.
- Interfaz HTML y funciones de Google Apps Script.
- Pedidos y seguimiento, costos y ganancias, cartera de clientes, avisos y recordatorios, control de stock.
- El detalle profundo de los procesos se proporcionará más adelante.

## Módulos previstos

| Módulo | Alcance por desarrollar |
| --- | --- |
| Pedidos y seguimiento | Creación, detalle, evolución del pedido y consulta de su historial. |
| Clientes | Cartera, contactos e historial comercial. |
| Stock | Productos, existencias y movimientos; evaluar lotes, vencimientos, reservas y mermas. |
| Costos y ganancias | Costos, ingresos y resultados con criterios acordados con BRUMAR. |
| Avisos y recordatorios | Pendientes y alertas; definir destinatarios, canales y frecuencia. |
| Panel general | Indicadores derivados de las operaciones que se implementen. |

Compras, proveedores, cobros, gastos y cuentas corrientes se evaluarán como procesos relacionados; su alcance todavía no está confirmado.

## Propuesta técnica por validar

Interfaz HTML → servicios Apps Script → almacenamiento inicial en Google Sheets.

Google Sheets es una propuesta, no una decisión cerrada. Relevar cantidad de productos, pedidos diarios, historial esperado, usuarios y concurrencia antes de cerrar el modelo. Revisar las cuotas de Apps Script al diseñar las automatizaciones.

## Orden de trabajo propuesto

1. **Relevamiento:** describir operaciones y casos excepcionales con ejemplos reales.
2. **Datos y accesos:** definir campos, relaciones, unidades de medida y responsables.
3. **Primer circuito completo:** cliente, productos, pedido, seguimiento y cierre según el flujo acordado.
4. **Existencias y resultados:** integrar entradas, salidas, costos y cobros conforme al alcance definido.
5. **Automatizaciones:** incorporar recordatorios y avisos con sus reglas y registros de ejecución.
6. **Prueba y puesta en marcha:** validar en un entorno de prueba, preparar los datos iniciales y comprobar el circuito con BRUMAR.

El orden podrá cambiar según las prioridades del comercio.

## Información a relevar

### Pedido y entrega

- Cómo llega un pedido: mostrador, teléfono, WhatsApp u otro canal.
- Quién lo registra y qué información necesita.
- Venta minorista, mayorista o ambas; retiro, reparto u otras modalidades.
- Estados reales y responsables de cada paso; cancelaciones y devoluciones.
- Diferencia entre cantidad pedida, preparada, pesada y entregada.
- Si el precio es definitivo al pedir o se confirma después del pesaje.
- Señas, pagos parciales, vencimientos y cierre del cobro, si corresponden.

### Productos y stock

- Especies, cortes, presentaciones y condiciones: fresco o congelado, cuando aplique.
- Unidades utilizadas: kilogramos, unidades, cajas u otras; conversiones y precisión.
- Cómo ingresa la mercadería y cómo se registra su costo.
- Uso de lotes, fechas de ingreso, vencimientos y ubicaciones.
- Rendimiento de limpieza o fileteado, mermas, pérdidas y devoluciones.
- Cuándo se reserva stock, cuándo sale y cómo se corrigen diferencias.

### Costos y resultados

- Criterio para asignar costos a la mercadería vendida, a definir.
- Tratamiento de gastos, reparto, descuentos, comisiones e impuestos, según corresponda.
- Moneda y redondeos; listas de precios por cliente o tipo de venta.
- Distinguir ventas, cobros, margen bruto y resultado neto en los informes.

### Clientes y comunicación

- Datos necesarios, historial y condiciones comerciales por cliente.
- Qué eventos requieren avisos, a quién y por qué canal.
- Si habrá comunicaciones a clientes o solamente recordatorios internos.
- Herramientas actuales y planillas que deban migrarse.

### Usuarios y operación

- Personas que usarán el sistema y permisos por función.
- Cuenta Google propietaria y cuentas de quienes operarán.
- Dispositivos, conexión disponible y necesidad de uso simultáneo.
- Volumen diario, sucursales o depósitos y período de historial.

## Criterios técnicos para la implementación

Estos son criterios propuestos; aún no están implementados en los módulos operativos:

- Validar y autorizar cada operación en el servidor.
- Asignar identificadores estables y registrar cambios relevantes con fecha y responsable.
- Conservar movimientos de stock y de dinero para reconstruir saldos e investigar diferencias.
- Gestionar concurrencia, reintentos y fallos parciales para evitar operaciones duplicadas o incompletas.
- Guardar precios y costos históricos necesarios para que los resultados de operaciones anteriores no cambien al actualizar el catálogo.
- Separar datos de prueba y producción, y definir respaldos y recuperación.
- Activar automatizaciones con registro de sus resultados y tratamiento de errores.

## Registro de decisiones pendientes

| Decisión | Estado |
| --- | --- |
| Almacenamiento definitivo | Sheets propuesto; pendiente de volumen y concurrencia. |
| Estados del pedido | Pendiente del proceso real. |
| Unidades y pesaje final | Pendiente. |
| Política de reservas y descuento de stock | Pendiente. |
| Método de costeo y alcance de ganancias | Pendiente. |
| Moneda, precios y redondeos | Pendiente. |
| Roles y modelo de acceso | Pendiente. |
| Canales y reglas de avisos | Pendiente. |
| Carga inicial y migración | Pendiente. |
