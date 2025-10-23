@echo off
echo ========================================
echo    UCSWO WEBSITE BACKUP SCRIPT
echo ========================================

set SOURCE=%~dp0
set BACKUP_DIR=D:\UCSWO
set TIMESTAMP=%date:~-4,4%-%date:~-10,2%-%date:~-7,2%_%time:~0,2%-%time:~3,2%

echo Source: %SOURCE%
echo Backup: %BACKUP_DIR%\backup_%TIMESTAMP%
echo.

echo Creating backup folder...
if not exist "%BACKUP_DIR%" mkdir "%BACKUP_DIR%"

echo Starting backup...
robocopy "%SOURCE%" "%BACKUP_DIR%\backup_%TIMESTAMP%" *.html *.css *.js *.json *.md /E /COPY:DAT /R:3 /W:10 /XF node_modules .git

echo.
if %ERRORLEVEL% LEQ 7 (
    echo ✅ BACKUP SUCCESSFUL: %TIMESTAMP%
) else (
    echo ❌ BACKUP HAD ISSUES: %TIMESTAMP%
)

echo.
echo Backup location: %BACKUP_DIR%\backup_%TIMESTAMP%
echo ========================================
pause