# Pizzería Mamma Mía - Hito 8

Este proyecto es una aplicación web de una pizzería creada con React y Vite. En este hito final implementé la autenticación real con el backend usando JWT: login, register, perfil del usuario autenticado y checkout del carrito.

## Descripción general

La aplicación muestra una lista de pizzas que se cargan desde una API externa (`GET http://localhost:5000/api/pizzas`) y renderiza cada pizza mediante componentes reutilizables. Usa React Router Dom para la navegación y Context API para el estado global.

El carrito de compras se maneja con `CartContext`, que permite agregar, eliminar y modificar productos desde cualquier componente sin necesidad de pasar props manualmente. El total se calcula dentro del Context y se comparte entre el Navbar y la página Cart. La sesión se maneja con `UserContext`, que consume las rutas de autenticación del backend (`/api/auth/login`, `/api/auth/register`, `/api/auth/me`) y guarda el token JWT y el email. Con ese token protejo la ruta `/profile`, bloqueo `/login` y `/register` cuando ya hay sesión, y envío el carrito al checkout (`/api/checkouts`).

## Tecnologías utilizadas

- React
- Vite
- React Router Dom
- React Context API
- Bootstrap
- JavaScript
- HTML
- CSS
- Git y GitHub

## Checklist Hito 8

- [x] En `UserContext` implementé `login` y `register` consumiendo `/api/auth/login` y `/api/auth/register`; guardo el token JWT y el email en el estado.
- [x] En `UserContext` implementé `logout` que elimina el token y el email del estado.
- [x] En `UserContext` implementé `getProfile` consumiendo `/api/auth/me` con el token en el header `Authorization: Bearer`.
- [x] Las páginas Login y Register usan los métodos de `UserContext` para acceder al sistema.
- [x] La página Profile muestra el email del usuario autenticado y un botón para cerrar sesión.
- [x] El botón Logout del Navbar cierra la sesión del usuario.
- [x] En `Cart.jsx` implementé el envío del carrito al backend consumiendo `/api/checkouts`.
- [x] En `Cart.jsx` muestro un mensaje de éxito cuando se realiza la compra.

## Checklist Hito 7

- [x] Implementé `useParams` en `Pizza.jsx` para obtener el id y consumir `GET /api/pizzas/:id`.
- [x] `CardPizza.jsx` usa `Link` para redirigir al detalle de la pizza con su id.
- [x] Creé `UserContext` con un token que por defecto es `true` y un método `logout` que lo cambia a `false`.
- [x] El Navbar consume `UserContext`: al hacer click en Logout se ejecuta `logout`.
- [x] Con token `true` muestro Profile y Logout; con token `false` muestro Login y Register. Home y Total siempre visibles.
- [x] La página Cart consume `UserContext` y deshabilita el botón "Pagar" cuando el token es `false`.
- [x] Ruta protegida `/profile`: si el token es `false` redirijo a `/login`.
- [x] Si el token es `true`, bloqueo `/login` y `/register` redirigiendo al Home.

## Checklist Hito 6

- [x] Implementé `CartContext` para manejar el carrito de forma global con `createContext` y `useContext`.
- [x] El Navbar consume `CartContext` para mostrar el total actualizado de los productos.
- [x] Desde Home se pueden agregar productos al carrito usando `CartContext` (botón "Añadir" de cada card).
- [x] La página Cart consume `CartContext` para mostrar productos, modificar cantidades y eliminar items.
- [x] El total se calcula dentro del Context y es el mismo en Navbar y en Cart.
- [x] Implementé `PizzaContext` para centralizar el consumo de la API de pizzas (opcional).
- [x] Reduje los comentarios del código según feedback del profesor.

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

### Cambios en el Hito 8

- Reescribí `UserContext` para autenticación real con JWT: `login` y `register` consumen `/api/auth/login` y `/api/auth/register` y guardan token y email.
- Agregué `logout` (borra token y email) y `getProfile` (consume `/api/auth/me` con el header `Authorization: Bearer`).
- Persisto el token y el email en `localStorage` para mantener la sesión al recargar.
- `LoginPage.jsx` y `RegisterPage.jsx` ahora llaman a `login` y `register` del Context y muestran los errores del backend.
- `Profile.jsx` muestra el email autenticado (obtenido con `getProfile`) y cierra sesión con `logout`.
- `Cart.jsx` envía el carrito a `/api/checkouts` con el token y muestra un mensaje de éxito al completar la compra.
- Mantuve los comentarios al mínimo según el feedback del profesor.

### Cambios en el Hito 7

- Creé `UserContext` con `createContext` y `useContext`: estado `token` (por defecto `true`) y método `logout`.
- Envolví la app con `UserProvider` en `App.jsx`.
- Creé `ProtectedRoute` para proteger `/profile` (redirige a `/login` si el token es `false`).
- Creé `GuestRoute` para bloquear `/login` y `/register` cuando el token es `true` (redirige al Home).
- Actualicé `Navbar.jsx` para consumir `UserContext`: el botón Logout ejecuta `logout` y los botones cambian según el token.
- Actualicé `Cart.jsx` para deshabilitar el botón "Pagar" cuando el token es `false`.
- Conecté el botón de cerrar sesión de `Profile.jsx` con el método `logout`.
- Reduje los comentarios al mínimo en todos los archivos según el feedback del profesor.

### Cambios en el Hito 6

- Se creó `CartContext` con `createContext`, `useContext` y un Provider que envuelve toda la app.
- Se movió la lógica del carrito (estado, addToCart, changeCount, clearCart, total) de `App.jsx` a `CartContext`.
- Se creó `PizzaContext` para centralizar el fetch de pizzas desde la API.
- Se refactorizó `App.jsx` para usar `CartProvider` y `PizzaProvider` como wrappers.
- Se actualizó `Navbar.jsx` para consumir el total directamente desde `CartContext`.
- Se actualizó `Home.jsx` para consumir pizzas desde `PizzaContext` y agregar al carrito con `CartContext`.
- Se actualizó `Cart.jsx` para consumir el carrito y total desde `CartContext`.
- Se actualizó `Pizza.jsx` para usar `addToCart` desde `CartContext`.
- Se redujeron los comentarios excesivos en todos los archivos (feedback del profesor).
- Se eliminaron props innecesarias que ahora se obtienen del Context.

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
├── App.jsx              # Componente raíz con rutas y Providers
├── App.css              # Estilos globales del diseño rústico
├── main.jsx             # Punto de entrada de la app
├── pizzas.js            # Datos estáticos de respaldo
├── index.css            # Estilos base
├── context/
│   ├── CartContext.jsx  # Context global del carrito de compras
│   ├── PizzaContext.jsx # Context para el consumo de la API de pizzas
│   └── UserContext.jsx  # Context de sesión (JWT: login, register, logout, perfil)
├── components/
│   ├── CardPizza.jsx    # Tarjeta de pizza para el catálogo
│   ├── Footer.jsx       # Pie de página
│   ├── Header.jsx       # Banner principal
│   ├── ScrollToTop.jsx  # Scroll al inicio en cada cambio de ruta
│   ├── ProtectedRoute.jsx # Protege rutas según el token
│   ├── GuestRoute.jsx   # Bloquea login/register si hay sesión
│   └── Navbar.jsx       # Barra de navegación con Link y Contexts
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
| `/login` | LoginPage | Formulario de login (bloqueado si hay sesión) |
| `/register` | RegisterPage | Formulario de registro (bloqueado si hay sesión) |
| `/cart` | Cart | Carrito de compras |
| `/pizza/:id` | Pizza | Detalle de una pizza (dinámico) |
| `/profile` | Profile | Perfil del usuario (ruta protegida) |
| `/404` | NotFound | Página no encontrada |
| `*` | NotFound | Cualquier ruta inexistente |

## Guía completa para ejecutar el proyecto

Acá te dejo el paso a paso detallado para que puedas levantar el proyecto en tu computador sin problemas. Yo lo hice así y funciona perfecto.

---

### Paso 1: Instalar Node.js (si no lo tienes)

Lo primero es tener **Node.js** instalado, porque sin eso no puedes usar `npm` (el gestor de paquetes que usamos para instalar las dependencias del proyecto).

1. Ve a https://nodejs.org
2. Descarga la versión **LTS** (la que dice "Recommended for most users")
3. Instálalo con las opciones por defecto (siguiente, siguiente, instalar)
4. Al instalar Node.js, **npm se instala automáticamente**, así que no tienes que hacer nada extra

Para verificar que se instaló correctamente, abre una terminal y escribe:

```bash
node --version
```

```bash
npm --version
```

Si te aparecen números de versión (ejemplo: `v18.17.0` y `9.6.7`), ya estás listo.

---

### Paso 2: Clonar o descargar el proyecto

Si todavía no tienes el proyecto en tu computador:

**Opción A - Clonar con Git:**
```bash
git clone https://github.com/iangonzalezgarciaa-blip/mi-primer-react.git
```

**Opción B - Descargar ZIP:**
1. Ve a https://github.com/iangonzalezgarciaa-blip/mi-primer-react
2. Click en el botón verde **"Code"**
3. Click en **"Download ZIP"**
4. Descomprime el ZIP en tu escritorio o donde quieras

---

### Paso 3: Abrir la terminal en la carpeta del proyecto

Necesitas abrir una terminal (línea de comandos) dentro de la carpeta `mi-primer-react`. Hay varias formas de hacerlo:

**En Windows (explorador de archivos):**
1. Abre la carpeta `mi-primer-react` en el explorador de archivos
2. Haz click derecho en un espacio vacío dentro de la carpeta
3. Selecciona **"Abrir en Terminal"** (o **"Abrir ventana de PowerShell aquí"**)

**En VS Code (lo que yo uso):**
1. Abre la carpeta del proyecto con VS Code (`Archivo > Abrir carpeta`)
2. Presiona **Ctrl + ñ** (o **Ctrl + `**) para abrir la terminal integrada
3. Verifica que en la terminal aparezca algo como `C:\Users\tuUsuario\mi-primer-react>`

**En Mac:**
1. Abre la app **Terminal**
2. Escribe `cd ` (con espacio) y arrastra la carpeta del proyecto a la terminal
3. Presiona Enter

---

### Paso 4: Instalar las dependencias del frontend

Estando en la terminal dentro de la carpeta `mi-primer-react`, escribe:

```bash
npm install
```

Esto descarga todas las librerías que necesita el proyecto (React, Vite, Bootstrap, React Router, etc.). Va a crear una carpeta `node_modules` — eso es normal, no la borres.

> **Nota:** Si te aparece algún warning amarillo, no te preocupes, son avisos menores. Lo importante es que no aparezcan errores en rojo.

---

### Paso 5: Instalar las dependencias del backend (API)

El proyecto tiene una API local que sirve los datos de las pizzas. Para instalar sus dependencias:

```bash
cd simple-api-backend-nodejs-express-fs-json-jwt-main
npm install
```

---

### Paso 6: Levantar el servidor del backend (API de pizzas)

Sin salir de la carpeta del backend, escribe:

```bash
node index.js
```

Deberías ver un mensaje como:

```
Servidor corriendo en el puerto 5000
```

**Importante:** Deja esta terminal abierta y corriendo. No la cierres porque el backend necesita estar activo para que la app funcione.

---

### Paso 7: Levantar el servidor de desarrollo del frontend

Abre **una segunda terminal** (en VS Code puedes abrir otra con el botón `+` en la barra de terminales). Asegúrate de estar en la carpeta raíz del proyecto `mi-primer-react` (no en la carpeta del backend):

```bash
cd ..
```

Luego levanta el servidor de desarrollo:

```bash
npm run dev
```

Deberías ver algo como:

```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

---

### Paso 8: Abrir la aplicación en el navegador

Abre tu navegador (Chrome, Firefox, Edge, etc.) y ve a:

```
http://localhost:5173
```

Deberías ver la página principal de la Pizzería Mamma Mía con el catálogo de pizzas cargadas desde la API.

---

### Alternativa rápida: Inicio automático con doble click (Windows)

Si estás en Windows y no quieres abrir terminales manualmente, incluí un archivo **`iniciar-proyecto.bat`** en la raíz del proyecto que hace todo automáticamente:

1. Busca el archivo **`iniciar-proyecto.bat`** en la carpeta `mi-primer-react`
2. **Doble click** en él
3. ¡Listo! Se abre todo solo

Lo que hace el script:
- Verifica que tengas Node.js instalado
- Instala las dependencias del frontend y backend
- Levanta el backend en una terminal
- Levanta el frontend en otra terminal
- Abre el navegador en http://localhost:5173

Para cerrar todo, solo cierra las dos ventanas de terminal que se abren.

> **Nota:** La primera vez que lo ejecutes puede tardar un poco porque instala las dependencias. Las siguientes veces será mucho más rápido.

> **Si no funciona:** Haz click derecho en el archivo → **"Ejecutar como administrador"**. Si aún así falla, usa la opción manual (Pasos 4 a 8).

---

### Resumen rápido (si ya tienes todo instalado)

Si ya hiciste los pasos anteriores y solo quieres volver a levantar el proyecto:

**Opción A — Con el script .bat (Windows):**
Doble click en `iniciar-proyecto.bat`

**Opción B — Manual por terminal:**
```bash
# Terminal 1: Backend
cd simple-api-backend-nodejs-express-fs-json-jwt-main
node index.js

# Terminal 2: Frontend (en otra terminal)
npm run dev
```

Abre http://localhost:5173 en tu navegador y listo.

---

### Crear la versión de producción (opcional)

Si necesitas generar los archivos optimizados para subir a un servidor:

```bash
npm run build
```

Esto crea una carpeta `dist/` con todos los archivos listos para producción.

---

### Solución de problemas comunes

| Problema | Solución |
|----------|----------|
| `npm: command not found` | No tienes Node.js instalado. Descárgalo de https://nodejs.org |
| `EADDRINUSE: port 5000` | Ya tienes el backend corriendo en otra terminal. Ciérrala o usa otro puerto |
| Las pizzas no cargan | Verifica que el backend esté corriendo en la terminal 1 (`node index.js`) |
| `EADDRINUSE: port 5173` | Ya tienes el frontend corriendo. Cierra la otra terminal o abre http://localhost:5173 directamente |
| Error al instalar dependencias | Borra la carpeta `node_modules` y vuelve a correr `npm install` |
| El .bat no funciona | Click derecho → "Ejecutar como administrador". Si sigue fallando, usa los pasos manuales |

---

## Comentarios finales

Este proyecto lo fui desarrollando por hitos. En el Hito 8 (final) implementé la autenticación real con el backend usando JWT: `UserContext` consume las rutas de `/api/auth`, guarda el token y el email, y con eso protejo el perfil y permito realizar la compra a través de `/api/checkouts`. Mantuve los comentarios al mínimo siguiendo el feedback del profesor.

Si tienes dudas o quieres contactarme: **iangonzalezgarciaa@gmail.com**
