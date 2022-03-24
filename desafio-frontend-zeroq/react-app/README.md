# Desafio Frontend Zeroq

El proyecto se creo con create-react-app, para empezar el proyecto puede correr el comando:

### `npm run start`

las librerias usada aparete de react son:

- redux y RTK Query (redux toolkit)
- react-icons
- styled-components

a continuacion se detalla los desafios y las repuestas.

## 1. Crear custom Hook con el endpoint proporcionado.

se crearon 2 hooks en la carpeta hooks, uno para llamar al api y tomar la data ordenando los datos dejando de ultimos los que estan offline y otro hook para polling, usando en conjunto se obtiene el efecto de llamar el api cada minuto.

al final decidi no usar los hooks para usar uno por defecto y no reinventar la rueda, decidi probar en esta oportunidad el nuevo RTK Query incluida en Redux Toolkit y asi demostrar y fortalecer mis conocimiento en redux.

## 2. Listar las oficinas proporcionadas en el endpoint.

los datos obtenidos con RTK Query es mapeado para mostrar las cartas.
para obtener el resultado de **waiting**(suma) y **elapsed**(dividir), se convirtio los valores de los objetos en una lista o arreglo para despues reducirlo y aplicarle la respectiva aritmetica.

## 3. Agregar un campo de texto para filtrar oficinas por su nombre.

se creo un estado global con redux y pasando su estado al contenedor de cartas para que este decida filtrar los datos en base al nombre(previamente convertido en minuscula)

## 4. Activar o desactivar oficina.

se creo un estado local en cada carta donde al hacer click este cambia su estado de online a offline y viceversa.

## 5. Maquetar segun diseño entregado 🖼

- use [Coolors - Image Picker](https://coolors.co/image-picker) introduciento uno de los screen para tomar una paleta de color y usarlo en el proyecto.
- usar redux y RTK Query en este proyecto en realidad es demasiado, solo lo use para demostrar y reforzar mas conocimiento en redux, cosa que me a tomado un poco mas de tiempo de lo normal 3-4 hora por el uso de RTK Query.
- se agrego unas Skeletons para cuando hacen el loading aunque pueda verse como una experiencia no agradable
