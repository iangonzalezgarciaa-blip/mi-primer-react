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