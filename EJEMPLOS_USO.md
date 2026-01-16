# 🎨 Ejemplos de Uso - Sistema de Colores Structainer V

## Guía Rápida de Implementación

---

## 🔥 **Quick Start - Casos Más Comunes**

### 1. Botón de Call-to-Action Principal
```tsx
import { BrandButton } from '../components/BrandButton';

// Botón azul corporativo (principal)
<BrandButton variant="primary" showArrow>
  Solicitar Cotización
</BrandButton>

// Botón dorado (secundario/destacado)
<BrandButton variant="secondary" showArrow>
  Ver Servicios
</BrandButton>

// Botón outline (terciario)
<BrandButton variant="outline">
  Más Información
</BrandButton>
```

### 2. Título de Sección
```tsx
import { SectionTitle } from '../components/SectionTitle';

// Centrado con subtítulo
<SectionTitle
  centered
  subtitle="Soluciones integrales para tu industria"
>
  Nuestros Servicios
</SectionTitle>

// Alineado a la izquierda sin subtítulo
<SectionTitle>
  Casos de Éxito
</SectionTitle>
```

### 3. Card de Característica
```tsx
import { FeatureCard } from '../components/FeatureCard';
import { Building2, Shield, Clock } from 'lucide-react';

// Card con acento dorado superior
<FeatureCard
  icon={Building2}
  title="Construcción Modular"
  description="Soluciones prefabricadas de alta calidad con los mejores estándares"
  variant="gold-accent"
/>

// Card estándar
<FeatureCard
  icon={Shield}
  title="Garantía Total"
  description="Respaldo completo en todos nuestros proyectos"
  variant="default"
/>
```

---

## 📄 **Ejemplos por Tipo de Página**

### 🏠 **Página de Inicio (Home)**

#### Hero Section
```tsx
<section
  className="relative min-h-screen flex items-center justify-center"
  style={{
    backgroundImage: 'url(/hero-image.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
>
  {/* Overlay con gradiente de marca */}
  <div className="absolute inset-0 hero-overlay-brand" />

  <div className="relative z-10 max-w-7xl mx-auto px-6 text-white text-center">
    <h1 className="text-5xl md:text-6xl font-bold mb-6">
      Soluciones Industriales Integrales
    </h1>
    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto" style={{ color: '#F0F0F0' }}>
      Construcción modular prefabricada de calidad premium para tu industria
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <BrandButton variant="secondary" showArrow>
        Explorar Servicios
      </BrandButton>
      <BrandButton variant="outline-gold">
        Ver Proyectos
      </BrandButton>
    </div>
  </div>
</section>
```

#### Sección de Características
```tsx
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <SectionTitle
      centered
      subtitle="Lo que nos hace líderes en la industria"
    >
      Nuestras Ventajas Competitivas
    </SectionTitle>

    <div className="grid md:grid-cols-3 gap-8 mt-12">
      <FeatureCard
        icon={Building2}
        title="Calidad Premium"
        description="Materiales de primera calidad y acabados impecables"
        variant="gold-accent"
      />
      <FeatureCard
        icon={Clock}
        title="Entrega Rápida"
        description="Tiempos de construcción hasta 60% más rápidos"
        variant="gold-accent"
      />
      <FeatureCard
        icon={Shield}
        title="Garantía Total"
        description="Respaldo completo en todos nuestros proyectos"
        variant="gold-accent"
      />
    </div>
  </div>
</section>
```

#### Stats Section
```tsx
<section className="py-20" style={{ backgroundColor: '#04254D' }}>
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid md:grid-cols-4 gap-8 text-center text-white">
      <div>
        <div className="text-5xl font-bold mb-2" style={{ color: '#C8A256' }}>
          +500
        </div>
        <p className="text-gray-300">Proyectos Completados</p>
      </div>
      <div>
        <div className="text-5xl font-bold mb-2" style={{ color: '#C8A256' }}>
          +200
        </div>
        <p className="text-gray-300">Clientes Satisfechos</p>
      </div>
      <div>
        <div className="text-5xl font-bold mb-2" style={{ color: '#C8A256' }}>
          15+
        </div>
        <p className="text-gray-300">Años de Experiencia</p>
      </div>
      <div>
        <div className="text-5xl font-bold mb-2" style={{ color: '#C8A256' }}>
          7
        </div>
        <p className="text-gray-300">Sectores Industriales</p>
      </div>
    </div>
  </div>
</section>
```

---

### 🏢 **Página de Servicios**

#### Lista de Servicios con Cards
```tsx
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <SectionTitle subtitle="Soluciones completas para tu proyecto">
      Nuestros Servicios
    </SectionTitle>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {servicios.map((servicio) => (
        <div key={servicio.id} className="card-brand card-brand-gold-accent">
          <div className="p-6">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
              style={{ backgroundColor: '#04254D' }}
            >
              <servicio.Icon className="w-6 h-6" style={{ color: '#C8A256' }} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-blue">
              {servicio.title}
            </h3>
            <p className="text-gray-600 mb-4">
              {servicio.description}
            </p>
            <BrandButton variant="outline" className="w-full">
              Más Detalles
            </BrandButton>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
```

#### CTA Section
```tsx
<section className="py-16 bg-brand-gray">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-blue">
      ¿Listo para iniciar tu proyecto?
    </h2>
    <p className="text-xl text-gray-600 mb-8">
      Nuestro equipo de expertos está listo para asesorarte
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <BrandButton variant="primary" showArrow>
        Contactar Ahora
      </BrandButton>
      <BrandButton variant="outline">
        Ver Portafolio
      </BrandButton>
    </div>
  </div>
</section>
```

---

### 📦 **Página de Productos**

#### Grid de Productos
```tsx
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <SectionTitle
      centered
      subtitle="Catálogo completo de soluciones modulares"
    >
      Nuestros Productos
    </SectionTitle>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {productos.map((producto) => (
        <div key={producto.id} className="card-brand group">
          <div className="aspect-video overflow-hidden">
            <img
              src={producto.image}
              alt={producto.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="p-6">
            <span className="badge-brand mb-3">
              {producto.category}
            </span>
            <h3 className="text-xl font-bold mb-3 text-brand-blue">
              {producto.title}
            </h3>
            <p className="text-gray-600 mb-4">
              {producto.description}
            </p>
            <BrandButton variant="outline-gold" className="w-full">
              Ver Detalles
            </BrandButton>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
```

---

### 🏗️ **Página de Proyectos**

#### Galería de Proyectos
```tsx
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <SectionTitle
      centered
      subtitle="Casos de éxito que respaldan nuestra experiencia"
    >
      Proyectos Destacados
    </SectionTitle>

    <div className="grid md:grid-cols-2 gap-8">
      {proyectos.map((proyecto) => (
        <div
          key={proyecto.id}
          className="card-brand overflow-hidden group cursor-pointer"
        >
          <div className="relative aspect-video overflow-hidden">
            <img
              src={proyecto.image}
              alt={proyecto.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4">
                <span className="badge-brand mb-2">
                  {proyecto.sector}
                </span>
              </div>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2 text-brand-blue">
              {proyecto.title}
            </h3>
            <p className="text-gray-600 mb-4">
              {proyecto.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">
                {proyecto.location}
              </span>
              <BrandButton variant="outline-gold">
                Ver Caso
              </BrandButton>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
```

---

### 📞 **Página de Contacto**

#### Formulario de Contacto
```tsx
<section className="py-16 bg-white">
  <div className="max-w-5xl mx-auto px-6">
    <SectionTitle
      centered
      subtitle="Estamos aquí para ayudarte con tu proyecto"
    >
      Contáctanos
    </SectionTitle>

    <div className="grid md:grid-cols-2 gap-12">
      {/* Información de contacto */}
      <div>
        <div className="card-brand p-8 mb-6" style={{ backgroundColor: '#04254D' }}>
          <h3 className="text-2xl font-bold mb-6 text-white">
            Información de Contacto
          </h3>
          <div className="space-y-4 text-gray-300">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 mt-1" style={{ color: '#C8A256' }} />
              <div>
                <p className="font-semibold text-white">Teléfono</p>
                <p>442 722 0385</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 mt-1" style={{ color: '#C8A256' }} />
              <div>
                <p className="font-semibold text-white">Email</p>
                <p>ventas@structainer.net</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-1" style={{ color: '#C8A256' }} />
              <div>
                <p className="font-semibold text-white">Ubicación</p>
                <p>Terra Business Park, Nave 29C</p>
              </div>
            </div>
          </div>
        </div>

        <FeatureCard
          icon={Clock}
          title="Horario de Atención"
          description="Lunes a Viernes: 9:00 AM - 6:00 PM"
          variant="gold-accent"
        />
      </div>

      {/* Formulario */}
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-semibold mb-2 text-brand-blue">
            Nombre Completo
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-gold focus:outline-none transition-colors"
            style={{ borderColor: 'rgba(4, 37, 77, 0.2)' }}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-brand-blue">
            Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-gold focus:outline-none transition-colors"
            style={{ borderColor: 'rgba(4, 37, 77, 0.2)' }}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-brand-blue">
            Mensaje
          </label>
          <textarea
            rows={5}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-gold focus:outline-none transition-colors"
            style={{ borderColor: 'rgba(4, 37, 77, 0.2)' }}
          />
        </div>

        <BrandButton variant="primary" className="w-full" showArrow>
          Enviar Mensaje
        </BrandButton>
      </form>
    </div>
  </div>
</section>
```

---

## 🎯 **Elementos Comunes**

### Divider Section
```tsx
<div className="divider-brand" />
```

### Badge/Tag
```tsx
<span className="badge-brand">Nuevo</span>
<span className="badge-brand-outline">Premium</span>
```

### Card con Header
```tsx
<div className="card-brand">
  <div className="card-brand-header">
    <h3 className="text-xl font-bold">Servicio Premium</h3>
  </div>
  <div className="p-6">
    <p className="text-gray-600">
      Descripción del servicio o producto...
    </p>
  </div>
</div>
```

### Accent Line (línea decorativa lateral)
```tsx
<div className="accent-line-gold p-6 bg-brand-gray">
  <h3 className="text-2xl font-bold text-brand-blue mb-4">
    Nota Importante
  </h3>
  <p className="text-gray-600">
    Contenido destacado con línea dorada lateral...
  </p>
</div>
```

### Accent Line Top (línea decorativa superior)
```tsx
<div className="accent-line-gold-top pt-8">
  <h2 className="text-3xl font-bold text-brand-blue mb-4">
    Sección Destacada
  </h2>
  <p className="text-gray-600">
    Contenido con línea dorada superior...
  </p>
</div>
```

---

## 📱 **Responsive Considerations**

```tsx
{/* Mobile: Stack vertical, Desktop: Grid horizontal */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Cards aquí */}
</div>

{/* Botones responsive */}
<div className="flex flex-col sm:flex-row gap-4">
  <BrandButton variant="primary">Botón 1</BrandButton>
  <BrandButton variant="outline">Botón 2</BrandButton>
</div>
```

---

## 🎨 **Color Combinations Recomendadas**

### Combinación 1: Premium (Recomendada para Héroes)
```tsx
// Fondo azul + Texto blanco + Acentos dorados
<section style={{ backgroundColor: '#04254D' }}>
  <h1 className="text-white">Título</h1>
  <p className="text-gray-300">Descripción</p>
  <BrandButton variant="secondary">Acción</BrandButton>
</section>
```

### Combinación 2: Clean (Para contenido general)
```tsx
// Fondo blanco + Azul + Dorado
<section className="bg-white">
  <SectionTitle>Título</SectionTitle>
  <p className="text-gray-600">Contenido...</p>
  <BrandButton variant="primary">Acción</BrandButton>
</section>
```

### Combinación 3: Soft (Para secciones alternas)
```tsx
// Fondo gris claro + Azul + Dorado
<section className="bg-brand-gray">
  <h2 className="text-brand-blue">Título</h2>
  <p className="text-gray-600">Contenido...</p>
  <BrandButton variant="outline-gold">Acción</BrandButton>
</section>
```

---

## ✅ **Checklist de Implementación**

Cuando implementes en una página nueva:

- [ ] Usar `<SectionTitle>` para títulos principales
- [ ] Usar `<BrandButton>` en lugar de botones genéricos
- [ ] Aplicar `.card-brand` a tarjetas
- [ ] Usar `.bg-brand-blue` / `.bg-brand-gray` para secciones
- [ ] Iconos en `#C8A256` (dorado) sobre fondos oscuros
- [ ] Texto principal en `#04254D` (azul corporativo)
- [ ] Usar `.divider-brand` entre secciones grandes
- [ ] Aplicar `.hero-overlay-brand` en imágenes de fondo

---

**¡Estos ejemplos cubren el 90% de los casos de uso comunes!** 🚀

Para casos especiales, consulta `BRAND_COLORS_GUIDE.md` o revisa `brand.css` para ver todas las clases disponibles.
