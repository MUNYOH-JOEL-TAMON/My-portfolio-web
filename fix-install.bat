@echo off
echo Stopping any running Node/npm processes...
taskkill /F /IM node.exe 2>nul
timeout /t 2 /nobreak >nul

echo Cleaning npm cache...
npm cache clean --force

echo Installing dependencies (this may take a while)...
npm install --legacy-peer-deps

echo Done! Try running: npm run dev
pause
