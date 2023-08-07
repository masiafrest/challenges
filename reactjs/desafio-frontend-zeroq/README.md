# Desafio Frontend Zeroq 🐱‍🏍

Zeroq esta en busca de un desarrollador frontend para unirse a su equipo de desarrollo, este desafío tiene la finalidad de poner a prueba los conocimientos deseables para este puesto.

El desafío consiste en consumir una API Restful, luego listar las oficinas proporcionadas con algunos atributos.

Se proporcionará, un mockup de como debe quedar el prototipo. Este es una versión muy simple y reducida de nuestro dashboard en tiempo real (https://zeroq.cl/command/) , y lo que queremos es validar que el concursante pueda maquetar un diseño dado fielmente.

## Restricciones 👀

1. Debido a que todos nuestros proyectos frontend estan desarrollados con React.js, es importante que completes este desafio utilizandolo.

2. Se puede usar cualquier librería

## Lo que necesitaras

#### Endpoint

El único endpoint a consultar será:

GET: https://boiling-mountain-49639.herokuapp.com/desafio-frontend

#### Assets

En la carpeta assets de este proyecto estarán las imagenes de guía y logotipo.

Prototipo a realizar:

![Prototipo](assets/screens/index.png 'prototipo')

Leyenda de ayuda para conocer donde deben mostrarse los datos:

![Leyenda](assets/screens/legend.png 'Leyenda')

## Lo que debes realizar

#### 1. Crear custom Hook con el endpoint proporcionado.

- Este hook debe retornar la lista de las oficinas ordenadas por su propiedad `online` las que esten desconectadas deben listarse de ultimas.
- El endpoint debera consultarse cada minuto, esta consulta retorna datos estaticos, lo que aportará valor es la implementación 👌.

#### 2. Listar las oficinas proporcionadas en el endpoint.

Cada oficina tiene un atributo `lines` y a su vez cada una de ellas tienen atributos `waiting` que son personas en fila y `elapsed` que es el tiempo promedio de atención de esa fila en segundos.

- Para obtener el total de personas en fila hay que sumar los `waiting` de las filas de una oficina.
- Para obtener a atención promedio hay que promediar los `elapsed` (en segundos) de las filas de las oficinas y mostrarlas en formato `HH:mm:ss`.

#### 3. Agregar un campo de texto para filtrar oficinas por su nombre.

El nombre se obtiene en el tributo `name` de cada oficina

#### 4. Activar o desactivar oficina.

Al clickear alguna tarjeta, el estado de la oficina debe alternar entre offline y online (tomar en cuenta el atributo que viene en cada oficina).

#### 5. Maquetar segun diseño entregado 🖼

Se evalúa que el prototipo se parezca lo mas posible a los screens proporcionados.

#### 6. Enviar repositorio con el prototipo ✔

Se debe enviar el repositorio con un readme donde se explique como construir, correr y testear la aplicación.

## Bonus (Deseable) 🚀

- TypeScript
- styles-components
- Redux(redux-toolkit)
- Buenas prácticas de programación en javascript
- Uso de TDD
- Fidelidad al diseño proporcionado
- Diseño Responsivo
