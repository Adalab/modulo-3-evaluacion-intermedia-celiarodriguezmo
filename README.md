

Módulo 3: Ejercicio de evaluación intermedia

El ejercicio consiste en desarrollar una página web sencilla con React.
Antes de empezar, tenéis que crear un nuevo repositorio en GitHub desde GitHub Classroom usando este
enlace. Una vez creado, lo clonaremos en nuestro ordenador y en la carpeta creada empezaremos a
trabajar en el ejercicio.

Frases de Friends

Vamos a recordar la serie de televisión "Friends", y vamos a hacer una aplicación que nos permita gestionar
la frases de los personajes de esta serie, y lo vamos a hacer con React!
A continuación detallamos lo que queremos hacer.

1. Pintar el listado de frases

Para empezar el ejercicio queremos:
 Pintar una cabecera con un título que ponga Frases de Friends.
 Pintar el listado de frases inicial. Para ello os facilitamos los datos en la siguiente API:

https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/quotes-friends-tv-v1/quotes.json
Os recomendamos que primero copiéis el contenido del API y los peguéis en un fichero json en vuestro
proyecto. Más adelante os encargaréis del fetch(). De momento lo importáis en vuestro componente App y
lo guardáis en el estado.
Después, generar el HTML de la página con los datos que habéis importado del json.

2. Añadir una nueva frase

A continuación queremos añadir un nueva frase. Para ello:
 Crear un formulario con los campos:
         Frase
         Personaje
         Un botón para Añadir la nueva frase.
 Cuando la usuaria pulse en el botón hay que añadir la frase al listado de frases para que este
aparezca en el listado.

3. Filtrar el listado de frases (bonus)

A continuación queremos filtrar las alumnas por nombre y por tutora. Intenta hacer uno de los dos y,
cuando lo tengas controlado, implementa el restante. Para ello:
Para filtrar por frase:
 Añade un recuadro sobre el listado de frases donde la usuaria pueda escribir texto.
 Añade la funcionalidad para que, cuando la usuaria escriba en ese <input>, el listado de frases se
re-pinte mostrando solo las que incluyan el texto que ha escrito la usuaria (aplicando también el
filtrado por personaje, si ya lo tuvieras implementado).
Para filtrar por personaje:
 Añade un select a la cabecera que tenga las siguientes opciones:
            Todos
            Ross
            Monica
            Joey
            Phoebe
            Chandler
            Rachel
 Añade la funcionalidad para que cuando la usuaria cambie este select el listado de frases se repinte
mostrando solo los que coincidan con la opción seleccionada.

4. Maqueta a tu gusto (bonus)
