const express = require('express');
const path = require('path');

const app = express();

// Servir archivos estáticos desde la carpeta raíz del proyecto
app.use(express.static(path.join(__dirname, '/')));  // __dirname apunta a la carpeta raíz

// Ruta para servir el archivo index.html desde la raíz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Correcto: El archivo index.html está en la raíz
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
