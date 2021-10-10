for /F "tokens=*" %%A in (lochamps.txt) do (
	powershell -Command "Invoke-WebRequest https://ddragon.leagueoflegends.com/cdn/img/champion/splash/%%A_0.jpg -OutFile ./img/%%A.jpg"
)