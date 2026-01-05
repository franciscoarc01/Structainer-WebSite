#!/bin/bash

# Script de deployment automatizado para WordPress Theme
# Autor: Structainer V Group
# Descripción: Construye el proyecto Vite, actualiza referencias en functions.php y genera ZIP

set -e  # Detener si hay algún error

echo "🚀 Iniciando proceso de deployment para WordPress..."
echo ""

# 1. Ejecutar build de Vite
echo "📦 Paso 1/5: Ejecutando npm run build..."
npm run build
echo "✅ Build completado"
echo ""

# 2. Extraer nombres de archivos generados
echo "🔍 Paso 2/5: Detectando archivos generados..."
CSS_FILE=$(ls dist/assets/index-*.css 2>/dev/null | head -n 1 | xargs basename)
JS_FILE=$(ls dist/assets/index-*.js 2>/dev/null | head -n 1 | xargs basename)

if [ -z "$CSS_FILE" ] || [ -z "$JS_FILE" ]; then
    echo "❌ Error: No se encontraron archivos CSS o JS en dist/assets/"
    exit 1
fi

echo "   CSS encontrado: $CSS_FILE"
echo "   JS encontrado: $JS_FILE"
echo ""

# 3. Limpiar y copiar assets
echo "🗂️  Paso 3/5: Copiando assets a wordpress-theme..."
rm -rf wordpress-theme/assets/*
cp -r dist/assets/* wordpress-theme/assets/
echo "✅ Assets copiados"
echo ""

# 4. Actualizar functions.php con nuevos nombres de archivos
echo "✏️  Paso 4/5: Actualizando referencias en functions.php..."

# Backup del archivo original
cp wordpress-theme/functions.php wordpress-theme/functions.php.bak

# Actualizar línea del CSS (aproximadamente línea 55)
sed -i.tmp "s|STRUCTAINERV_THEME_URL . '/assets/index-[^']*\.css'|STRUCTAINERV_THEME_URL . '/assets/$CSS_FILE'|g" wordpress-theme/functions.php

# Actualizar línea del JS (aproximadamente línea 63)
sed -i.tmp "s|STRUCTAINERV_THEME_URL . '/assets/index-[^']*\.js'|STRUCTAINERV_THEME_URL . '/assets/$JS_FILE'|g" wordpress-theme/functions.php

# Limpiar archivos temporales de sed
rm -f wordpress-theme/functions.php.tmp

echo "✅ functions.php actualizado con:"
echo "   - CSS: $CSS_FILE"
echo "   - JS: $JS_FILE"
echo ""

# 5. Generar ZIP
echo "📦 Paso 5/5: Generando structainerv-corporate-theme.zip..."
rm -f structainerv-corporate-theme.zip
zip -r structainerv-corporate-theme.zip wordpress-theme/ -q
echo "✅ ZIP generado exitosamente"
echo ""

# Resumen final
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✨ Deployment completado exitosamente"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📁 Archivo listo: structainerv-corporate-theme.zip"
echo "📤 Puedes subirlo a WordPress ahora"
echo ""
echo "Archivos incluidos:"
echo "  • $CSS_FILE"
echo "  • $JS_FILE"
echo "  • functions.php (actualizado)"
echo "  • Todos los archivos del tema"
echo ""
