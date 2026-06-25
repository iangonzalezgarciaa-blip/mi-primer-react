@echo off
chcp 65001 >nul 2>nul
title Pizzeria Mamma Mia - Iniciando proyecto...
color 0E

echo ============================================
echo   PIZZERIA MAMMA MIA - Inicio automatico
echo ============================================
echo.

:: Nos movemos a la carpeta donde esta el .bat
cd /d "%~dp0"

:: Verificar que Node.js este instalado
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js no esta instalado.
    echo Descargalo de https://nodejs.org
    pause
    exit /b
)

echo [1/4] Instalando dependencias del frontend...
call npm install
if %errorlevel% neq 0 (
    echo [ERROR] Fallo al instalar dependencias del frontend.
    pause
    exit /b
)

echo.
echo [2/4] Instalando dependencias del backend...
cd /d "%~dp0simple-api-backend-nodejs-express-fs-json-jwt-main"
if not exist "package.json" (
    echo [ERROR] No se encontro la carpeta del backend.
    echo Asegurate de que la carpeta simple-api-backend-nodejs-express-fs-json-jwt-main exista.
    pause
    exit /b
)
call npm install
if %errorlevel% neq 0 (
    echo [ERROR] Fallo al instalar dependencias del backend.
    pause
    exit /b
)
cd /d "%~dp0"

echo.
echo [3/4] Levantando el backend (API de pizzas)...
start "Backend - API Pizzas" cmd /k "cd /d "%~dp0simple-api-backend-nodejs-express-fs-json-jwt-main" && node index.js"

:: Esperar 3 segundos para que el backend arranque
timeout /t 3 /nobreak >nul

echo.
echo [4/4] Levantando el frontend (React + Vite)...
start "Frontend - React" cmd /k "cd /d "%~dp0" && npm run dev"

:: Esperar 4 segundos para que Vite arranque
timeout /t 4 /nobreak >nul

echo.
echo Abriendo el navegador...
start http://localhost:5173

echo.
echo ============================================
echo   Proyecto iniciado correctamente!
echo.
echo   Frontend: http://localhost:5173
echo   Backend:  http://localhost:5000
echo.
echo   Para detener los servidores, cierra las
echo   ventanas de terminal que se abrieron.
echo ============================================
echo.
pause
