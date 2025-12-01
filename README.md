# Proyecto SDAW_3546
## Nerea Sanchez Tornel
Este proyecto es una aplicación web muy sencilla que muestra un mensaje al pulsar un botón.  
Incluye un servidor local creado con Node.js y Express para poder ejecutarlo en el navegador.

---
## 📌 1. Descripción del proyecto

El objetivo del proyecto es crear una pequeña aplicación web que cumpla estos requisitos:

- Mostrar en pantalla un botón que, al pulsarlo, ejecute una función JavaScript.
- La función debe mostrar un mensaje emergente: **“Hola Nerea”** (o el nombre del estudiante).
- Ejecutar la aplicación desde un servidor local utilizando Node.js.
- Utilizar Express para gestionar las peticiones.
- Documentar los pasos necesarios para levantar el servidor.
- Subir el proyecto a un repositorio Git remoto público.

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

Servidor iniciado en http://localhost:3000


---

## 🌐 4. Abrir la aplicación en el navegador

Una vez levantado el servidor, abre tu navegador y entra en:

http://localhost:3000

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

SDAW_3546
├── index.html # Página web con el botón
├── script.js # Lógica en JavaScript
├── server.js # Servidor en Node.js con Express
├── package.json # Configuración del proyecto y dependencias
├── README.md # Documentación del proyecto
└── .gitignore # Exclusión de node_modules y archivos temporales


## 🧩 3. Fragmentos de código relevantes

## 📄 index html
<buttom>
## 📄 script.js
function mostrarMensaje() {
    alert("Hola Nerea");
}

## 📄 server.js
const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});

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

## 🖥️ 4. Comandos Node.js utilizados

## Instalar dependencias
npm install
## Iniciar el servidor
npm start
## Comprobar versión de Node y npm
node -v
npm -v

## 🛠️ 5. Comandos Git utilizados

## Inicializar el repositorio
git init
## Añadir archivos al control de versiones
git add .
## Crear el primer commit
git commit -m "Proyecto SDAW inicial"
## Añadir el repositorio remoto
git remote add origin https://github.com/USUARIO/NOMBRE-REPOSITORIO.git
## Subir el proyecto al repositorio
git push -u origin main


## 📝 8. Conclusiones personales

Este proyecto me ha permitido comprender cómo funciona un servidor web básico usando Node.js y Express.
También he aprendido a estructurar un proyecto, gestionar dependencias con npm, y documentarlo de manera profesional mediante un archivo README.
Además, he practicado comandos esenciales de Git y he comprendido la importancia de usar .gitignore para mantener el repositorio limpio y organizado.

## Información técnica añadida desde rama 1
En esta sección se describen los principales comandos de Git utilizados durante la práctica:
- **git init**: Inicializa un nuevo repositorio de Git en la carpeta actual.
- **git add**: Añade archivos modificados al "staging area", preparándolos para el commit.
- **git commit**: Guarda una instantánea de los archivos del "staging area" en el historial local.
- **git branch**: Permite crear, listar o eliminar ramas.
- **git merge**: Fusiona los cambios de una rama en otra.
- **git push**: Sube los commits locales a un repositorio remoto (como GitHub).