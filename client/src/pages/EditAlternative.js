import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { EDIT_ALTERNATIVE_MUTATION } from '../utils/graphql';

function EditAlternative(props){
    
    const questionId = props.match.params.questionId;
    const alternativeId = props.match.params.alternativeId;

    const [ alternativeBody, setAlternativeBody] = useState('');
    const [ correctAnswer, setAlternativeAnswer] = useState(true);

    const handleChange = (e) => {
        let isCorrect;
        if (e.target.value === "true"){
            isCorrect = true;
        } else {
            isCorrect = false;
        }
        console.log('iscorrect', isCorrect);
        setAlternativeAnswer(isCorrect);
    };

    const [editAlternative, { loading }] = useMutation(EDIT_ALTERNATIVE_MUTATION,{
        update(){
            setAlternativeBody('');
            setAlternativeAnswer(true);
            props.history.push(`/questions/${questionId}`);
            window.location.reload();
        },
        variables: {
            questionId,
            alternativeId,
            alternativeBody: alternativeBody,
            correctAnswer: correctAnswer
        }
    });

    const onSubmit = (event) => {
        event.preventDefault();
        editAlternative()
        console.log('submit', editAlternative);
   };

    return(
        <div>
            <p></p>
            <Button as={Link} to={`/questions/${questionId}`}>Voltar</Button>
            <p></p>
            <Form onSubmit={ onSubmit } className={loading? "loading" : ''}>
                <h1>Editar alternativa</h1>
                <input
                    type="text"
                    label="Novo enunciado da alternativa"
                    placeholder="novo enunciado da alternativa..."
                    name="alternativeBody"
                    value={alternativeBody}
                    onChange={event => setAlternativeBody(event.target.value)}/>
                <select name="correctAnswer" value={correctAnswer} className="ui dropdown" style={{width:'300px'}} onChange={handleChange}>
                    <option value="true">Verdadeiro</option>
                    <option value="false">Falso</option>
                </select> 
                <Button type="submit" primary>
                    Enviar alternativa alterada
                </Button>
            </Form>
        </div>
    );
}

export default EditAlternative