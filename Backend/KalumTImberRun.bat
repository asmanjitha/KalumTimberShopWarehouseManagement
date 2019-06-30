if not "%minimized%"=="" goto :minimized
set minimized=true
@echo off

start chrome http://localhost:3000
cd "C:\app path"

start /min cmd /C "npm start"
goto :EOF
:minimized

