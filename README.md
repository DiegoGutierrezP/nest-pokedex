<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. CLonar el repositorio
2. Ejecutar

```
npm install
```

3.Tener Nest CLI instalado

```
npm i -g @nestjs/cli
```

4. Levantar la base de datos

```
docker-compose up -d
```

5. Clonar el archivo **.env.template** y renombrar a **.env**

6. Llenar las varaibles de entorno en el **.env**

7. Ejecutar la aplicacion en dev:

```
npm run start:dev
```

8. Reconstruir la base de datos

```
http://localhost:3000/api/v2/seed
```

## Stack usado

- MongoDb
- Nest
- mongoose

https://gist.github.com/Klerith/e7861738c93712840ab3a38674843490#file-docker-compose-prod-yaml-L10
