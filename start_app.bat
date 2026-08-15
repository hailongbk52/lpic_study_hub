@echo off
echo ========================================================
echo JNCIA Study Hub - Local Server
echo Vui long GIU NGUYEN cua so mau den nay trong suot qua trinh hoc.
echo ========================================================
start http://localhost:8000
python -m http.server 8000

