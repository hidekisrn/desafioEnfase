import gql from 'graphql-tag';

export const FETCH_QUESTIONS_QUERY = gql`
    query {
        getQuestions{
            id
            questionBody
            createdAt
            alternativeCount
            alternatives{
                id
                alternativeBody
            }
        }
    }
`;

export const FETCH_QUESTION_QUERY = gql`
    query getQuestion($questionId: ID!){
        getQuestion(questionId: $questionId){
            id
            questionBody
            createdAt
            alternatives{
                id
                alternativeBody
                createdAt
                correctAnswer
            }
        }
    }
`;

export const SUBMIT_ALTERNATIVE_MUTATION = gql `
    mutation ($questionId: ID!, $alternativeBody: String!, $correctAnswer: Boolean!){
        createAlternative(questionId: $questionId, alternativeBody: $alternativeBody, correctAnswer: $correctAnswer){
            id
            alternatives{
                id
                alternativeBody
                correctAnswer
                createdAt
            }
            alternativeCount
        }
    }
`;

export const CREATE_QUESTION = gql`
    mutation createQuestion(
        $questionBody: String!
    ){
        createQuestion(
            createQuestionInput: {
                questionBody: $questionBody
            }
        ){
            id questionBody createdAt
        }
    }
`;

export const EDIT_QUESTION_MUTATION = gql`
    mutation editQuestion($questionId: ID!, $questionBody: String!){
        editQuestion(questionId: $questionId, questionBody: $questionBody){
            id
            questionBody
        }
    }
`;

export const EDIT_ALTERNATIVE_MUTATION = gql `
    mutation editAlternative($questionId: ID!, $alternativeId: ID!, $alternativeBody: String!, $correctAnswer: Boolean!){
        editAlternative(questionId: $questionId, alternativeId: $alternativeId, alternativeBody: $alternativeBody, correctAnswer: $correctAnswer){
            id
            alternatives{
                id
                alternativeBody
            }
        }
    }
`;

export const DELETE_QUESTION_MUTATION = gql`
    mutation deleteQuestion($questionId: ID!){
        deleteQuestion(questionId: $questionId){
            id
            questionBody
            alternatives{
                id
                alternativeBody
            }
        }
    }
`;

export const DELETE_ALTERNATIVE_MUTATION = gql`
    mutation deleteAlternative($questionId: ID!, $alternativeId: ID!){
        deleteAlternative(questionId: $questionId, alternativeId: $alternativeId){
            id
            questionBody
            alternatives{
                id
                alternativeBody
            }
        }
    }
`;