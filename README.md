# Desafio

<p>Nosso desafio é simples! Queremos que você construa um sistema onde seja
possível gerenciar questões de múltipla escolha, utilizando React e GraphQL
(requisitos mínimos). Deve ser possível adicionar, editar e deletar perguntas e
respostas, assim como visualizar na forma de listagem todas as perguntas já
cadastradas no sistema. Não colocamos nenhuma restrição ou definição para o
desenvolvimento de layout das telas, ficando a seu critério pensar na solução como
um todo.</p>

# Stack utilizada:
<p>MongoDB</p>
<p>React</p>
<p>Node.js</p>
<p>GraphQL(Apollo)</p>

# Como executar:
<p>Primeiramente você deve ter instalado o gerenciador de pacotes npm.</p>
<p>Adicionar os seguintes pacotes à pasta root:</p>

```
npm add apollo-server graphql graphql-tag mongoose react-router-dom
npm add -D nodemon
```

<p>Iniciar o client com:</p>

```
npx create-react-app client
```

<p>Depois mudar para o diretório client(ou o nome da sua aplicação) e adicionar os seguintes pacotes ao client:</p>

```
npm add @apollo/client graphql graphql-tag moment semantic-ui-react semantic-ui-css
```

<p>Abrir dois terminais, um para rodar o servidor e o outro para rodar o client.</p>
<p>Executar os comandos na pasta root do projeto:</p>

```
npm start
```

<p>Executar os comandos na pasta client do projeto:</p>

```
npm start
```

<p>Link para acessar a API:</p>

```
localhost:5000
```

<p>Link para acessar a aplicação:</p>

```
localhost:3000
```