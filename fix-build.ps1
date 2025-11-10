# Script para limpiar y reconstruir el proyecto Next.js

Write-Host "Limpiando proyecto..." -ForegroundColor Yellow

# Eliminar carpeta .next
if (Test-Path .next) {
    Remove-Item -Recurse -Force .next
    Write-Host "✓ Carpeta .next eliminada" -ForegroundColor Green
}

# Eliminar node_modules (opcional, descomenta si es necesario)
# if (Test-Path node_modules) {
#     Remove-Item -Recurse -Force node_modules
#     Write-Host "✓ node_modules eliminado" -ForegroundColor Green
# }

# Eliminar package-lock.json (opcional)
# if (Test-Path package-lock.json) {
#     Remove-Item -Force package-lock.json
#     Write-Host "✓ package-lock.json eliminado" -ForegroundColor Green
# }

Write-Host "`nLimpieza completada!" -ForegroundColor Green
Write-Host "Ahora ejecuta: npm run dev" -ForegroundColor Cyan

