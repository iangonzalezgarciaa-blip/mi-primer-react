# Pizzería Mamma Mía - Hito 4

Este proyecto es una aplicación web de una pizzería creada con React y Vite. El objetivo de este hito es consumir una API externa de pizzas y mostrar los datos en la interfaz.

## Descripción general

La aplicación muestra una lista de pizzas que se cargan desde una API externa (`GET http://localhost:5000/api/pizzas`) y renderiza cada pizza mediante componentes reutilizables.

También se preparó un carrito de compras con lógica de cantidades y cálculo de total, dejando el componente `Cart` listo para usarse en hitos futuros.

## Tecnologías utilizadas

- React
- Vite
- Bootstrap
- JavaScript
- HTML
- CSS
- Git y GitHub

## Changelog (registro de cambios)

### Cambios en el hito 3

- Se creó el archivo `src/pizzas.js` con el array `pizzas` y el array `pizzaCart`.
- Se reemplazaron y actualizaron todas las URLs de imágenes de pizza en `src/pizzas.js`, incluyendo `cuatro estaciones`, `bacon` y `pollo picante`, para que se vean correctamente en la home y en el carrito.
- Se restauraron enlaces de imágenes funcionales, eliminando URLs corruptas y usando direcciones válidas y confiables.
- Se diseñó y aplicó un estilo rústico y apetitoso a toda la aplicación: fondo general, tarjetas, botones, navbar, header y footer.
- Se actualizó `src/pages/Home.jsx` para importar `pizzas` y renderizar dinámicamente un `CardPizza` por cada pizza.
- Se creó `src/components/Cart.jsx` para manejar el carrito con estado local (`useState`).
- En `Cart.jsx` se agregó:
  - botones para aumentar y disminuir cantidad
  - eliminación automática cuando la cantidad llega a 0
  - cálculo del total de la compra
  - botón de pagar preparado para futuros hitos
- Se mejoró el diseño de botones y pestañas para que transmitan una sensación de cabaña acogedora, rústica y con aroma a pizza casera.
- Se dejó comentado el `Cart` en `src/App.jsx` para conservarlo listo sin mostrarlo aún en la navegación principal.
- Se mantuvo toda la aplicación y los componentes en español para facilitar su lectura y comprensión.

### Checklist Hito 4

- [x] Consumir la API `GET http://localhost:5000/api/pizzas` desde `src/pages/Home.jsx`.
- [x] Utilizar `useEffect` en `Home.jsx` para cargar los datos al montar.
- [x] Renderizar dinámicamente las tarjetas de pizza con los datos de la API.
- [x] Crear `src/components/Pizza.jsx` para consumir `GET http://localhost:5000/api/pizzas/p001`.
- [x] Mostrar nombre, precio, ingredientes, imagen y descripción en el componente `Pizza`.
- [x] Añadir navegación desde `Navbar.jsx` para abrir la vista `Pizza`.
- [x] Conectar el botón `Añadir al carrito` de `Pizza.jsx` con la lógica de `App.jsx`.
- [x] Preparar la aplicación para consumir el backend en `localhost:5000` sin usar datos estáticos en Home.

### Comentarios importantes

- En `Home.jsx` ahora la lista de pizzas no está fija: se recorre el array `pizzas` y se renderiza cada tarjeta con las propiedades correctas.
- En `CardPizza.jsx` cada ingrediente se muestra con un elemento `<li>` dentro de un `<ul>`.
- En `Navbar.jsx` el botón de carrito permanece estático, tal como indica la consigna, y será usado más adelante para mostrar el carrito.
- El `Cart` tiene una simulación de carrito funcional que puede ser activada fácilmente desde `App.jsx`.

## Componentes del proyecto

### Navbar

Botones de navegación y botón de carrito estático.

### Header

Banner inicial de la pizzería con título y descripción.

### Home

Renderiza dinámicamente las pizzas usando datos desde la API `GET http://localhost:5000/api/pizzas`.

### CardPizza

Muestra nombre, imagen, ingredientes y precio de cada pizza.

### Cart

Simula un carrito con cantidades, subtotal y total.

### Footer

Pie de página con información de derechos reservados.

## Cómo ejecutar el proyecto

1. Instala dependencias:

```bash
npm install
```

2. Levanta el servidor de desarrollo:

```bash
npm run dev
```

3. Crea la versión de producción:

```bash
npm run build
```

## GitHub y actualizaciones

- Se agregó un changelog en español.
- Se documentó en la misma `README.md` qué se cambió y por qué.
- Se preparó el repositorio para nuevos hitos con componentes reutilizables.

## Comentarios finales

Este archivo está actualizado para reflejar el estado actual del proyecto en el hito 4. En esta ocasión el trabajo fue más laborioso, ya que se revisaron múltiples estilos hasta encontrar un diseño rústico y delicioso que generara la sensación de una cabaña acogedora del sur de Chile.

El cambio incluyó no solo funcionalidades, sino también una experiencia visual más cuidada en botones, pestañas, fondo y tarjetas, para que el cliente sienta ese aroma y calidez desde el primer momento.

Si quiere y me puede contactar por Iangonzalezgarciaa@gmail.com, podria agregar una sección de instrucciones específicas para el `Cart` cuando se integre finalmente en `App.jsx` por si lo necesita.
 
