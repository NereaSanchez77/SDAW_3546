# Proyecto SDAW_3546
## Nerea Sanchez Tornel
Este proyecto es una aplicación web muy sencilla que muestra un mensaje al pulsar un botón.  
Incluye un servidor local creado con Node.js y Express para poder ejecutarlo en el navegador.

---

## 📌 1. Requisitos previos

Antes de ejecutar el proyecto debes tener instalado:

- **Node.js** (versión 14 o superior)
- **npm** (gestor de paquetes que viene con Node)

Puedes comprobar si están instalados con:

node -v
npm -v

---

## 📦 2. Instalación de dependencias

Dentro de la carpeta del proyecto (`SDAW_3546`), ejecutar:

npm install


Este comando instalará automáticamente todas las dependencias necesarias, incluyendo **Express**.

---

## ▶️ 3. Levantar el servidor web

Para iniciar el servidor, ejecutar:

npm start


Si todo está correcto, verás en la terminal el mensaje:

Servidor iniciado en http://localhost:8080


---

## 🌐 4. Abrir la aplicación en el navegador

Una vez levantado el servidor, abre tu navegador y entra en:

http://localhost:8080

Aparecerá una página con un botón.

Al pulsarlo, se mostrará un mensaje:

Hola Nerea

---

## 📁 5. Estructura del proyecto

SDAW_3546
├── index.html
├── script.js
├── server.js
├── package.json
└── README.md

---

## 📘 Descripción de funcionamiento

- **index.html** contiene el botón de la página.
- **script.js** tiene la función JavaScript que muestra el mensaje.
- **server.js** configura y ejecuta un servidor local con Express.
- **package.json** define el proyecto y sus dependencias.
- **README.md** explica cómo ejecutarlo.

## Comandos
** git checkout ** - cambia de rama
* git checkout -b rama * - Crea una nueva rama
** git commit ** - Añade comentarios de modificación

---
## Información técnica añadida desde rama 2

A continuación, se muestra el historial de commits de la rama main en este punto:

$ git log --oneline
d216902 (HEAD -> rama2-NereaSanchez, origin/rama2-NereaSanchez, origin/main, main) Docs: Añade comentarios de autoría al servidor
ab9aeda Feat: Cambia el color del botón
f3ec2be Primer commit: añadir estructura inicial del proyecto

## Información técnica añadida desde rama 1

A continuación, se muestra el historial de commits de la rama main en este punto:

$ git log --oneline
d216902 (HEAD -> rama1-NereaSanchez, origin/rama1-NereaSanchez, origin/main, main) Docs: Añade comentarios de autoría al servidor
ab9aeda Feat: Cambia el color del botón
f3ec2be Primer commit: añadir estructura inicial del proyecto

