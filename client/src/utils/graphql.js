import gql from 'graphql-tag';

export const FETCH_QUESTIONS_QUERY = gql`
    {
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