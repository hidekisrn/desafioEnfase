const questionsResolvers = require('./questions');
const commentsResolvers = require('./alternatives');

module.exports = {
    Query: {
        ...questionsResolvers.Query
    },
    Mutation: {
        ...questionsResolvers.Mutation,
        ...commentsResolvers.Mutation
    }
};