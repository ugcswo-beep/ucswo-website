@echo off
setlocal

set SOURCE=%~dp0
set BACKUP_DIR=D:\UCSWO\website-backup
set LOG_FILE=%BACKUP_DIR%\backup_log.txt
set TIMESTAMP=%date:~-4,4%-%date:~-10,2%-%date:~-7,2%_%time:~0,2%-%time:~3,2%

title UCSWO Backup Tool

echo %TIMESTAMP% - Starting backup >> "%LOG_FILE%"
echo ========================================
echo    UCSWO WEBSITE BACKUP TOOL
echo ========================================
echo Backup started: %TIMESTAMP%
echo.

if not exist "%BACKUP_DIR%" (
    echo Creating backup directory: %BACKUP_DIR%
    mkdir "%BACKUP_DIR%"
)

echo Backing up from: %SOURCE%
echo Backing up to: %BACKUP_DIR%\backup_%TIMESTAMP%
echo.

echo Copying website files...
robocopy "%SOURCE%" "%BACKUP_DIR%\backup_%TIMESTAMP%" *.html *.css *.js *.json *.md /E /COPY:DAT /R:3 /W:10 /XF node_modules .git /LOG+:"%LOG_FILE%"

if %ERRORLEVEL% LEQ 7 (
    echo %TIMESTAMP% - BACKUP SUCCESSFUL >> "%LOG_FILE%"
    echo.
    echo ✅ BACKUP COMPLETED SUCCESSFULLY!
    echo.
    echo Files backed up:
    echo - index.html
    echo - css/style.css
    echo - js/script.js
    echo - All other website files
) else (
    echo %TIMESTAMP% - BACKUP FAILED >> "%LOG_FILE%"
    echo.
    echo ❌ BACKUP HAD ISSUES!
)

echo.
echo ========================================
echo Backup location: %BACKUP_DIR%\backup_%TIMESTAMP%
echo Backup log: %BACKUP_DIR%\backup_log.txt
echo ========================================
echo.
pause