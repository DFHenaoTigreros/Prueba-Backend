Describe cómo estructurarías el backend de una aplicación de comercio electrónico. Habla
sobre las tecnologías que utilizarías, la organización de los archivos, el uso de patrones de
diseño, etc.


## Tecnologias
Tecnologías probablemente utilizadas en una aplicación de comercio electrónico:

- **NodeJS:** Es quien nos brinda el entorno de ejecución del servidor junto al uso de modulos.
- **Express:** Facilita el manejo de rutas HTTP; solicitudes y respuestas.
- **PostgresSQL:** Para la gestión de bases de datos, en esta caso relacional.
- **Sequelize:** Facilita la interacción con la base de datos PostgreSQL.
- **Axios:** Facilita la realización de solicitudes HTTP y el uso de promesas(async/await).
- **Morgan:** Genera registros de todas las solicitudes HTTP.
- **Cors:** Para la seguridad de los usuarios al hacer solicitudes a otros sitios web.
- **Mercadopago:** Brinda enlaces para ayudarnos a integrar la API de Mercado Pago.
- **Supertest:** Si se requiere testear la aplicación.
- **JWT:** Para la autenticación y autorización de usuarios de manera local.
- **Bcrypt:** Para encriptar la contraseña de usuarios y brindar mayor seguridad, trabaja en conjunto a JWT.
- **Dotenv:** Facilita la carga de las credenciales del archivo .env.
- **NodeCron:** Para la programación de tareas en un intervalo de tiempo especifico.
- **Nodemon:** Reinicia automaticamente la aplicación al haber cambios, es una ayuda super vital para ahorrar tiempo en el desarrollo de la aplicación.
- **Git:** Brinda un seguimiento en los cambios del codigo durante el desarrollo de la aplicación.
- **GitHub:** Plataforma que utiliza git, facilitando una mejor colaboracion y gestión de proyectos.


## Estructura de archivos
Estructura de los archivo y carpetas de la aplicación, garantizando un desarrollo mas prolijo:

- **/src:** Carpeta contenedora del código fuente de la aplicación (Source Code).
  - **/controllers:** Carpeta contenedora de modulos(archivos js) que se encargan del control y manejo de datos, recibe datos de los handlers.
  - **/handlers:** Carpeta contenedora de modulos(archivos js) que se encargan del manejo de las solicitudes y respuestas HTTP, envia y obtiene datos de los controladores.
  - **/models:** Carpeta contenedora de modulos(archivos js) que se encargan de los modelos de la base de datos.
  - **/routes:** Carpeta contenedora de archivo o modulos(archivos js) que se encargan de definir las diferentes rutas HTTP de la aplicación.
  - **db.js:**: Archivo que se encarga de la configuración de la base de datos.
  - **server.js:** Archivo que se encarga de la configuración del servidor.
- **/test:** Carpeta contenedora de archivo o modulos(archivos js) que se encargan de testear la aplicación.
- **.env:** Archivo que guarda variables de entorno(claves o credenciales), de manera oculta para no ser visible al publico debido a la importancia de dichas variables(información sensible).
- **.gitignore:** Archivo que omite archivos y carpetas al utilizar git (es muy común ignorar el archivo .env).
- **index.js:** Archivo que se encarga de la entrada principal de la aplicación.
- **package-lock.json:** Archivo que garantiza el buen uso del archivo package.json.
- **package.json:** Archivo que describe la configuración de la aplicación ademas de contener scipts y dependencias.


## Patrones de diseño
Patrones que nos sirven como guia para la solución de problemas que pueden surgir en el desarrollo de la aplicación:

- **Middleware Pattern:** Permite definir funciones para realizar tareas en el manejo de las solicitudes HTTP.
- **Singleton Pattern:** Garantiza que una clase tenga solo una instancia.
- **Repository Pattern:** Gestiona la persitencia de datos de la base de datos o una API.



