### IMPORTANTE

Variables de entorno

Asegúrate de configurar las siguientes variables en tu archivo `.env`:

# Puerto del servidor
-`PORT=3000`

# Secreto para la firma de tokens JWT
-`JWT_SECRET=tu-secreto-aqui`

# Configuración de la base de datos
-`DB_USER=tu_usuario`
-`DB_HOST=localhost`
-`DB_DATABASE=nombre_base_de_datos`
-`DB_PASSWORD=tu_contraseña`
-`DB_PORT=5432`

### Validaciones de Roles y Lenguajes

##Se agregaron validaciones de roles y de lenguajes de programación en base a el Frontend proporcionado como apoyo, ya que contenía solo 3 de cada uno, estos son los siguientes:

#Roles permitidos
Al registrar un nuevo usuario, se valida que el rol del usuario sea uno de los siguientes:

-`Full Stack Developer`
-`Frontend Developer`
-`Backend Developer`

#Lenguajes permitidos 
Al registrar un nuevo usuario, se valida que el lenguaje de programación del usuario sea uno de los siguientes
-`JavaScript`
-`Python`
-`Ruby`
