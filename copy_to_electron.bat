@echo off
echo Copying files to Electron...
xcopy /E /Y "dist\BluePrintFX\*" "electron-app\resources\"
copy /Y "icon.ico" "electron-app\"
echo Done!
pause