// --- Servidor de Práctica SDAW ---
// Creado por Nerea Sanchez Tornel
// ---------------------------------

// 1. Importar el módulo 'express'
const express = require("express");
// ... (el resto del archivo sigue igual)
const app = express();
const path = require("path");

app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
