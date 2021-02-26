const { gql } = require('apollo-server');

module.exports = gql`
    type Question{
        id: ID!
        body: String!
    }

    input NewQuestionInput{
        body: String!
    }
    type Query{
        getQuestions: [Question]
    }
    type Mutation{
        newQuestion(newQuestionInput: NewQuestionInput): Question!
    }
`;