// Definição da estrutura/organização dos dados para o Apollo
const { gql } = require('apollo-server');

module.exports = gql`
    type Question{
        id: ID!
        questionBody: String!
        createdAt: String!
        # em Alternatives poderia ser Alternative! para conter pelo menos 1 alternativa
        alternatives:[Alternative]!
        alternativeCount: Int!
    }

    type Alternative{
        id: ID!
        alternativeBody: String!
        correctAnswer: Boolean!
        createdAt: String!
    }

    input createQuestionInput{
        questionBody: String!
    }
    type Query{
        getQuestions: [Question]
        getQuestion(questionId : ID!): Question
    }
    type Mutation{
        createQuestion(createQuestionInput: createQuestionInput): Question!
        deleteQuestion(questionId: ID!): String! #não importa o que retorna
        modifyQuestion(questionId: ID!, questionBody: String!): Question!
        createAlternative(questionId: String!, alternativeBody: String!, correctAnswer: Boolean!): Question!
        deleteAlternative(questionId: ID!, alternativeId: ID!): Question!
        modifyAlternative(questionId: ID!, alternativeId: ID!, alternativeBody: String!, correctAnswer: Boolean!): Question
    }
`;