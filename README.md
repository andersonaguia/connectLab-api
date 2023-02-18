<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# <p align="center">ConnectLab API</p>

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

[ConnectLab](https://github.com/andersonaguia/connectLab-api) é uma API de administração para gerenciamento de dispositivos IOT. Através dos endpoints podemos realizar cadastro de clientes e administradores, vincular dispositivos aos usuários do sistema, alterar o estado dos dispositivos e excluir os dispositivos dos usuários.

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
[Git](https://git-scm.com), [NodeJS](https://nodejs.org/en/), [NestJS](https://nestjs.com/), [Insomnia](https://insomnia.rest/download), [Postgres](https://www.postgresql.org/).
Além disto é bom ter um editor para trabalhar com o código como o [VSCode](https://code.visualstudio.com/).

### Configurando o banco de dados

Após a instalação do Postgres você deverá criar um database com o nome "connectlab" ou outro de sua preferência.

### Fazendo download do projeto

Abra um terminal no VSCode e insira o comando abaixo

```bash
$ git clone https://github.com/andersonaguia/connectLab-api.git
```

### Configurando variáveis de ambiente

Para configurar as variáveis de ambiente você deverá renomear o arquivo ".example.env" contido na pasta raiz do projeto para ".env" e alterar os dados de acordo com as suas informações de acesso ao Postgres.

### Instalação do NestJS
```bash
npm i -g @nestjs/cli
```
### 🎲 Rodando o Projeto

```bash

# install dependencies
$ npm install

# run the migrations
$ npm run migration:run

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## 🧭 Funcionamento dos endpoints

Importar o arquivo insomnia.json contido na pasta public/insomnia no [Insomnia](https://insomnia.rest/download).

Se preferir, após rodar o projeto você pode acessar os endpoints via [Swagger](http://localhost:3000/api-docs)

## Preparação dos endpoints

### 1 - Criar usuário com privilégio de administrador (http://localhost:3000/auth/signup)

Para criar um usuário um usuário como administrador basta informar os dados conforme a imagem abaixo. Observe que a key "role": "admin".

<img src="/public/images/user-admin.png" width="800" alt="Imagem insomnia" />

### 2 - Realizar login (admin/client) (http://localhost:3000/auth/signin)

Para realizar login basta enviar os dados de e-mail e senha conforme indicado abaixo e fazer uma requisição do tipo Post. Você irá receber como resposta um token jwt contendo os dados para acesso aos demais endpoints

<img src="/public/images/login.png" width="800" alt="Imagem insomnia" />

### 3 - Criar os locais (http://localhost:3000/devices/locals)

Appś realizar o login para criar os locais basta preencher o local desejado conforme ilustrado abaixo e enviar uma requisição do tipo Post:

<img src="/public/images/locals.png" width="800" alt="Imagem insomnia" />

Exemplo de locais: "casa", "escritorio", "fabrica".

Você deverá enviar o token recebido no momento do login para acessar este endpoint de acordo com o formato da imagem abaixo:

<img src="/public/images/token.png" width="800" alt="Imagem insomnia" />

### Criar usuário (http://localhost:3000/auth/signup)

Para criar um usuário basta inserir os dados no formato indicado na imagem abaixo e realizar uma requisição do tipo POST. Você receberá uma mensagem informando o sucesso da requisição

<img src="/public/images/create-user.png" width="800" alt="Imagem insomnia" />

### Alterar senha do usuário (http://localhost:3000/auth/changepassword)

Para alterar a senha do usuário você deverá preencher os dados conforme a imagem abaixo e fazer uma requisição do tipo PATCH:

<img src="/public/images/change-password.png" width="800" alt="Imagem insomnia" />

Você deverá enviar o token recebido no momento do login para acessar este endpoint de acordo com o formato da imagem abaixo:

<img src="/public/images/token.png" width="800" alt="Imagem insomnia" />

### Verificar dados do perfil do usuário (http://localhost:3000/users/profile)

Para buscar os dados de perfil do usuário basta realizar uma requisição Get conforme imagem abaixo:

<img src="/public/images/user-profile.png" width="800" alt="Imagem insomnia" />

Você deverá enviar o token recebido no momento do login para acessar este endpoint de acordo com o formato da imagem abaixo:

<img src="/public/images/token.png" width="800" alt="Imagem insomnia" />

### Verificar dispositivos disponíveis (http://localhost:3000/devices/all)

Para verificar os dispositivos disponíveis você deverá realizar uma requisição do tipo GET conforme a imagem abaixo:

<img src="/public/images/find-all-devices.png" width="800" alt="Imagem insomnia" />

Você deverá enviar o token recebido no momento do login para acessar este endpoint de acordo com o formato da imagem abaixo:

<img src="/public/images/token.png" width="800" alt="Imagem insomnia" />

Obs: Na primeira requisição os dispositivos padrão serão inseridos no banco de dados e a partir daí estarão disponíveis para consulta GET.

### Buscar os locais cadastrados (http://localhost:3000/users/profile)

Para buscar os locais cadastrados basta realizar uma requisição do tipo Get conforme indicado abaixo:

<img src="/public/images/find-local.png" width="800" alt="Imagem insomnia" />

Você deverá enviar o token recebido no momento do login para acessar este endpoint de acordo com o formato da imagem abaixo:

<img src="/public/images/token.png" width="800" alt="Imagem insomnia" />

A busca de locais é necessária para vincular os dispositivos ao usuário, indicando o local (string) e para realizar a busca de todos os dispositivos do usuário, utilizando no Query "local" o id do local (ex: local=2).

### Adicionar/vincular dispositivo ao usuário (http://localhost:3000/users/adddevice)

Para vincular um dispositivo ao usuário você deverá enviar uma requisição do tipo Post contendo os dados abaixo:

<img src="/public/images/add-device-to-user.png" width="800" alt="Imagem insomnia" />

Você deverá enviar o token recebido no momento do login para acessar este endpoint de acordo com o formato da imagem abaixo:

<img src="/public/images/token.png" width="800" alt="Imagem insomnia" />

Você receberá no header o endereço para localizar o dispositivo conforme imagem abaixo:

<img src="/public/images/location.png" width="800" alt="Imagem insomnia" />


### Alterar o status do dispositivo do usuário (http://localhost:3000/users/updatestatusdevice)

Para vincular um dispositivo ao usuário você deverá enviar uma requisição do tipo Patch contendo os dados abaixo:

<img src="/public/images/change-status.png" width="800" alt="Imagem insomnia" />

Você deverá enviar o token recebido no momento do login para acessar este endpoint de acordo com o formato da imagem abaixo:

<img src="/public/images/token.png" width="800" alt="Imagem insomnia" />

### Buscar dispositivo do usuário pelo ID (http://localhost:3000/users/devicedetails/:id)

Para buscar um dispositivo do usuário pelo id você deve realizar uma requisição do tipo Get enviando o id como param conforme indicado na imagem abaixo:

<img src="/public/images/find-device-by-id.png" width="800" alt="Imagem insomnia" />

Você deverá enviar o token recebido no momento do login para acessar este endpoint de acordo com o formato da imagem abaixo:

<img src="/public/images/token.png" width="800" alt="Imagem insomnia" />

### Buscar todos os dispositivos do usuário (http://localhost:3000/users/alldevices)

Para buscar todos os dispositivos do usuário você deve realizar uma requisição do tipo Get. Você poderá enviar via Query os parâmetros para busca paginada. Você deverá obter os locais disponíveis para realizar o filtro por local, passando o id na query (ex: local=2).

<img src="/public/images/find-all-user-devices.png" width="800" alt="Imagem insomnia" />

Você deverá enviar o token recebido no momento do login para acessar este endpoint de acordo com o formato da imagem abaixo:

<img src="/public/images/token.png" width="800" alt="Imagem insomnia" />

### Excluir um dispositivo do usuário (http://localhost:3000/users/delete/:id)

Para excluir um dispositivo do usuário você deverá realizar uma requisição do tipo Delete, passando o id do dispositivo como Param

<img src="/public/images/delete-device.png" width="800" alt="Imagem insomnia" />

Você deverá enviar o token recebido no momento do login para acessar este endpoint de acordo com o formato da imagem abaixo:

<img src="/public/images/token.png" width="800" alt="Imagem insomnia" />

### Adicionar (criar) novo dispositivo (http://localhost:3000/devices)

Para adicionar um dispositivo novo você deverá ter um usuário cadastrado com o role='admim' e realizar uma requisição do tipo Post contendo os dados abaixo:

<img src="/public/images/add-new-device.png" width="800" alt="Imagem insomnia" />

Você deverá enviar o token recebido no momento do login para acessar este endpoint de acordo com o formato da imagem abaixo:

<img src="/public/images/token.png" width="800" alt="Imagem insomnia" />

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

[![PostgresBadge](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/{rel='nofollow'})

## 🦸 Autor
 <b>Anderson Aguiar</b>🚀
 <br />
[![Linkedin Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/andersonlaguiar/)](https://www.linkedin.com/in/andersonlaguiar/) 

---

## 📝 Licença

Este projeto está sob a licença [MIT](./LICENSE).

Feito com ❤️ por Anderson Aguiar 👋🏽 [Entre em contato!](https://www.linkedin.com/in/andersonlaguiar/)
