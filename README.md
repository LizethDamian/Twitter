# Twitter
## Sprint 1

Creación de un nuevo proyecto empezando desde los requerimiento

> Requerimiento 1: 
>> Crear un modelo para guardar la informacion del usuario:
>> 1. ID
>> 2. Username
>> 3. Name 
>> 4. Bio
>> 5. dateCreated
>> 6. lastUpdated

> Requerimiento 2: 
>> Instanciar un nuevo objeto de la clase guardando los datos de tipo fecha
>> Modificamos los datos necesarios en test y en app usando Date()

> Requerimiento 3: 
>>  Cada objeto tipo user necesita los siguietes gettes: `getUsername`, `getBio`, `getDateCreated`, `getLastUpdated`.
>> Recuerda usar los this en la clase User. 

> Requerimiento 4: 
>> Cada objeto necesita los siguientes setters: `setUsername` y `setBio`, para actualizar dichas propiedades.
>> Recuerda agregar la palabra set y modificar los atributos indicados 

## Sprint 2

Agregar servicios

> Requerimiento 1: Crear un nuevo usuario con lo ya definido en el sprint anterior, usando una nueva clase llamada `UserService`.
>> Criterios de aceptación:
>> 1. Esta clase deberá tener un método `create` que se pueda usar sin instanciar (static method), y que reciba solo los parámetros del `id`, `username` y `name`. 
>> 2. El valor de `bio` deberá ser por default para todos los `user` creados.

> Requerimiento 2, 3, 4
>> Realizaremos diferentes pruebas de unidad 

## Sprint 3

Agregar vistas 

> Requerimientos: 
>> 1. Valida que al enviar en el `payload` un valor `null`, obtenga un objeto con la llave `error` y el valor indique `payload no existe`.

>> 2. Valida que un `payload` contenga en alguna de las llaves `username`, `name`, o `id` un valor en `null`. Si hay un valor `null` regresa un objeto con la llave 
>>  `error` y que indique el texto: `necesitan tener un valor válido`.

>> 3. Valida que un `payload` con algunas de las propiedades necesarias regrese un objeto con la llave `error` indicando `necesitan tener un valor válido`.

>> 4. Verifica que se pueda crear un objeto `User`, al enviar un payload con las siguientes propiedades: `username`, `id` y `name`.



