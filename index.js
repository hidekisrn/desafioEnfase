const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs.js');
const resolvers = require('./resolvers');
const { MONGODB } = require('./config.js');

// https://www.apollographql.com/docs/apollo-server/getting-started/
// Instanciando o ApolloServer
const server = new ApolloServer({
    typeDefs,
    resolvers
});

// https://mongoosejs.com/docs/
// Abrindo a conexão com o db
mongoose
    .connect(MONGODB, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log('MongoDB Connected');
        return server.listen({ port: 5000 });
    })
    .then((res) => {
        console.log(`Server running at ${res.url}`);
    });