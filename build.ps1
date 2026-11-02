# Ekomini Aydin Ticaret - Production Build Script
Write-Host "[Build] Running node build.js..." -ForegroundColor Cyan
node (Join-Path $PSScriptRoot "build.js")
Write-Host "[Build] Build complete!" -ForegroundColor Green
