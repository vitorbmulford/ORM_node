API de Gerenciamento de Cursos

Sobre o Projeto

Este projeto é uma API RESTful para gerenciamento de cursos, desenvolvida 100% em JavaScript utilizando Node.js, Sequelize e Sequelize CLI, com banco de dados SQLite. O objetivo é proporcionar um ambiente para estudo e prática de conceitos de ORM (Object-Relational Mapping) com Node.js.

Tecnologias Utilizadas

Node.js - Runtime para JavaScript

Express.js - Framework web minimalista

Sequelize - ORM para interagir com o banco de dados

Sequelize CLI - Ferramenta de linha de comando para gerenciar migrações e seeds

SQLite - Banco de dados leve e eficiente para aplicações de pequeno porte

Instalação

Clone o repositório:

git clone https://github.com/seu-usuario/course-management-api.git

Acesse o diretório do projeto:

cd course-management-api

Instale as dependências:

npm install

Configure o banco de dados SQLite:

Certifique-se de que o arquivo config/config.json está configurado corretamente para utilizar SQLite.

Execute as migrações:

npx sequelize-cli db:migrate

Popule o banco de dados com dados iniciais (opcional):

npx sequelize-cli db:seed:all

Como Usar

Inicie o servidor:

npm start

A API estará disponível em: http://localhost:3000

Endpoints da API

Pessoas (Estudantes e Instrutores)

GET /pessoas - Lista todas as pessoas

POST /pessoas - Cria uma nova pessoa

PUT /pessoas/:id - Atualiza uma pessoa

DELETE /pessoas/:id - Remove uma pessoa

GET /pessoas/:estudanteId/matriculas - Lista todas as matrículas de um estudante

Categorias

GET /categorias - Lista todas as categorias

POST /categorias - Cria uma nova categoria

PUT /categorias/:id - Atualiza uma categoria

DELETE /categorias/:id - Remove uma categoria

Cursos

GET /cursos - Lista todos os cursos

POST /cursos - Cria um novo curso

PUT /cursos/:id - Atualiza um curso

DELETE /cursos/:id - Remove um curso

Matrículas

POST /pessoas/:estudanteId/matriculas - Cria uma nova matrícula para um estudante

Rodar

Para rodar os testes automatizados, utilize o comando:

npm run dev


