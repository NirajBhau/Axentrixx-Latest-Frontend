@echo off
echo ==========================================
echo       Axentrixx Cloud Backup Tool
echo ==========================================
echo.
echo Adding changes to git...
git add .
echo.
echo Committing changes...
git commit -m "Auto-backup: %date% %time%"
echo.
echo Pushing to GitHub (Cloud)...
git push origin main
echo.
echo ==========================================
echo       Backup Complete!
echo ==========================================
pause
