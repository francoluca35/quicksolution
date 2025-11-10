# Verificación del Favicon

## Configuración Actual

El favicon está configurado en **3 lugares** para máxima compatibilidad:

1. ✅ **`src/app/favicon.ico`** - Next.js lo detecta automáticamente (método preferido)
2. ✅ **`public/favicon.ico`** - Servido desde la raíz como `/favicon.ico` (respaldo)
3. ✅ **Metadatos en `src/app/layout.tsx`** - Configuración explícita en los metadatos

## Pasos para Verificar

1. **Detén el servidor de desarrollo** (Ctrl+C)

2. **Limpia la caché de Next.js:**
   ```powershell
   Remove-Item -Recurse -Force .next
   ```

3. **Reinicia el servidor:**
   ```bash
   npm run dev
   ```

4. **Limpia la caché del navegador:**
   - Chrome/Edge: Ctrl+Shift+Delete → Selecciona "Imágenes y archivos en caché" → "Última hora" → Borrar
   - O usa modo incógnito: Ctrl+Shift+N
   - O fuerza la recarga: Ctrl+Shift+R (Windows) o Cmd+Shift+R (Mac)

5. **Verifica que el favicon se esté sirviendo:**
   - Abre DevTools (F12)
   - Ve a la pestaña "Network"
   - Recarga la página (Ctrl+R)
   - Busca `favicon.ico` en la lista
   - Debería aparecer con status 200

6. **Verifica en el HTML generado:**
   - Ve a "View Page Source" o usa DevTools → Elements
   - Busca en el `<head>` las etiquetas `<link rel="icon">`
   - Deberías ver las referencias al favicon

## Solución de Problemas

### Si el favicon NO aparece:

1. **Verifica que el archivo existe:**
   ```powershell
   Test-Path "src\app\favicon.ico"
   Test-Path "public\favicon.ico"
   ```
   Ambos deberían devolver `True`

2. **Verifica que el archivo no esté corrupto:**
   - El archivo debería tener al menos algunos kilobytes
   - Intenta abrirlo en un visor de imágenes para verificar que sea válido

3. **Verifica la consola del navegador:**
   - Abre DevTools (F12)
   - Ve a la pestaña "Console"
   - Busca errores relacionados con el favicon

4. **Verifica la URL directamente:**
   - Navega a: `http://localhost:3000/favicon.ico`
   - Deberías ver el favicon o descargarlo

5. **Prueba con un favicon diferente:**
   - Descarga un favicon de prueba desde internet
   - Reemplaza `src/app/favicon.ico` y `public/favicon.ico`
   - Reinicia el servidor

## Notas

- Next.js 13+ con App Router detecta automáticamente `favicon.ico` en `src/app/`
- Los archivos en `public/` se sirven desde la raíz (`/favicon.ico`)
- La caché del navegador puede ser muy agresiva con los favicons
- Algunos navegadores pueden tardar varios segundos en actualizar el favicon

