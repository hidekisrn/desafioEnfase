import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { Form, Button } from 'semantic-ui-react';
import { EDIT_QUESTION_MUTATION } from '../utils/graphql';

function EditQuestion(props){

    const questionId = props.match.params.questionId;

    const [ questionBody, setQuestionBody] = useState('');

    const [editQuestion, { loading }] = useMutation(EDIT_QUESTION_MUTATION, {
        update(){
            setQuestionBody('')
            props.history.push('/');
        },
        variables:{
            questionId,
            questionBody: questionBody
        }
    })

    const onSubmit = (event) => {
        event.preventDefault();
        editQuestion()
        console.log('submit', editQuestion);
   };

   return(
    <div>
        <p></p>
        <Button as={Link} to="/">Voltar</Button>
        <p></p>
        <Form onSubmit={ onSubmit } className={loading? "loading" : ''}>
            <h1>Editar questão</h1>
            <input
                type="text"
                label="Novo enunciado da questão"
                placeholder="novo enunciado da questão..."
                name="questionBody"
                value={questionBody}
                onChange={event => setQuestionBody(event.target.value)}/>
            <p></p>
            <Button type="submit" primary>
                Enviar questão alterada
            </Button>
        </Form>
    </div>
   )
}

export default EditQuestion;