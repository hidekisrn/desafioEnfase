import React from 'react';
import { useQuery } from '@apollo/client';
import { Grid } from 'semantic-ui-react';

import { FETCH_QUESTIONS_QUERY } from '../utils/graphql';
import QuestionCard from '../components/QuestionCard';

function Home(){

    const {
        loading,
        data
    } = useQuery(FETCH_QUESTIONS_QUERY);

    return (
        <Grid divided='vertically'>
            <Grid.Row>
                <h1>Questões</h1>
            </Grid.Row>
                {loading && !data ? (
                    <h1>Carregando questões...</h1>
                ) : (
                    data.getQuestions?.map((question) =>(
                        <Grid.Row key={question.id}>
                            <QuestionCard question={question}/>
                        </Grid.Row>
                    ))
                )}
        </Grid>
    )
}

export default Home;