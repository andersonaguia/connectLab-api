<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# <p align="center">LabCar API</p>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-documentação">Documentação</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-autor">Autor</a> • 
 <a href="#user-content--licença">Licença</a>
</p>

## 💻 Sobre o projeto

[LabCar](https://github.com/andersonaguia/labcar-api) é uma API de administração para gerenciamento de viagens. Através dos endpoints podemos controlar quem são os motoristas, passageiros e as viagens realizadas.

## ⚙️ Funcionalidades

- [x] Buscar todos os dispositivos disponíveis para vincular
- [x] Adicionar novo dispositivo para vincular
- [x] Criar usuários
- [x] Realizar login
- [x] Adicionar/vincular dispositivo ao usuário
- [x] Alterar senha para acesso do usuário
- [x] Alterar o status do dispositivo do usuário
- [x] Buscar os dados de perfil do usuário
- [x] Buscar dispositivo do usuário pelo id
- [x] Excluir um dispositivo do usuário
- [x] Buscar todos os dispositivos do usuário com filtro por local e paginação
---

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [NodeJS](https://nodejs.org/en/), [NestJS](https://nestjs.com/)
Além disto é bom ter um editor para trabalhar com o código como o [VSCode](https://code.visualstudio.com/)

### Instalação do NestJS
```bash
npm i -g @nestjs/cli
```
### 🎲 Rodando o Projeto

```bash
$ git clone https://github.com/andersonaguia/connectLab-api.git

$ npm install

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## 🧭 Funcionamento dos endpoints
Importar o arquivo 

### Criar usuário (http://localhost:3000/auth/signup)

Para criar um usuário basta inserir os dados no formato indicado na imagem abaixo e realizar uma requisição do tipo POST. Você receberá uma mensagem informando o sucesso da requisição

<img src="/public/images/create-user.png" width="800" alt="Imagem insomnia create user" />

### Realizar login (http://localhost:3000/auth/signin)

Para realizar login basta enviar os dados de e-mail e senha conforme indicado abaixo e fazer uma requisição do tipo Post. Você irá receber como resposta um token jwt contendo os dados para acesso aos demais endpoints

<img src="/public/images/login.png" width="800" alt="Imagem insomnia create user" />

### Alterar senha do usuário (http://localhost:3000/auth/changepassword)

Para alterar a senha do usuário você deverá preencher os dados conforme a imagem abaixo e fazer uma requisição do tipo PATCH:

<img src="/public/images/change-password.png" width="800" alt="Imagem insomnia create user" />

Você deverá enviar o token recebido no momento do login para acessar este endpoint de acordo com o formato da imagem abaixo:

<img src="/public/images/token.png" width="800" alt="Imagem insomnia create user" />

### Verificar dados do perfil do usuário (http://localhost:3000/users/profile)

Para buscar os dados de perfil do usuário basta realizar uma requisição Get conforme imagem abaixo:

<img src="/public/images/user-profile.png" width="800" alt="Imagem insomnia create user" />

Você deverá enviar o token recebido no momento do login para acessar este endpoint de acordo com o formato da imagem abaixo:

<img src="/public/images/token.png" width="800" alt="Imagem insomnia create user" />

### Verificar dispositivos disponíveis (http://localhost:3000/devices/all)

Para verificar os dispositivos disponíveis você deverá realizar uma requisição do tipo GET conforme a imagem abaixo:

<img src="/public/images/find-all-devices.png" width="800" alt="Imagem insomnia create user" />

Você deverá enviar o token recebido no momento do login para acessar este endpoint de acordo com o formato da imagem abaixo:

<img src="/public/images/token.png" width="800" alt="Imagem insomnia create user" />

### Adicionar/vincular dispositivo ao usuário (http://localhost:3000/users/adddevice)

Para vincular um dispositivo ao usuário você deverá enviar uma requisição do tipo Post contendo os dados abaixo:

<img src="/public/images/add-device-to-user.png" width="800" alt="Imagem insomnia create user" />

Você deverá enviar o token recebido no momento do login para acessar este endpoint de acordo com o formato da imagem abaixo:

<img src="/public/images/token.png" width="800" alt="Imagem insomnia" />

Você receberá no header o endereço para localizar o dispositivo conforme imagem abaixo:

<img src="/public/images/location.png" width="800" alt="Imagem insomnia" />


### Alterar o status do dispositivo do usuário (http://localhost:3000/users/updatestatusdevice)

Para vincular um dispositivo ao usuário você deverá enviar uma requisição do tipo Patch contendo os dados abaixo:

<img src="/public/images/change-status.png" width="800" alt="Imagem insomnia create user" />

Você deverá enviar o token recebido no momento do login para acessar este endpoint de acordo com o formato da imagem abaixo:

<img src="/public/images/token.png" width="800" alt="Imagem insomnia create user" />

### Buscar dispositivo do usuário pelo ID (http://localhost:3000/users/devicedetails/:id)

Para buscar um dispositivo do usuário pelo id você deve realizar uma requisição do tipo Get enviando o id como param conforme indicado na imagem abaixo:

<img src="/public/images/find-device-by-id.png" width="800" alt="Imagem insomnia create user" />

Você deverá enviar o token recebido no momento do login para acessar este endpoint de acordo com o formato da imagem abaixo:

<img src="/public/images/token.png" width="800" alt="Imagem insomnia create user" />

### Buscar todos os dispositivos do usuário (http://localhost:3000/users/alldevices)

Para buscar todos os dispositivos do usuário você deve realizar uma requisição do tipo Get. Você poderá enviar via Query os parâmetros para busca paginada. Os dados para busca por local são:
1 (casa)
2 (escritorio)
3 (fabrica)

<img src="/public/images/find-all-user-devices.png" width="800" alt="Imagem insomnia create user" />

Você deverá enviar o token recebido no momento do login para acessar este endpoint de acordo com o formato da imagem abaixo:

<img src="/public/images/token.png" width="800" alt="Imagem insomnia create user" />

### Excluir um dispositivo do usuário (http://localhost:3000/users/delete/:id)

Para excluir um dispositivo do usuário você deverá realizar uma requisição do tipo Delete, passando o id do dispositivo como Param

<img src="/public/images/delete-device.png" width="800" alt="Imagem insomnia create user" />

Você deverá enviar o token recebido no momento do login para acessar este endpoint de acordo com o formato da imagem abaixo:

<img src="/public/images/token.png" width="800" alt="Imagem insomnia create user" />

### Adicionar (criar) novo dispositivo (http://localhost:3000/devices)

Para adicionar um dispositivo novo você deverá ter um usuário cadastrado com o role='admim' e realizar uma requisição do tipo Post contendo os dados abaixo:

<img src="/public/images/add-new-device.png" width="800" alt="Imagem insomnia create user" />

Você deverá enviar o token recebido no momento do login para acessar este endpoint de acordo com o formato da imagem abaixo:

<img src="/public/images/token.png" width="800" alt="Imagem insomnia create user" />

---

## 🛠 Tecnologias

[![NestJS Badge](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white&link=https://nodejs.org/en/)](https://nodejs.org/en/)

[![TypeScript Badge](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white&link=https://www.typescriptlang.org/)](https://www.typescriptlang.org/)	

[![NodeJS Badge](https://img.shields.io/badge/nestjs-E0234E?style=for-the-badge&logo=nestjs&logoColor=white&link=https://nestjs.com/)](https://nestjs.com/)

[![ExpressJS Badge](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white&link=https://expressjs.com/)](https://expressjs.com/)

[![NpmJS Badge](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white&link=https://www.npmjs.com/)](https://www.npmjs.com/)

[![Insomnia Badge](
https://img.shields.io/badge/Insomnia-5849be?style=for-the-badge&logo=Insomnia&logoColor=white&link=https://insomnia.rest/)](https://insomnia.rest/)

[![Prettier Badge](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E&link=https://prettier.io/)](https://prettier.io/)

## 🦸 Autor
 <b>Anderson Aguiar</b>🚀
 <br />
[![Linkedin Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/andersonlaguiar/)](https://www.linkedin.com/in/andersonlaguiar/) 

---

## 📝 Licença

Este projeto está sob a licença [MIT](./LICENSE).

Feito com ❤️ por Anderson Aguiar 👋🏽 [Entre em contato!](https://www.linkedin.com/in/andersonlaguiar/)
