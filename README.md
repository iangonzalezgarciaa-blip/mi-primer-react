# Pizzería Mamma Mía - Hito 1

Este proyecto fue desarrollado como parte del curso de React de Desafío Latam, bajo la guía del profesor Eber Coronel.

La idea de este trabajo fue crear una primera aplicación con React y Vite, aplicando componentes, props, Bootstrap y una estructura básica de proyecto.

## Descripción

La aplicación simula la página principal de una pizzería llamada **Pizzería Mamma Mía**.

En esta etapa inicial se construyeron las partes principales de la interfaz:

- Navbar
- Header
- Home
- CardPizza
- Footer

Cada componente fue creado por separado para practicar la organización de una aplicación React.

## Tecnologías utilizadas

- React
- Vite
- Bootstrap
- JavaScript
- HTML
- CSS
- Git y GitHub

## Componentes del proyecto

### Navbar

Muestra el menú superior de la página.

Incluye los botones:

- 🍕 Home
- 🔐 Login
- 🔐 Register
- 🛒 Total: $25.000

También se dejó preparada la lógica con una variable `token`, para mostrar botones distintos según si el usuario está logueado o no.

### Header

Muestra el banner principal de la pizzería, con un título, una descripción y una imagen de fondo.

### Home

Es la vista principal de la página.

Dentro de este componente se llama al `Header` y se muestran las tarjetas de pizzas.

### CardPizza

Muestra la información de cada pizza usando props.

Cada tarjeta contiene:

- Nombre de la pizza
- Imagen
- Ingredientes
- Precio
- Botón “Ver más”
- Botón “Añadir”

### Footer

Muestra el texto de derechos reservados de la pizzería.

## Pizzas mostradas

En esta primera versión se muestran tres pizzas:

- Napolitana
- Española
- Pepperoni

## Cómo ejecutar el proyecto

Primero se deben instalar las dependencias:

```bash
npm install
```

## Qué cambié (explicación para novato)

He realizado correcciones y mejoras pequeñas para que el proyecto cumpla con el Hito 2. Aquí te lo explico en palabras sencillas:

- **Ahora hay páginas con formularios:** agregué una página de registro (`RegisterPage`) y una de login (`LoginPage`) con formularios que piden email y contraseña. Archivos: [src/pages/RegisterPage.jsx](src/pages/RegisterPage.jsx#L1-L200) y [src/pages/LoginPage.jsx](src/pages/LoginPage.jsx#L1-L200).
- **Validación básica en el cliente:** los formularios revisan que los campos no estén vacíos, que el email tenga formato básico, que la contraseña tenga al menos 6 caracteres y que ambas contraseñas coincidan en el registro. Los errores se muestran debajo de cada campo.
- **Mensajes amigables:** si el formulario es correcto se muestra un mensaje de éxito; después de 3 segundos se oculta y el formulario se limpia.
- **Inputs controlados:** los valores de los inputs están guardados en el estado de React (`useState`), eso permite que el componente controle lo que el usuario escribe.
- **Accesibilidad básica:** añadí etiquetas `label` e identificadores `id` a los inputs, además de `aria-describedby` y `role="alert"` para que lectores de pantalla anuncien los errores.
- **Navegación simple:** en lugar de instalar una librería externa, la navegación entre `Home`, `Login` y `Register` se maneja con un estado en `App.jsx` y botones en la `Navbar`. Ver: [src/App.jsx](src/App.jsx#L1-L200) y [src/components/Navbar.jsx](src/components/Navbar.jsx#L1-L200).
- **Commit y push:** los cambios fueron guardados en git y subidos al repositorio remoto (branch `master`).

## Cómo ejecutar el proyecto (rápido)

1. Instala dependencias:

```bash
npm install
```

2. Levanta el servidor de desarrollo:

```bash
npm run dev
```

3. Para crear la versión lista para entregar (build):

```bash
npm run build
```

4. Comandos git útiles (si quieres subir cambios desde tu máquina):

```bash
git add .
git commit -m "Descripción de lo que cambiaste"
git push origin master
```

Si al ejecutar `npm run build` obtienes un error, pega la salida aquí y lo arreglo.

---

Si quieres que deje los `label` visibles o escondidos (por ejemplo con `visually-hidden`) dímelo y lo ajusto. Si prefieres rutas reales con `react-router-dom` también lo implemento (requiere instalar la dependencia). 
