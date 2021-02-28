import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { Grid, Item } from 'semantic-ui-react';
import moment from 'moment';
import AlternativeCard from '../components/AlternativeCard';


function SingleQuestion(props){
    const questionId = props.match.params.questionId;

    const {
        loading,
        data
    } = useQuery(FETCH_QUESTION_QUERY, {
        variables: {
            questionId
        }
    });

    let questionMarkup;
    if(loading && !data){
        questionMarkup = <p>Carregando questão...</p>
    }  else {
        const {
            id: questionId,
            questionBody,
            createdAt,
            alternatives
        } = data.getQuestion;

        questionMarkup = (

            <Grid divided="vertically">
                <Grid.Row columns={1}>
                <Item.Group>
                    <Item>
                        <Item.Content>
                            <Item.Header><h1>{questionBody}</h1></Item.Header>
                            <Item.Meta>{moment(createdAt).fromNow()}</Item.Meta>
                        </Item.Content>
                    </Item>
                </Item.Group>
                </Grid.Row>

                {alternatives.map((alternative) => (
                    <Grid.Row key={alternative.id}>
                        <AlternativeCard questionId={questionId}alternative= {alternative}/>
                    </Grid.Row>
                ))
            }
            </Grid>
        )
    }
    return questionMarkup;
}

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
`

export default SingleQuestion;