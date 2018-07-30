# Servicio REST en Expressjs

## Set up && setting DB 

1) Ejecutar el sql serviciouser.sql 
2) La db se configura desde routes/users.js . 

	Datos por default > {host:'localhost',user:'root',database:'userservice'}

## Servicios 

## Métodos habilitados

GET :: consulta
POST :: update 
PUT :: insert

## Endpoints

| Endpoints | Method | Params | response |
| --------- | --------- | --------- | --------- |
| /addUser | PUT | username, password, email | status_code = 0 |
| /getUser/:username | GET | username | username, password, emial |
| /activateUser | POST | username | status_code = 0 |
| /deactivateUser | POST | username | status_code = 0 | 