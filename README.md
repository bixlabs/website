# Bixlabs Website
Este es el repoitorio oficial del sitio web de Bixlabs.

## Prerrequisitos
Para levantar el proyecto es necesario tener instalado `node` y `npm`, para instalar dependencias y correr las tareas de desarrollo.

## Instalación de dependencias
Para instalar las dependencias simplemente corremos:

```
$ npm install
```

## Tareas

### Servidor
El proyecto cuenta con un servidor stático de archivos con recarga automática, es decir, que cada vez que modifiquemos los archivos `html`, `css`, y `js` el navegador recargará automáticamente los cambios realizados. para levantarlo simplemente corremos:

```
$ grunt serve
```

Una vez levantado el servidor, podemos acceder via:

```
http://localhost:9000/
```

### Staging Server
Antes de subir a producción vamos a verificar que todo esté andando bien en un servidor staging:

```
$ npm run heroku
```

Este script genererá un build y subirá el proyecto a Heroku. Verificamos el sitio en 

```
https://bix-website.herokuapp.com
```

En caso de ser la primera vez que corremos el script, él mismo nos dará la información para clonar el repo.

### Build
Cuando todo esté listo para subir a producción podemos generar un build del proyecto simplemente corriendo:

```
$ grunt build
```
