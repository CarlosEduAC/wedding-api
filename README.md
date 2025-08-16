<div align="center">

<!-- Titulo do projeto -->
<!-- Add image logo -->

___________________________________________________

# Wedding-api

<!-- Informações visuais do projeto -->
![Node Version][node-version]
![Typescript Version][typescript-version]
![Express Version][express-version]
![MIT License][license]

<!-- Breve descrição sobre o projeto -->

A API da plataforma de casamento segura e prática, é ideal para facilitar e personalizar a experiência do casal e convidados. Construído por [CarlosEduAC](https://github.com/CarlosEduAC)

</div>

<!-- Tabela de conteúdo do projeto -->

# 👉 Índice

- [👉 Índice](#-índice)
- [📖 Sobre o Projeto](#-sobre-o-projeto)
- [🧮 Funcionalidades](#-funcionalidades)
- [🛠️  Requisitos](#️-requisitos)
- [💻 Documentação](#-documentação)

# 📝 Sobre o Projeto

A API da plataforma de casamento oferece recursos para: upload de fotos do pré-wedding, criação de listas de presentes com pagamento integrado, e landing page personalizada com informações do evento e RSVP digital. Segura e prática, é ideal para facilitar e personalizar a experiência do casal e convidados.

## 🎮 Tecnologias

Esse projeto foi feito utilizando as seguintes tecnologias:

- [Nodejs](https://nodejs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- Em construção ...

# 🧮 Funcionalidades

- [Link de Produção](https://casamentopolyanaecadu.onrender.com/)

## Em construção

- Em construção ...

# 🛠️ Requisitos

## 🔧 Tecnologias Necessárias

- [Node.js](https://nodejs.org/en) (Versão 23.6.0)
- [Npm](https://classic.yarnpkg.com/en/docs/install#mac-stable) (Versão 10.9.2)

## 🚧 Rodando a Aplicação

Para rodar o projeto no ambiente de desenvolvimento, instale as dependecias:

```bash
npm install
```

Finalizando a instalação, execute o seguinte comando para rodar a aplicação:

```bash
npm run dev
```

Abra `http://localhost:3000/` em algum browser.

## Deploy

- O Deploy em preprod acontece com o push em qualquer branch
- O deploy em prod acontece ao fazer merge com a main

# 💻 Documentação

## Arquitetura

Em construção ...

## Estrutura de Pastas

- [`.github`](../.github) — Workflows, templates do github e images usadas nas docs;
- [`.husky`](../.husky) — Workflows e images usadas nas docs;
- [`tests`](../tests/) — Inclui testes unitários e de integração.
- [`src`](../src/) — Código da aplicação, em construção;
- [`src/configs`](../src/configs): Mantém as configurações do projeto, como variáveis de ambiente ou configuração específica de terceiros.
- [`src/controllers`](../src/controllers): Contém as funções que tratam as requisições HTTP, chamadas pelo Express ou outro framework.
- [`src/helpers`](../src/helpers): Armazena funções utilitárias, como formatadores ou loggers.
- [`src/middlewares`](../src/middlewares): Contém middlewares que processam requisições antes de chegarem aos controladores (ex: autenticação, autorização).
- [`src/models`](../src/models): Define os modelos de dados ou entidades que a aplicação usa para interagir com o banco de dados.
- [`src/repositories`](../src/repositories): Implementa a lógica de comunicação com o banco de dados ou APIs externas.
- [`src/routes`](../src/routes): Contém as rotas da aplicação, ligando as requisições HTTP aos controladores.
- [`src/services`](../src/services): Contém a lógica de negócio da aplicação. Aqui estão os serviços que manipulam dados, validam regras e interagem com os repositórios.

## Scripts

- `npm run dev` — Inicia a aplicação em modo de desenvolvimento em `http://localhost:3000`;
- `npm run build` — Transpila uma versão de produção;
- `npm run start` — Inicia a aplicação atráves do projeto transpilado `http://localhost:3000`;
- `npm run type-check` — Verifica se todos os tipos TypeScript em seu projeto são válidos;
- `npm run lint` — Executa ESLint para todos os arquivos no diretório `src`;
- `npm run format` — Executa o Prettier para todos os arquivos no diretório `src`;
- `npm run test` — Executa os testes;

## Path Mapping

O TypeScript vem configurado com `custom path mappings`. Para importar componentes ou arquivos locais, use o `@` como prefixo.

```tsx
import { ExampleController } from '@/controllers/example';
```

# 📕 License

Lançado em 2025 📕 License
Construído por [CarlosEduAC](https://github.com/CarlosEduAC) 🚀.
Esse projeto esta sobre [MIT license](./LICENSE).

<!-- Imagens usadas neste readme -->

[node-version]: <https://img.shields.io/badge/Version-20.16.0-417E38?logo=node.js>
[typescript-version]: <https://img.shields.io/badge/Version-5.5.0-3178C6?logo=typescript>
[express-version]: <https://img.shields.io/badge/Version-4.19.2-259DFF?logo=express>
[license]: <https://img.shields.io/badge/license-MIT-F28000>
