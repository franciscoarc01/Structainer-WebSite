# Plugin WordPress - Corporate Website Structainerv

Plugin de WordPress que integra el sitio web corporativo construido con React y Vite. Incluye formulario de contacto completamente funcional con envío de emails y almacenamiento en base de datos.

## 📋 Características

- ✅ Aplicación React completa integrada en WordPress
- ✅ Formulario de contacto funcional con validación
- ✅ Envío automático de emails al administrador
- ✅ Almacenamiento de consultas en base de datos
- ✅ API REST personalizada
- ✅ Shortcode para insertar en cualquier página
- ✅ Diseño responsive y moderno

## 🚀 Instalación

### Opción 1: Subir desde el Panel de WordPress (Recomendado)

1. **Comprimir el plugin en ZIP**:
   - Selecciona la carpeta `wordpress-plugin`
   - Comprímela en un archivo ZIP
   - El archivo debe llamarse algo como `corporate-website-plugin.zip`

2. **Subir al WordPress**:
   - Inicia sesión en tu panel de WordPress
   - Ve a **Plugins** → **Añadir nuevo**
   - Haz clic en **Subir plugin**
   - Selecciona el archivo ZIP
   - Haz clic en **Instalar ahora**
   - Activa el plugin

### Opción 2: Instalación Manual (Si tienes acceso FTP)

1. Sube la carpeta `wordpress-plugin` al directorio `/wp-content/plugins/`
2. Renombra la carpeta a `corporate-website` (opcional pero recomendado)
3. Ve a **Plugins** en el panel de WordPress
4. Activa el plugin "Corporate Website - Structainerv"

## 📝 Uso

### Mostrar el sitio completo

Usa el shortcode en cualquier página o entrada:

```
[corporate_website]
```

### Mostrar solo una página específica

Puedes especificar qué página mostrar:

```
[corporate_website page="home"]
[corporate_website page="about"]
[corporate_website page="services"]
[corporate_website page="contact"]
```

### Crear una página dedicada

1. Ve a **Páginas** → **Añadir nueva**
2. Dale un título (ej: "Sitio Corporativo")
3. En el editor, inserta el shortcode: `[corporate_website]`
4. Publica la página

## 📧 Configuración del Formulario de Contacto

### El formulario funciona automáticamente

Cuando un visitante envía el formulario:
1. ✅ Se envía un email al administrador del sitio
2. ✅ Se guarda la consulta en la base de datos
3. ✅ El visitante recibe un mensaje de confirmación

### Cambiar el email de destino

Por defecto, los emails se envían al email del administrador de WordPress. Para cambiarlo:

1. Ve a **Ajustes** → **Generales**
2. Cambia el campo **Dirección de correo electrónico**
3. Guarda los cambios

### Ver las consultas guardadas

Las consultas se guardan en la tabla `wp_corporate_contacts` de tu base de datos. Puedes verlas usando:

- **phpMyAdmin** (disponible en la mayoría de hostings)
- Un plugin de administración de base de datos como "WP Data Access"

## 🗂️ Estructura de la Base de Datos

El plugin crea automáticamente una tabla con esta estructura:

| Campo | Tipo | Descripción |
|-------|------|-------------|
| id | mediumint | ID único auto-incremental |
| name | varchar(100) | Nombre del contacto |
| company | varchar(100) | Empresa |
| email | varchar(100) | Email |
| phone | varchar(50) | Teléfono |
| project_type | varchar(50) | Tipo de proyecto |
| message | text | Mensaje completo |
| created_at | datetime | Fecha de creación |

## 🔧 Configuración Avanzada

### Personalizar emails

Para personalizar el formato de los emails, edita el archivo `corporate-website-plugin.php` en la función `corporate_website_handle_contact_form()` (líneas 145-178).

### Agregar campos al formulario

1. Edita `src/app/pages/ContactPage.tsx` en tu proyecto Vite
2. Agrega los nuevos campos
3. Actualiza la validación en el endpoint REST API
4. Reconstruye el proyecto con `npm run build`
5. Copia los nuevos archivos al plugin

## 🎨 Personalización de Estilos

Los estilos están incluidos en el archivo CSS compilado. Para personalizarlos:

1. Edita los estilos en tu proyecto Vite
2. Ejecuta `npm run build`
3. Copia el nuevo archivo CSS de `dist/assets/` a `wordpress-plugin/assets/css/`
4. Actualiza el nombre del archivo en `corporate-website-plugin.php` (línea 31)

## ⚙️ Requisitos

- WordPress 5.0 o superior
- PHP 7.4 o superior
- Servidor con capacidad de envío de emails (wp_mail)

## 🐛 Solución de Problemas

### El formulario no envía emails

1. **Verificar configuración SMTP**: WordPress necesita SMTP configurado para enviar emails
2. **Instalar plugin SMTP**: Usa "WP Mail SMTP" o "Easy WP SMTP"
3. **Revisar logs**: Verifica los logs de WordPress para errores

### Los estilos no se cargan

1. Vacía la caché de WordPress (si tienes plugin de caché)
2. Verifica que los archivos CSS existan en `wp-content/plugins/corporate-website/assets/css/`
3. Revisa la consola del navegador para errores

### El shortcode no funciona

1. Asegúrate de que el plugin esté activado
2. Verifica que estés usando el shortcode correcto: `[corporate_website]`
3. Revisa que no haya conflictos con otros plugins

### Error 404 en el endpoint REST API

1. Ve a **Ajustes** → **Enlaces permanentes**
2. Haz clic en **Guardar cambios** (esto regenera las reglas de reescritura)

## 📦 Actualización del Plugin

Para actualizar el plugin con nuevos cambios:

1. Haz los cambios en tu proyecto Vite
2. Ejecuta `npm run build`
3. Copia los nuevos archivos compilados a la carpeta del plugin:
   ```bash
   cp dist/assets/*.js wordpress-plugin/assets/js/
   cp dist/assets/*.css wordpress-plugin/assets/css/
   ```
4. Actualiza los nombres de archivo en `corporate-website-plugin.php` si cambiaron
5. Incrementa el número de versión en el header del plugin
6. Sube el plugin actualizado a WordPress

## 🔐 Seguridad

El plugin incluye:
- ✅ Validación de datos en el servidor
- ✅ Sanitización de inputs
- ✅ Protección contra acceso directo
- ✅ Nonce de WordPress para peticiones REST
- ✅ Prevención de SQL injection

## 📄 Licencia

GPL v2 o posterior

## 💬 Soporte

Para soporte o reportar problemas:
- Email: info@structainerv.com
- Website: https://structainerv.com

---

**Desarrollado por Structainerv**
Versión: 1.0.0
