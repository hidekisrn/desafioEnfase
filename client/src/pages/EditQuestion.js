import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { Form, Button } from 'semantic-ui-react';

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
    <Form onSubmit={ onSubmit } className={loading? "loading" : ''}>
        <h1>Editar alternativa</h1>
        <input
            type="text"
            label="Novo enunciado da questão"
            placeholder="novo enunciado da questão..."
            name="questionBody"
            value={questionBody}
            onChange={event => setQuestionBody(event.target.value)}/>
        
        <Button type="submit" primary>
            Enviar questão alterada
        </Button>
    </Form>
</div>
   )

}

const EDIT_QUESTION_MUTATION = gql`
    mutation editQuestion($questionId: ID!, $questionBody: String!){
        editQuestion(questionId: $questionId, questionBody: $questionBody){
            id
            questionBody
        }
    }
`;

export default EditQuestion;