# Memoria
## Introducción

Esribir

## Componentes de REACT

### Button.jsx
> Este `componente` se encuentra en el archivo `src/components/Button.jsx`

Este componente crea un boton que sirve para navegar en las rutas o hacer acciones en click

#### Props
```javascript
// Ruta o Boton
routeLink: true|false
// Path de la Ruta
to: String
// Callback para el Boton
onClick: () => {}
```

### Content.jsx
> Este `componente` se encuentra en el archivo `src/components/Content.jsx`

Este componente es un `div` con la clase `content`

### ItemMovementForm.jsx
> Este `componente` se encuentra en el archivo `src/components/ItemMovementForm.jsx`

Este componente tiene el formulario que realiza movimientos de invetario

#### Props

```javascript
// Define que accion se realiza en el formulario
movementType: String | 'entry' | 'egress'
```

### ItemTable.jsx
> Este `componente` se encuentra en el archivo `src/components/ItemTable.jsx`

Este componente se encarga de renderizar la tabla y los filtros donde se muestran los articulos

### ItemTableFilters.jsx
> Este `componente` se encuentra en el archivo `src/components/ItemTableFilters.jsx`

Este componente renderiza los filtros que interactuan con la tabla

#### Props

```javascript
// Tipo de articulo seleccionado como filtro
selected: String
// Callback que se realiza cuando se escribe en el campo de busqueda
onSearch: () => {}
// Callback que se realiza cuando se selecciona un tipo de articulo
onItemType: () => {}
```

### ItemTableRow.jsx
> Este `componente` se encuentra en el archivo `src/components/ItemTableRow.jsx`

Este componente renderiza las filas de la tabla de articulos

#### Props

```javascript
// Arreglo con los items que se van a renderizar en las filas de la tabla
items: [Object]
```

### EgressForm.jsx
> Este `componente` se encuentra en el archivo `src/screens/items/EgressForm.jsx`

Este componente renderiza la vista correspondiente al formulario para un egreso de articulo

### EntryForm.jsx
> Este `componente` se encuentra en el archivo `src/screens/items/EntryForm.jsx`

Este componente renderiza la vista correspondiente al formulario para un egreso de articulo

### Show.jsx
> Este `componente` se encuentra en el archivo `src/screens/items/Show.jsx`

Este componente renderiza la vista correspondiente a los detalles de un articulo en particular

### Home.jsx
> Este `componente` se encuentra en el archivo `src/screens/Home.jsx`

Este componente renderiza la vista correspondiente a la pagina de incio que por el momento solo tiene una barra de navegacion

### Items.jsx
> Este `componente` se encuentra en el archivo `src/screens/Items.jsx`

Este componente renderiza la vista correspondiente a la tabla donde se visualizan todos lso articulos disponibles

## Custom Hooks Utilizados

> Estos `hooks` se encuentran en el archivo `src/util/Hooks.jsx`

### useItems

Este hook se encagra de cargar todos los items disponibles, en el momento del archivo `src/data-mocks/Data.json`

#### Params
```javascript
// Arreglo de atributos que hacen activar el hook
triggers = []
```

### useFilters

Este hook se encarga de filtrar los items con base en los filtros

#### Params
```javascript
// Arreglo de objectos que se desea filtrar
items = [Object]
// Objecto con los valores de los filtros
filters | {search: "", itemType: ""}
// Arreglo de atributos que hacen activar el hook
triggers = []
```
### useItem

Este hook se encarga de encotnrar un artículo con base en el `id`

#### Params
```javascript
// Id del articulo que se desea buscar
id | String | Number
// Arreglo de atributos que hacen activar el hook
triggers = []
```
