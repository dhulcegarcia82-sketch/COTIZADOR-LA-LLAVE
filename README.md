# Cotiza tu Kit anti lluvias

Mini web para la Ferretería La Llave, en Los Olivos, Lima. Calcula cantidades de materiales según el techo y la canaleta opcional, presenta precios referenciales y prepara el pedido para WhatsApp. No guarda datos ni procesa pagos.

## Cómo abrirla

Abre `index.html` con doble clic en tu navegador. No hay que instalar nada. WhatsApp requiere conexión para enviar el mensaje.

## Cambiar productos y precios

En `script.js`, edita la lista `PRODUCTOS`, ubicada al inicio. Cada producto tiene nombre, unidad, rendimiento y precio. Por ejemplo, cambia `precio:65` para modificar el precio del impermeabilizante. El rendimiento indica los metros por unidad. Las reglas disponibles son `siempre`, `canaleta` y `calamina`.

## Cambiar el WhatsApp

Edita `NUMERO_WHATSAPP`, al inicio de `script.js`. Coloca código de país y número, sin espacios ni signos. Para Perú, comienza con `51`.
