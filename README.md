# 🛠️ Projeto Backend - API de Autenticação e CRUD

Este é um projeto backend básico construído com **Node.js** e **TypeScript**, implementando autenticação com **JWT** e operações CRUD simples. Ele simula funcionalidades comuns de um sistema de usuários, como **cadastro**, **login**, **listagem**, **atualização** e **remoção**.

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [JWT (JSON Web Token)](https://jwt.io/)
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js) – para hash de senhas
- [dotenv](https://github.com/motdotla/dotenv) – para variáveis de ambiente

## 📁 Estrutura do Projeto

```bash
├── src
│   ├── controllers
│   ├── middlewares
│   ├── models
│   ├── routes
│   ├── services
│   ├── utils
│   ├── config
│   └── index.ts
├── .env
├── tsconfig.json
├── package.json
└── README.md
```
⚙️ Instalação
Clone o repositório:

git clone https://github.com/R4finh4sz/BackendUmc.git
cd BackendUmc

Instale as dependências:

npm install

ou

yarn

Ele deve iniciar como padrão na porta
PORT=3000

Execute o projeto:

npm run dev

ou
yarn dev
O servidor será iniciado em http://localhost:3000

📚 Créditos
-----------
Atividade Avaliativa - Desenvolvimento de aplicações
Data de entrega: 23 de setembro de 2024
Instituição: Universidade de Mogi das Cruzes
Disciplina: Desenvolvimento de aplicações
Professor: Fabio Codo
Aluno: Rafael Souza Santana
