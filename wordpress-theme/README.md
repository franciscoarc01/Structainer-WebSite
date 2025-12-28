# Structainerv Corporate - WordPress Theme

Tema corporativo moderno construido con React y Vite, diseñado específicamente para Structainerv Group.

## Características

- ✅ Single Page Application (SPA) construida con React
- ✅ Diseño responsivo y moderno
- ✅ Formulario de contacto funcional con envío de emails
- ✅ Almacenamiento de consultas en base de datos
- ✅ Integración completa con WordPress REST API
- ✅ Optimizado con Vite para rendimiento máximo

## Requisitos

- WordPress 5.0 o superior
- PHP 7.4 o superior
- Permisos de escritura en la base de datos

## Instalación

### Paso 1: Comprimir el tema

Antes de subir el tema a WordPress, necesitas comprimir la carpeta `wordpress-theme` en un archivo ZIP.

**Desde la terminal:**
```bash
cd "Corporate Website Design"
zip -r structainerv-corporate-theme.zip wordpress-theme/
```

**Desde el explorador de archivos:**
- Haz clic derecho en la carpeta `wordpress-theme`
- Selecciona "Comprimir" o "Compress"
- Renombra el archivo a `structainerv-corporate-theme.zip`

### Paso 2: Subir a WordPress

1. Accede al panel de administración de WordPress
2. Ve a **Apariencia → Temas**
3. Haz clic en **Añadir nuevo**
4. Haz clic en **Subir tema**
5. Selecciona el archivo ZIP que creaste
6. Haz clic en **Instalar ahora**
7. Una vez instalado, haz clic en **Activar**

### Paso 3: Verificación

1. Visita la página principal de tu sitio
2. Deberías ver la aplicación React cargada correctamente
3. Navega a la página de contacto y verifica que el formulario funcione

## Estructura del Tema

```
wordpress-theme/
├── assets/               # Assets compilados por Vite
│   ├── index-B5nCIy3x.js
│   ├── index-B_9jjHMj.css
│   └── 609e0594c6db439163d815ac5d9383dac9bd059f-Bzr13QL6.png
├── functions.php         # Funcionalidad del tema
├── index.php            # Plantilla principal
├── style.css            # Headers del tema
└── README.md           # Este archivo
```

## Funcionalidades

### Formulario de Contacto

El tema incluye un formulario de contacto totalmente funcional que:

- Envía emails al administrador del sitio
- Guarda las consultas en la base de datos (tabla `wp_structainerv_contacts`)
- Incluye validación de campos
- Muestra mensajes de éxito/error
- Protección contra spam con WordPress nonce

### REST API Endpoint

El tema registra el siguiente endpoint:

```
POST /wp-json/structainerv/v1/contact
```

**Parámetros requeridos:**
- `name` - Nombre completo
- `company` - Nombre de la empresa
- `email` - Email válido
- `phone` - Teléfono
- `projectType` - Tipo de proyecto
- `message` - Descripción del proyecto

### Base de Datos

Al activar el tema, se crea automáticamente la tabla `wp_structainerv_contacts` con la siguiente estructura:

- `id` - ID único
- `name` - Nombre del contacto
- `company` - Empresa
- `email` - Email
- `phone` - Teléfono
- `project_type` - Tipo de proyecto
- `message` - Mensaje
- `created_at` - Fecha de creación

## Configuración de Email

El tema usa la función `wp_mail()` de WordPress. Para asegurar que los emails se envíen correctamente:

1. **Opción 1 - Plugin SMTP (Recomendado):**
   - Instala un plugin como "WP Mail SMTP"
   - Configura tus credenciales SMTP
   - Esto asegura mejor entrega de emails

2. **Opción 2 - Email por defecto:**
   - Los emails se enviarán usando la configuración del servidor
   - Pueden terminar en spam si no está configurado correctamente

## Desinstalación

El tema NO elimina automáticamente la tabla de base de datos al desactivarlo para proteger tus datos. Si deseas eliminar completamente todos los datos:

```sql
DROP TABLE IF EXISTS wp_structainerv_contacts;
```

## Soporte Técnico

Para problemas o preguntas:
- Email: engineering@structainerv.com
- Sitio web: https://structainerv.com

## Desarrollo

Este tema fue construido con:
- React 18
- TypeScript
- Vite 6
- Tailwind CSS
- React Router DOM
- Lucide React (iconos)

## Licencia

GPL v2 or later

## Versión

1.0.0
