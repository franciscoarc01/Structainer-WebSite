# Guía de Colores Corporativos - Structainer V Group

## 🎨 Paleta de Colores Oficial

### 1. **Azul Corporativo** (Principal)
- **HEX:** `#04254D`
- **RGB:** `4, 37, 77`
- **CMYK:** `95, 52, 0, 70`
- **Variante Clara:** `#0A3B7A`

**Uso estratégico:**
- Fondos principales
- Encabezados y títulos
- Hero sections
- Navegación
- Elementos estructurales de marca
- Transmite: Confianza, solidez, ingeniería, corporativo B2B

### 2. **Dorado Técnico** (Secundario/Acento)
- **HEX:** `#C8A256`
- **RGB:** `200, 162, 86`
- **CMYK:** `0, 19, 57, 22`
- **Variante Clara:** `#D4B470`
- **Variante Oscura:** `#A68642`

**Uso estratégico:**
- Acentos y highlights
- Líneas divisoras
- Íconos clave
- CTAs premium
- Detalles en logotipo (la "V" dorada)
- Refuerza: Valor, precisión, calidad, posicionamiento premium

### 3. **Gris Claro/Neutro**
- **HEX:** `#F0F0F0`
- **RGB:** `240, 240, 240`
- **CMYK:** `0, 0, 0, 6`

**Uso estratégico:**
- Fondos secundarios
- Secciones de soporte
- Contenedores
- Layouts limpios
- Aporta: Orden, legibilidad, balance visual

---

## 🛠️ Implementación Técnica

### Variables CSS (theme.css)
```css
:root {
  /* Colores de Marca */
  --brand-blue-corporate: #04254D;
  --brand-gold-technical: #C8A256;
  --brand-gray-neutral: #F0F0F0;
  --brand-blue-light: #0A3B7A;
  --brand-gold-light: #D4B470;
  --brand-gold-dark: #A68642;

  /* Colores del Sistema Mapeados */
  --primary: var(--brand-blue-corporate);
  --secondary: var(--brand-gold-technical);
  --muted: var(--brand-gray-neutral);
  --accent: var(--brand-gold-technical);
}
```

### Clases CSS Utilitarias (brand.css)

#### Fondos
```css
.bg-brand-blue       /* Azul Corporativo */
.bg-brand-gold       /* Dorado Técnico */
.bg-brand-gray       /* Gris Neutral */
.bg-brand-blue-light /* Azul Claro */
```

#### Textos
```css
.text-brand-blue     /* Texto Azul Corporativo */
.text-brand-gold     /* Texto Dorado */
.text-brand-gray     /* Texto Gris */
```

#### Bordes
```css
.border-brand-blue   /* Borde Azul */
.border-brand-gold   /* Borde Dorado */
```

#### Botones Pre-estilizados
```css
.btn-brand-primary         /* Botón Azul Sólido */
.btn-brand-secondary       /* Botón Dorado Sólido */
.btn-brand-outline         /* Botón Outline Azul */
.btn-brand-outline-gold    /* Botón Outline Dorado */
```

#### Efectos Especiales
```css
.card-brand                /* Tarjeta con hover effect */
.section-title-brand       /* Título con línea dorada */
.divider-brand             /* Divisor con gradiente dorado */
.hero-overlay-brand        /* Overlay gradiente para héroes */
.accent-line-gold          /* Línea de acento vertical */
.badge-brand               /* Badge dorado */
```

---

## 📦 Componentes React Creados

### 1. BrandButton
Botón con estilos de marca preconfigurados.

```tsx
import { BrandButton } from './components/BrandButton';

<BrandButton variant="primary">
  Contactar
</BrandButton>

<BrandButton variant="secondary" showArrow>
  Ver Servicios
</BrandButton>

<BrandButton variant="outline">
  Más Información
</BrandButton>

<BrandButton variant="outline-gold" href="/contacto">
  Cotizar Proyecto
</BrandButton>
```

**Variantes:**
- `primary` - Azul sólido
- `secondary` - Dorado sólido
- `outline` - Outline azul
- `outline-gold` - Outline dorado

**Props:**
- `showArrow` - Muestra icono de flecha
- `href` - Convierte en link (opcional)

### 2. SectionTitle
Título de sección con línea dorada decorativa.

```tsx
import { SectionTitle } from './components/SectionTitle';

<SectionTitle
  subtitle="Soluciones integrales para tu industria"
  centered
>
  Nuestros Servicios
</SectionTitle>
```

**Props:**
- `subtitle` - Subtítulo opcional
- `centered` - Centra el título
- `className` - Clases adicionales

### 3. FeatureCard
Tarjeta para características/servicios con icono.

```tsx
import { FeatureCard } from './components/FeatureCard';
import { Building2 } from 'lucide-react';

<FeatureCard
  icon={Building2}
  title="Construcción Modular"
  description="Soluciones prefabricadas de alta calidad"
  variant="gold-accent"
/>
```

**Props:**
- `icon` - Icono de lucide-react
- `title` - Título de la característica
- `description` - Descripción
- `variant` - `default` o `gold-accent`

---

## 🎯 Aplicaciones Realizadas

### Header
- Top bar: Fondo azul corporativo (#04254D)
- Links de contacto: Dorado (#C8A256) con hover dorado claro
- Borde inferior: Línea dorada de 2px
- Links de navegación: Azul en activo, gris cuando inactivo
- Underline activo: Dorado

### Footer
- Fondo: Azul corporativo (#04254D)
- Títulos de secciones: Dorado (#C8A256)
- Texto: Gris claro para legibilidad
- Divisor superior: Línea dorada con transparencia

### Theme Variables
Todas las variables CSS del sistema ahora apuntan a los colores corporativos:
- `--primary` → Azul Corporativo
- `--secondary` → Dorado Técnico
- `--muted` → Gris Neutro
- `--accent` → Dorado Técnico

---

## 💡 Ejemplos de Uso

### Hero Section
```tsx
<section
  className="relative py-20"
  style={{ backgroundColor: '#04254D' }}
>
  <div className="max-w-7xl mx-auto px-6">
    <h1 className="text-5xl font-bold text-white mb-6">
      Soluciones Industriales Integrales
    </h1>
    <p className="text-xl mb-8" style={{ color: '#F0F0F0' }}>
      Construcción modular de calidad premium
    </p>
    <BrandButton variant="secondary" showArrow>
      Conocer Más
    </BrandButton>
  </div>
</section>
```

### Sección de Características
```tsx
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <SectionTitle centered subtitle="Lo que nos hace únicos">
      Nuestras Ventajas Competitivas
    </SectionTitle>

    <div className="grid md:grid-cols-3 gap-8">
      <FeatureCard
        icon={Shield}
        title="Calidad Garantizada"
        description="Certificaciones internacionales"
        variant="gold-accent"
      />
      {/* más cards... */}
    </div>
  </div>
</section>
```

### Card con Hover
```tsx
<div className="card-brand">
  <div className="card-brand-header">
    <h3 className="text-xl font-bold">Servicio Premium</h3>
  </div>
  <div className="p-6">
    <p>Descripción del servicio...</p>
  </div>
</div>
```

### Badge/Tag
```tsx
<span className="badge-brand">Nuevo</span>
<span className="badge-brand-outline">Premium</span>
```

---

## 📋 Checklist de Implementación

- ✅ Variables CSS actualizadas en `theme.css`
- ✅ Clases utilitarias creadas en `brand.css`
- ✅ Header actualizado con paleta corporativa
- ✅ Footer actualizado con paleta corporativa
- ✅ Componentes React creados:
  - ✅ BrandButton
  - ✅ SectionTitle
  - ✅ FeatureCard
- ⏳ Páginas individuales por actualizar con nuevos componentes
- ⏳ Formularios con estilos de marca
- ⏳ Animaciones y transiciones refinadas

---

## 🚀 Próximos Pasos Recomendados

1. **Actualizar todas las páginas** para usar `BrandButton` en lugar de botones genéricos
2. **Aplicar `SectionTitle`** en todas las secciones principales
3. **Convertir cards existentes** a usar `FeatureCard` o `.card-brand`
4. **Actualizar formularios** con estilos de marca consistentes
5. **Añadir iconografía dorada** en puntos clave usando `icon-brand-gold`
6. **Implementar gradientes** en hero sections con `.hero-overlay-brand`

---

## 📞 Contacto

Para dudas sobre implementación de la marca:
- Email: ventas@structainer.net
- Teléfono: 442 722 0385

---

**Actualizado:** Enero 2026
**Versión:** 1.0
