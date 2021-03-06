import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Grid, Item, Form, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import AlternativeCard from '../components/AlternativeCard';
import { FETCH_QUESTION_QUERY, SUBMIT_ALTERNATIVE_MUTATION } from '../utils/graphql';

function SingleQuestion(props){

    const questionId = props.match.params.questionId;

    const [alternativeBody, setAlternative] = useState('');
    const [correctAnswer, setAlternativeAnswer] = useState(true);

    const handleChange = (e) => {
        let isCorrect;
        if (e.target.value === "true"){
            isCorrect = true;
        } else {
            isCorrect = false;
        }
        console.log('iscorrect', isCorrect);
        setAlternativeAnswer(isCorrect);
    }

    const {
        loading,
        data
    } = useQuery(FETCH_QUESTION_QUERY, {
        variables: {
            questionId
        }
    });

    useEffect(() => {
        console.log('correctAnswer', correctAnswer, typeof correctAnswer)
    }, [correctAnswer])

    const [submitAlternative] = useMutation(SUBMIT_ALTERNATIVE_MUTATION, {
        update(){
            setAlternative('');
            setAlternativeAnswer(true);
        },
        variables:{
            questionId,
            alternativeBody: alternativeBody,
            correctAnswer: correctAnswer
        }
    })

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
            <>
            <p></p>
            <Button as={Link} to="/">Home</Button>
            <p></p>
            <Grid divided="vertically">
                <Grid.Row columns={1}>
                    <Grid.Column>
                        <h1>Questões</h1>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1}>
                    <Grid.Column>
                        <p>Digite uma nova alternativa</p>
                    </Grid.Column>
                    <Grid.Column>
                        <Form>
                            <div className="ui action input fluid">
                                <input
                                    type="text"
                                    placeholder="Enunciado da alternativa..."
                                    name="alternativeBody"
                                    value={alternativeBody}
                                    onChange={event => setAlternative(event.target.value)}/>
                                <select name="correctAnswer" value={correctAnswer} className="ui dropdown" style={{width:'300px'}} onChange={handleChange}>
                                    <option value="true">Verdadeiro</option>
                                    <option value="false">Falso</option>
                                </select>
                                <button type="submit"
                                    className="ui button teal"
                                    disabled={alternativeBody.trim() === ''}
                                    onClick={submitAlternative}>
                                    Submit
                                </button>
                            </div>
                        </Form>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1}>
                    <Item.Group>
                        <Item>
                            <Item.Content>
                                <Item.Header><h1>Questão: {questionBody}</h1></Item.Header>
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
            </>
        )
    }
    return questionMarkup;
}

export default SingleQuestion;