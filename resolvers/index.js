const questionsResolvers = require('./questions');
const commentsResolvers = require('./alternatives');

module.exports = {
    Question: {
        alternativeCount: (parent) => parent.alternatives.length
    },
    Query: {
        ...questionsResolvers.Query
    },
    Mutation: {
        ...questionsResolvers.Mutation,
        ...commentsResolvers.Mutation
    }
};