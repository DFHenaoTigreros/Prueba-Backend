Crea un documento de políticas de nomenclatura para el equipo de desarrollo de una
compañía, la política debe incluir nomenclatura de: bases de datos, variables, funciones,
clases, git, etc.


Las políticas de nomenclatura nos permiten una facil comprención del desarrolo de aplicaciónes sobre todo cuando se trabaja de manera colaborativa, a mi criterio se deben tener en cuenta:


## 1. Bases de datos
  - *1.1* Nombrar la base de datos de forma clara y concisa.
  - *1.2* Nombrar las tablas con notacion PascalCase.
  - *1.3* Nombrar los campos de una forma descriptiva.
  - *1.4* Procurar nombrar en un solo idioma.


## 2. Variables
  - *2.1* Procurar declarar variables de forma constante(const).
  - *2.2* El proposito de las variables debe ser reflejado en su nombre.
  - *2.3* Utilizar notación camelCase.


## 3. Funciones
  - *3.1* Las funciones deben de ser constantes(const).
  - *3.2* El nombre de la funcion debe reflejar su funcion.
  - *3.3* utilizar async/await en caso de manejar promesas en la funcion.
  - *3.4* El nombre debe ser de manera corta.


## 4. Clases
  - *4.1* Las clases no deben definirse como funcion.
  - *4.2* Se debe utilizar ES6 con la sintaxis class.
  - *4.3* Debe nombrarse con notación PascalCase


## 5. Git
  - *5.1* Cada desarrollador debe crear su rama.
  - *5.2* Se debe trabajar bajo su propia rama.
  - *5.3* Antes de hacer push a tu rama, se deberá hacer pull de la rama develop.
  - *5.4* Se hará pull request a la rama develop.
  - *5.5* La rama main es la versión de la aplicacion deplegada.
  - *5.6* Nombrar los commit de forma descriptiva.
  - *5.7* Incluir informacion de los cambios realizados.


## 6. Objetos
  - *6.1* Nombrar los objetos con notación camelCase.
  - *6.2* Los valores de las propiedades serán escritos en comillas dobles.
  - *6.3* Utilizar dot notation.


## 7. Documentación
  - *7.1* Generar archivos README.md para descripcion de la aplicacion.
  - *7.2* Comentar de forma clara y concisa funcionalidades complejas.