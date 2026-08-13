const express = require("express");

const usuariosRoutes =
    require("./routes/usuarios.routes");

const app = express();

const PORT = 3000;
const JWT_SECRET = "mi_clave_super_secreta_123456";

// Middleware para recibir JSON
app.use(express.json());

// Ruta inicial
app.get("/", (req, res) => {
    res.json({
        mensaje: "API de Seguridad funcionando"
    });
});

// Rutas de usuarios
app.use(
    "/api/usuarios",
    usuariosRoutes
);
app.post("/api/calcular", (req, res) => { const { expresion } = req.body; const resultado = eval(expresion); res.json({ resultado }); }); 
// Iniciar servidor
app.listen(PORT, () => {
    console.log(
        `Servidor ejecutándose en http://localhost:${PORT}`
    );
});