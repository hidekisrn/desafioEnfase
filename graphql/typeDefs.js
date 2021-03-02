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
        deleteQuestion(questionId: ID!): Question!
        editQuestion(questionId: ID!, questionBody: String!): Question!
        createAlternative(questionId: ID!, alternativeBody: String!, correctAnswer: Boolean!): Question!
        deleteAlternative(questionId: ID!, alternativeId: ID!): Question!
        editAlternative(questionId: ID!, alternativeId: ID!, alternativeBody: String!, correctAnswer: Boolean!): Question
    }
`;