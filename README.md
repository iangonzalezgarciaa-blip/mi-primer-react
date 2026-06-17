# Pizzería Mamma Mía - Hito 5

Este proyecto es una aplicación web de una pizzería creada con React y Vite. En este hito se implementó el enrutamiento completo de la aplicación con React Router.

## Descripción general

La aplicación muestra una lista de pizzas que se cargan desde una API externa (`GET http://localhost:5000/api/pizzas`) y renderiza cada pizza mediante componentes reutilizables. Ahora incluye navegación completa entre páginas usando React Router Dom.

El carrito de compras está completamente funcional con lógica de cantidades, cálculo de total y navegación desde el Navbar.

## Tecnologías utilizadas

- React
- Vite
- React Router Dom
- Bootstrap
- JavaScript
- HTML
- CSS
- Git y GitHub

## Checklist Hito 5

- [x] Instalación y configuración de React Router Dom en el proyecto.
- [x] Componentes Home, Register, Login, Cart y Pizza trasladados a la carpeta `pages/`.
- [x] Ruta "/" muestra el componente Home.
- [x] Ruta "/register" muestra el componente RegisterPage.
- [x] Ruta "/login" muestra el componente LoginPage.
- [x] Ruta "/cart" muestra el componente Cart.
- [x] Ruta "/pizza/:id" muestra el componente Pizza (navegación dinámica por id).
- [x] Ruta "/profile" muestra el componente Profile.
- [x] Ruta "/404" muestra el componente NotFound.
- [x] Componente NotFound implementado con creatividad y enlace a la ruta "/".
- [x] Componente Profile con email de usuario y botón de cerrar sesión (estáticos por ahora).
- [x] Navbar actualizado con `Link` de React Router para navegación sin recarga.
- [x] Botón "🛒 Total: $xxx" en Navbar redirige a la ruta "/cart".
- [x] Cualquier ruta inexistente redirige al componente NotFound.

## Mejoras aplicadas (feedback del profesor - Hito 4)

- [x] Navegación dinámica hacia la pizza seleccionada usando `useParams` (ya no está hardcodeado a `/pizza/p001`).
- [x] Mensajes de error más amigables para el usuario cuando falla la carga de datos.
- [x] Spinner de carga visual mientras se obtienen los datos de la API.
- [x] Botón de reintentar cuando hay un error de conexión.
- [x] Limpieza de componentes duplicados en la carpeta `components/`.
- [x] Comentarios en español en todos los archivos del proyecto.

## Changelog (registro de cambios)

### Cambios en el Hito 5

- Se configuró React Router Dom con `BrowserRouter`, `Routes` y `Route` en `App.jsx`.
- Se trasladaron todos los componentes de vista a la carpeta `src/pages/`.
- Se creó el componente `NotFound` con página 404 creativa y enlace para volver al inicio.
- Se creó el componente `Profile` con email estático y botón de cerrar sesión.
- Se actualizó `Navbar.jsx` para usar `Link` de React Router en vez de botones con `onClick`.
- Se implementó navegación dinámica en `Pizza.jsx` usando `useParams` para obtener el id desde la URL.
- Se actualizó `CardPizza.jsx` para generar links dinámicos a `/pizza/${id}` en vez de `/pizza/p001`.
- Se mejoraron los mensajes de error en `Home.jsx` y `Pizza.jsx` con alertas amigables y opción de reintentar.
- Se agregaron spinners de Bootstrap para los estados de carga.
- Se eliminaron los componentes duplicados `Cart.jsx` y `Pizza.jsx` de la carpeta `components/`.
- Se agregaron comentarios en español en todos los archivos del proyecto.

### Cambios en el hito 4

- Se consumió la API `GET http://localhost:5000/api/pizzas` desde `Home.jsx`.
- Se creó `Pizza.jsx` para consumir `GET http://localhost:5000/api/pizzas/p001`.
- Se mostraron nombre, precio, ingredientes, imagen y descripción en la vista individual.
- Se conectó el botón "Añadir al carrito" con la lógica de `App.jsx`.

### Cambios en el hito 3

- Se creó el archivo `src/pizzas.js` con el array `pizzas` y el array `pizzaCart`.
- Se diseñó y aplicó un estilo rústico y apetitoso a toda la aplicación.
- Se actualizó `Home.jsx` para renderizar dinámicamente las tarjetas de pizza.
- Se creó `Cart.jsx` con botones para aumentar/disminuir cantidad y cálculo del total.

## Estructura del proyecto

```
src/
├── App.jsx              # Componente raíz con rutas y estado del carrito
├── App.css              # Estilos globales del diseño rústico
├── main.jsx             # Punto de entrada de la app
├── pizzas.js            # Datos estáticos de respaldo
├── index.css            # Estilos base
├── components/
│   ├── CardPizza.jsx    # Tarjeta de pizza para el catálogo
│   ├── Footer.jsx       # Pie de página
│   ├── Header.jsx       # Banner principal
│   └── Navbar.jsx       # Barra de navegación con Link
└── pages/
    ├── Home.jsx         # Página principal con catálogo
    ├── LoginPage.jsx    # Formulario de inicio de sesión
    ├── RegisterPage.jsx # Formulario de registro
    ├── Cart.jsx         # Carrito de compras
    ├── Pizza.jsx        # Detalle individual de pizza
    ├── Profile.jsx      # Perfil del usuario
    └── NotFound.jsx     # Página 404
```

## Rutas de la aplicación

| Ruta | Componente | Descripción |
|------|-----------|-------------|
| `/` | Home | Catálogo de pizzas |
| `/login` | LoginPage | Formulario de login |
| `/register` | RegisterPage | Formulario de registro |
| `/cart` | Cart | Carrito de compras |
| `/pizza/:id` | Pizza | Detalle de una pizza (dinámico) |
| `/profile` | Profile | Perfil del usuario |
| `/404` | NotFound | Página no encontrada |
| `*` | NotFound | Cualquier ruta inexistente |

## Requisitos previos

Para correr `npm install` en tu PC necesitas abrir la **terminal** (línea de comandos). Así se hace:

### En Windows:

1. Abre la carpeta de tu proyecto `mi-primer-react` en el explorador de archivos
2. Haz click derecho en un espacio vacío dentro de la carpeta
3. Selecciona **"Abrir en Terminal"** (o "Abrir ventana de PowerShell aquí")
4. Escribe `npm install` y presiona Enter

### Alternativa con VS Code (si lo usas):

1. Abre tu proyecto en VS Code
2. Presiona **Ctrl + ñ** (o Ctrl + `) para abrir la terminal integrada
3. Escribe `npm install` y presiona Enter

### Requisito:

Necesitas tener **Node.js** instalado en tu PC. Si no lo tienes, descárgalo de https://nodejs.org (la versión LTS). Al instalar Node.js, npm se instala automáticamente.

Para verificar si ya lo tienes, escribe en la terminal:

```bash
node --version
npm --version
```

Si te aparecen números de versión, ya lo tienes instalado y puedes correr `npm install`.

## Cómo ejecutar el proyecto

1. Instala dependencias:

```bash
npm install
```

2. Levanta el servidor del backend (API de pizzas):

```bash
cd simple-api-backend-nodejs-express-fs-json-jwt-main
node index.js
```

3. Levanta el servidor de desarrollo (en otra terminal):

```bash
npm run dev
```

4. Crea la versión de producción:

```bash
npm run build
```

## Comentarios finales

Este archivo está actualizado para reflejar el estado actual del proyecto en el hito 5. Se implementó el enrutamiento completo con React Router Dom, se aplicó el feedback del profesor del hito 4 (navegación dinámica y mensajes de error amigables), y se pulió todo el proyecto con comentarios en español para facilitar la lectura y comprensión del código.

Si quiere y me puede contactar por Iangonzalezgarciaa@gmail.com.
