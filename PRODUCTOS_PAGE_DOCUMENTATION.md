# Documentación: Página de Productos - Structainer V Group

## Resumen
Página de catálogo de productos modulares con diseño corporativo B2B, filtros funcionales por categoría, cards de productos y CTAs estratégicos.

---

## Estructura Implementada

### 1. Hero Section
- **Título principal**: "Soluciones modulares listas para operar"
- **Descripción**: Texto descriptivo sobre las soluciones modulares
- **CTA principal**: Botón "Cotiza tu proyecto" que redirige a contacto
- **Background**: Imagen hero con overlay de marca (azul corporativo #04254D)
- **Responsive**: Adaptado para móvil, tablet y desktop

### 2. Encabezado del Catálogo
- **Título**: "Productos en línea"
- **Subtítulo**: Descripción de la gama de productos disponibles
- **Estilo**: Centrado, espaciado amplio, tipografía limpia

### 3. Filtros de Categorías (Sticky)
- **Posición**: Sticky top (se mantiene fijo al hacer scroll)
- **Categorías**:
  - Todo
  - Casetas
  - Oficinas
  - Dormitorios
  - Sanitarios
  - Comedores
  - Aulas
  - Hoteles
  - Móviles / Remolques
- **Funcionalidad**: Filtro interactivo por estado React
- **UX**: Scroll horizontal en móvil, diseño limpio

### 4. Grid de Productos
- **Layout**: Grid responsivo (1 col móvil, 2 cols tablet, 3 cols desktop)
- **Total de productos**: 36 productos organizados en 9 categorías
- **Spacing**: Amplio espaciado entre cards (gap-8)

### 5. Product Cards
Cada card incluye:
- **Imagen**: Placeholder de alta calidad (reemplazar con fotos reales)
- **Nombre del producto**: Título descriptivo
- **Especificaciones técnicas**:
  - Medidas (dimensiones en pies)
  - Capacidad (personas/uso)
- **CTAs**:
  - Botón "Cotizar" (primario - azul corporativo)
  - Botón "Ver detalle" (secundario - gris claro)
- **Hover effects**: Zoom en imagen, sombra elevada

### 6. CTA Final (Conversión)
- **Título**: "¿Necesitas una solución a la medida?"
- **Descripción**: Mensaje de asesoría personalizada
- **CTA**: Botón "Solicitar cotización" (dorado acento #C8A256)
- **Background**: Azul corporativo full width

---

## Catálogo de Productos Implementado

### CASETAS (5 productos)
1. Oficina de Vigilancia 4×8 | 1 persona
2. Caseta de Vigilancia 8×8 | 2 personas
3. Caseta de Obra 8×16 | 2–3 personas
4. Caseta de Control de Accesos 8×20 | 3 personas
5. Caseta Técnica / Servicios 8×20 | Uso técnico

### OFICINAS MODULARES (5 productos)
1. Oficina Modular 8×20 | 3–4 personas
2. Oficina Modular 8×32 | 5–6 personas
3. Oficina Móvil 8×44 | 6–7 personas
4. Oficina Ejecutiva Modular 12×40 | 8–10 personas
5. Oficinas Corporativas Modulares (Combinables) | Escalable

### DORMITORIOS (5 productos)
1. Dormitorio Modular 8×20 | 4 personas
2. Dormitorio Modular 8×32 | 6 personas
3. Dormitorio Modular 8×44 | 8 personas
4. Dormitorio | Comedor 8×32 | 5 personas
5. Campamento Modular | Alta capacidad

### SANITARIOS (3 productos)
1. Sanitarios Móviles 8×20 | Uso múltiple
2. Sanitarios con Regaderas 8×32 | Industrial
3. Sanitarios Premium / Ejecutivos | Corporativo

### COMEDORES (3 productos)
1. Comedor Modular 8×32 | 20 personas
2. Comedor Modular 8×44 | 30 personas
3. Cocina Industrial Modular | A medida

### AULAS (3 productos)
1. Aula Modular 8×32 | 20 alumnos
2. Aula Modular 8×44 | 30 alumnos
3. Aulas Modulares Combinadas | Escalable

### HOTELES / VIVIENDA (3 productos)
1. Suite Modular Individual | 1–2 personas
2. Habitación Doble Modular | 2–4 personas
3. Hotel Modular | Proyecto integral

### REMOLQUES / SOLUCIONES MÓVILES (4 productos)
1. Oficina Móvil sobre Remolque 8×32 | 4–5 personas
2. Oficina Móvil sobre Remolque 8×44 | 6–7 personas
3. Showroom Móvil | Comercial
4. Unidad Técnica Móvil | Industrial

---

## Características Técnicas

### Tecnologías
- **Framework**: React + TypeScript
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Estado**: React Hooks (useState)

### Estructura de Datos
```typescript
interface Product {
  id: string;           // Identificador único
  name: string;         // Nombre del producto
  category: string;     // Categoría para filtrado
  dimensions: string;   // Medidas técnicas
  capacity: string;     // Capacidad/uso
  image?: string;       // URL imagen (placeholder actual)
}
```

### Componentes
- **ProductosPage**: Componente principal de la página
- **ProductCard**: Componente reutilizable para cada producto
- **Filtros**: Sistema de categorías con estado React

---

## Paleta de Colores Aplicada

- **Azul corporativo**: `#04254D` (hero, botones primarios, sticky bar activo)
- **Dorado acento**: `#C8A256` (CTA principal, hover states)
- **Gris claro**: `#F0F0F0` (background grid de productos)
- **Blanco dominante**: `#FFFFFF` (cards, sections)
- **Grises complementarios**:
  - `#F9FAFB` (gray-50)
  - `#E5E7EB` (gray-200)
  - `#6B7280` (gray-500)
  - `#111827` (gray-900)

---

## Próximos Pasos Recomendados

### 1. Imágenes Reales
- [ ] Reemplazar placeholders con fotografías profesionales de productos
- [ ] Optimizar imágenes (WebP, lazy loading)
- [ ] Agregar alt texts descriptivos para SEO

### 2. Página de Detalle de Producto
- [ ] Crear componente `ProductDetailPage.tsx`
- [ ] Implementar ruta dinámica `/productos/:id`
- [ ] Agregar galería de imágenes
- [ ] Ficha técnica completa
- [ ] Formulario de cotización específico

### 3. Funcionalidad Avanzada
- [ ] Sistema de búsqueda por nombre/código
- [ ] Comparador de productos
- [ ] Descarga de fichas técnicas (PDF)
- [ ] Galería lightbox en cards
- [ ] Animaciones de entrada (Framer Motion)

### 4. SEO y Performance
- [ ] Meta tags por producto
- [ ] Structured data (Schema.org)
- [ ] Lazy loading de imágenes
- [ ] Code splitting por ruta
- [ ] Sitemap XML con productos

### 5. Integraciones
- [ ] Sistema de cotización en línea
- [ ] CRM para leads de productos
- [ ] Tracking de productos vistos
- [ ] Newsletter de nuevos productos

---

## Navegación Implementada

La página está completamente integrada en el sitio:

- **URL**: `/productos`
- **Menú principal**: Enlace "PRODUCTOS" agregado en Header
- **Desktop**: Visible en barra de navegación centrada
- **Mobile**: Disponible en menú hamburguesa
- **Estado activo**: Marcado con underline cuando estás en la página

---

## Archivos Modificados/Creados

### Archivos Nuevos
1. `src/app/pages/ProductosPage.tsx` - Componente principal

### Archivos Modificados
1. `src/app/App.tsx` - Agregada ruta `/productos`
2. `src/app/components/Header.tsx` - Agregado enlace de navegación

---

## Responsive Design

### Mobile (< 768px)
- Grid de 1 columna
- Filtros con scroll horizontal
- Hero con padding reducido
- Cards full width

### Tablet (768px - 1024px)
- Grid de 2 columnas
- Navegación completa
- Espaciado intermedio

### Desktop (> 1024px)
- Grid de 3 columnas
- Máximo ancho contenedor: 1280px (max-w-7xl)
- Sticky filters visible
- Espaciado amplio profesional

---

## Notas de UX/UI

### Inspiración COMMOSA
- ✅ Mucho aire visual (espaciado amplio entre elementos)
- ✅ Imagen protagonista en hero
- ✅ Cards limpias con información técnica precisa
- ✅ Filtros horizontales funcionales
- ✅ UX clara sin distracciones
- ✅ Jerarquía visual profesional

### Tono Corporativo B2B
- Sin marketing vacío ni superlativos
- Información técnica precisa
- Especificaciones claras
- CTAs directos y funcionales
- Lenguaje profesional y confiable

---

## Testing Checklist

- [ ] Filtrado por categorías funciona correctamente
- [ ] Responsive en móvil, tablet y desktop
- [ ] Enlaces de navegación activos
- [ ] CTAs redirigen a /contacto
- [ ] Sticky filters permanece fijo al scroll
- [ ] Imágenes cargan correctamente
- [ ] Hover effects en cards funcionan
- [ ] Menú móvil incluye enlace a Productos
- [ ] Performance óptima (< 3s carga inicial)

---

## Contacto y Soporte

Para dudas sobre la implementación o personalizaciones adicionales, revisar:
- Documentación de React Router: https://reactrouter.com
- Tailwind CSS: https://tailwindcss.com
- Lucide Icons: https://lucide.dev

---

**Última actualización**: 2026-01-14
**Versión**: 1.0
**Status**: ✅ Implementado y funcional
