This project was created with [Create React App](https://github.com/facebookincubator/create-react-app).

## Estructura de Directorios

```
my-app/
  build/
  node_modules/
  package.json
  public/
    assets/
    index.html
    manifest.json
  src/
    components/
      films/
        FilmCard.jsx
        FilmDetail.jsx
        FilmCategory.jsx
        FilmsPlaceHolder.jsx
      people/
      planets/
      root/
      species/
      starships/
      vehicles/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    registerServiceWorker.js
  .gitignore
  README.md
```

### `Dentro de /assets:`

Se ubican las imágenes usadas en el proyecto

### `Dentro /components:`

Es la ubicación de todos los componentes del proyecto. Esta carpeta se subdivide en más carpetas, que tienen el nombre de cada una de las secciones del proyecto (films, people, planets, etc), además de una general llamada "root" que contiene componentes que se repiten en todas las secciones como "NavBar.jsx"

Cada subcarpeta contiene los archivos de los componentes que se usaron para cada sección.

### `Dentro de App.js:`

Es la ubicación del Router

## Justificación de tecnologías usadas:

### `React`
*Virtual DOM permite que solo se vuelvan a renderizar los elementos que han cambiado y no toda la página, lo cual provoca que el tiempo de carga sea menor.
*Ayuda a que la creación de rutas sea más ágil
*Reutilizar componentes del sitio que se repiten

### `Javascript`

*Es la base del framework React
*Es un lenguaje que es muy díficil que se vuelva obsoleto o depreciado.
*Es la tecnología con la que estoy más familiarizada.


