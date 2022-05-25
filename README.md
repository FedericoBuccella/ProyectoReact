# TecnoCenter

## _Utilizacion de FireBase_

Como todo proyecto de E-commerce, debemos tener una base de datos en donde almacenar la informacion que debe aparecer en nuestra pagina. En este caso, dispondremos de productos que se alojan en FireBase.

[![BaseDatos](https://upload.wikimedia.org/wikipedia/commons/b/bd/Firebase_Logo.png)](https://firebase.google.com)

### _Configuración de FireBase:_
Para poder acoplar nuestra base de datos con el proyecto, como primer medida tenemos que instalar en la terminal de VISUAL STUDIO CODE el FireBase. 

```sh
    npm install firebase
```

Luego debemos utilizar un archivo de index.js donde se debera ubicar el SDK de los productos que quiero utilizar.

### _Creación de Base de datos:_
Una vez creada la base de datos, iniciaremos la carga de nuestro productos. Comenzando por una colección por cada conjunto:
- Products
.Id
.Name
.Img
.Price
.Stock
- Description
- Orders (Se crea automaticamente cada vez que un usuario realiza una compra)

Una vez creada la base de datos y utilizando las funciones adecuadas de firebase, podemos visualizar en nuestro sitio web los productos que cargamos en la BASE DE DATOS.

## _Inicialización del proyecto_

Para poder inicializar nuestro proyecto, debemos ingresar a la terminal de VISUAL STUDIO CODE y ingresar:

```sh
    npm start
```

Si no tenemos ningun error, tendremos nuestra app ecommerce funcionando correctamente.

## _Descripción breve de algunos componentes_

##### _NavBar:_
Componente en el cual se aloja la barra de navegación y las secciones en donde se separan por categorias.

##### _Principal:_
Componente que aloja solamente el carousel que esta compuesta con un indice con las categorias de los productos que se venden.

##### _Formulario:_
Este componente cumple la funcion de guardar el formulario de contacto que el usuario, que realiza la compra, debe completar con los datos.

##### _Cart:_
Componente que visualiza el contenido del carrito que aloja los productos seleccionados para finalizar la compra.

##### _Item:_
Este componente es la primera cara del producto antes de la instancia de los detalles. Se muestran los nombres y el boton de "Ver detalles"

##### _ItemCount:_
Componente que cumple la función de agregar los productos al carrito, ya sea incrementando el numero de productos o disminuyendolo.

##### _ItemDetail:_
Este componente es el que muestra los detalles del producto, con los nombres, las categorias y el precio correspondiente.

##### _ItemDetailContainer:_
Componente en donde, con "getDoc" y "Collection", se obtiene de la base de datos los productos cargados.

##### _ItemListContainer:_
En este componente se muestra mediante "getDocs", "query" y "Collection" la obtencion de los datos. Con la utilización del filtros obtenemos, mediante categoryId, la categoria que se seleccione.

## _Funcionalidad del Ecommerce:_

![myfile](https://github.com/FedericoBuccella/ProyectoReact/blob/DesafioFinal/public/GIF/2022-05-25-17-16-42.gif?raw=true)

##### _Navegabilidad:_

En esta pequeña introducción se explicara como realizar un compra. En la pagina principal visualizamos el carousel con el indice de los productos a la venta. 

1. En el navBar seleccionamos la categoria que deseamos comprar, por ejemplo: Auriculares.
2. Una vez en la categoria de "Auriculares", elejimos el producto que deseemos comprar y presionamos "Ver detalles".
3. En la sección de detalles nos encontraremos con el precio, los botones de incrementar y disminuir la cantidad de productos y "agregar al carrito".
4. Si es el producto deseado presionamos en "agregar al carrito" y nos dirigimos al carrito de compras. Aqui debemos decidir si "Seguir comprando" o "Finalizar compra"
5. Si seleccionamos "Finalizar compra", nos deriba a un formulario de contacto en donde debemos completarlo con los datos correspondientes.
6. Si todos los datos ingresados son correctos, se habra realizado la compra con exito.






