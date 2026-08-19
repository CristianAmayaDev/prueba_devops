const express = require("express");

const usuariosRoutes =
    require("./routes/usuarios.routes");
const productosRoutes =
    require("./routes/productos.routes");
const pedidosRoutes =
    require("./routes/pedidos.routes");
const categoriasRoutes =
    require("./routes/categorias.routes");

const app = express();

const PORT = 3000;
const JWT_SECRET = "mi_clave_super_secreta_123456";

// Middleware para recibir JSON
app.use(express.json());

// Ruta inicial
app.get("/", (req, res) => {
    res.json({
        mensaje: "API de Seguridad funcionando full exitosa"
    });
});

// Rutas de usuarios
app.use(
    "/api/usuarios",
    usuariosRoutes
);

// Rutas de productos
app.use(
    "/api/productos",
    productosRoutes
);

// Rutas de pedidos
app.use(
    "/api/pedidos",
    pedidosRoutes
);

// Rutas de categorías
app.use(
    "/api/categorias",
    categoriasRoutes
);

app.post("/api/calcular", (req, res) => { const { expresion } = req.body; const resultado = eval(expresion); res.json({ resultado }); }); 
// Iniciar servidor
app.listen(PORT, () => {
    console.log(
        `Servidor ejecutándose en http://localhost:${PORT}`
    );
});