# 3.20*: Base de datos de la Agenda Telefónica, paso 8
# Agrega validación a tu aplicación de agenda telefónica para asegurarte de que los números de teléfono tengan el formato correcto. Un número de teléfono debe:

# Tener una longitud de 8 o más caracteres.
# Estar formado por dos partes separadas por -, la primera parte tiene dos o tres números y la segunda parte también consiste en números.

# Por ejemplo, 09-1234556 y 040-22334455 son números de teléfono válidos.
# Por ejemplo, 1234556, 1-22334455 y 10-22-334455 son inválidos.
# Utiliza un validador personalizado para implementar la segunda parte de la validación.

# Si una solicitud HTTP POST intenta agregar una persona con un número de teléfono no válido, el servidor debería responder con un código de estado apropiado y un mensaje de error.

# 3.21 Desplegando el backend con base de datos en producción
# Genera una nueva versión "full stack" de la aplicación creando una nueva compilación de producción del frontend y copiándola al repositorio del backend. Verifica que todo funcione localmente utilizando la aplicación completa desde la dirección http://localhost:3001/.

# Lleva la versión más reciente a Fly.io/Render y verifica que todo funcione allí también.

# NOTA: debes desplegar el BACKEND en el servicio en la nube. Si estás utilizando Fly.io, los comandos deben ejecutarse en el directorio raíz del backend (es decir, en el mismo directorio donde se encuentra el package.json del backend). En caso de usar Render, el backend debe estar en la raíz de tu repositorio.

# NO debes desplegar el frontend directamente en ninguna etapa de esta parte. Es solo el repositorio del backend que se despliega en toda esta sección, nada más.
