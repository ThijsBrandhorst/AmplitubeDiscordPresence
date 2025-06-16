@echo off
cd /d %~dp0
start "" "C:\Program Files\IK Multimedia\AmpliTube 5\AmpliTube 5.exe"
timeout /t 2 >nul
node index.js
pause
