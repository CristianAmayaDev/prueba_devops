# prueba_devops  
Con el código real, aquí tienes el README ajustado con precisión.

## README.md

```markdown
# API Seguridad — CRUD de Usuarios

API REST construida con Node.js y Express para practicar pruebas de seguridad 
(SAST, SCA, DAST). El proyecto expone un CRUD de usuarios en memoria y contiene 
vulnerabilidades introducidas deliberadamente con fines académicos.

⚠️ **No usar en producción ni exponer a internet.**

## Tecnologías aplicadas

- Node.js
- Express
- Nodemon (recarga automática en desarrollo)
- Almacenamiento en memoria (array de usuarios, sin base de datos)

## Estructura del proyecto

```
api-seguridad/
├── node_modules/
├── src/
│   ├── controllers/
│   │   └── usuarios.controller.js
│   ├── data/
│   │   └── usuarios.js
│   ├── routes/
│   │   └── usuarios.routes.js
│   ├── services/
│   │   └── usuarios.service.js
│   └── app.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

## Cómo funciona

Arquitectura por capas: `routes → controllers → services → data`

- **routes**: define los endpoints y los conecta con su controller.
- **controllers**: recibe la petición HTTP, extrae parámetros/body y llama al service, devolviendo el código de estado correspondiente.
- **services**: contiene la lógica de negocio (buscar, crear, actualizar, eliminar).
- **data**: array en memoria con los usuarios iniciales. Los cambios **no persisten** al reiniciar el servidor.

## Endpoints

| Método | Ruta                 | Descripción                          |
|--------|----------------------|---------------------------------------|
| GET    | `/`                  | Estado de la API                      |
| GET    | `/api/usuarios`      | Lista todos los usuarios              |
| GET    | `/api/usuarios/:id`  | Obtiene un usuario por id             |
| POST   | `/api/usuarios`      | Crea un usuario                       |
| PUT    | `/api/usuarios/:id`  | Actualiza un usuario                  |
| DELETE | `/api/usuarios/:id`  | Elimina un usuario                    |
| POST   | `/api/calcular`      | Evalúa una expresión matemática (⚠️ ver aviso de seguridad) |

## Instalación y ejecución

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo (con recarga automática)
npm run dev

# El servidor queda disponible en:
http://localhost:3000
```

## ⚠️ Vulnerabilidades intencionales (fines educativos)

Este proyecto fue construido a propósito con fallas de seguridad para 
practicar SAST, SCA y DAST:

- **Uso inseguro de `eval()`**: el endpoint `POST /api/calcular` ejecuta 
  directamente la expresión recibida en `req.body.expresion` con `eval()`, 
  permitiendo ejecución de código arbitrario (RCE).
- **Secreto hardcodeado**: la constante `JWT_SECRET` está escrita en texto 
  plano dentro de `app.js`.
- **Mass Assignment**: `crearUsuario` y `actualizarUsuario` aceptan y aplican 
  cualquier campo enviado en el body sin filtrarlo.
- **Falta de validación de entrada**: no hay validación de tipos, formatos 
  ni campos obligatorios (nombre, email, edad) en los endpoints de creación 
  y actualización.
- **Divulgación de información**: la cabecera `X-Powered-By: Express` queda 
  expuesta por defecto.

Estas fallas fueron detectadas y documentadas en los laboratorios de 
seguridad (SAST con Semgrep, SCA con npm audit, DAST con OWASP ZAP).
```

¿Quieres que te lo cree directamente como archivo `README.md` descargable, o prefieres copiarlo tal cual desde aquí?