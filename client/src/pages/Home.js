import React from 'react';
import { useQuery } from '@apollo/client';
import { Button, Grid } from 'semantic-ui-react';
import { FETCH_QUESTIONS_QUERY } from '../utils/graphql';
import QuestionCard from '../components/QuestionCard';
import { Link } from 'react-router-dom';

function Home(){

    const {
        loading,
        data
    } = useQuery(FETCH_QUESTIONS_QUERY);

    return (
        <Grid divided='vertically'>
            <p></p>
            <Grid.Row columns={2}>
                <Grid.Column>
                    <h1>Questões</h1>
                </Grid.Column>
                <Grid.Column>
                    <Button as={Link}to="/newquestion">Adicionar questão</Button>
                </Grid.Column>
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