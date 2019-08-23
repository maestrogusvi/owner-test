## Pre requisitos

PHP >=7.2
REACT >=16.9.0

Para el servidor se usa wampp con php 7.2

Para correr el api de github, se necesita usar composer, una dependencia de la herramienta pide instalar el siguiente archivo Download the latest cacert.pem from https://curl.haxx.se/ca/cacert.pem

Y añadir lo siguiente

Add the following line to php.ini:
curl.cainfo="/path/to/downloaded/cacert.pem"


Para correr el proyecto:

### `npm start`

### Para PRUEBAS

Son pocos los repos con comentarios, pero si quiere encontrar uno
Puede buscar estos repos  'KitpagesFileSystemBundle'

### Base de datos

Dentro del proyecto se encuentra una carpeta BD donde se encuentra la base de datos para usar

Para modificar la configuracion de la misma, buscar ConexionClass.php dentro de API/

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


