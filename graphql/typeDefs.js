const { gql } = require('apollo-server');

module.exports = gql`
    type Question{
        id: ID!
        body: String!
        createdAt: String!
    }

    input createQuestionInput{
        body: String!
    }
    type Query{
        getQuestions: [Question]
        getQuestion(questionId : ID!): Question
    }
    type Mutation{
        createQuestion(createQuestionInput: createQuestionInput): Question!
        deleteQuestion(questionId: ID!): String! #não importa o que retorna
    }
`;