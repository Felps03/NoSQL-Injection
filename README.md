# Sis Digital - Estrutura Back

## Ambiente de desenvolvimento

### Instalando

1. `npm install`

Após isso, basta rodar o projeto com

```
npm run dev
```

### Testando

`npm test`


### Docker
```
docker build -t template/node-web-app .
```

```
docker run -p 3333:3333 -d template/node-web-app
```

## Project Structure
```
|-- src
    |-- app
      |-- [+] controllers
      |-- [+] middlewares
      |-- [+] models
    |-- config
    |-- database
      |-- migrations
    |-- helpers
        |-- [+] enums
        |-- logger
    |-- swagger
|-- test
     |-- integration
        |-- mock
     |-- [+] unit
|-- tmp
|-- swagger
    |-- openapi.yaml
.editorconfig
.env.test
.eslintignore
.eslintrc
.gitignore
.prettierrc
.sequelizerc
Dockerfile
Jenkinsfile
jest.config.js
nodemon.json
package.json
```
