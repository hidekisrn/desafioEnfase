import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { useMutation } from '@apollo/client';
import { CREATE_QUESTION } from '../utils/graphql';
import { Link } from 'react-router-dom';

function NewQuestion(props){

    const [errors, setErrors] = useState({});

    const [values, setValues] = useState({
        questionBody: ''
    });

    const onChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value});
    };

    const [addQuestion, { loading }] = useMutation(CREATE_QUESTION, {
        update(result){
            console.log(result);
            props.history.push('/');
            window.location.reload();
        },
        onError(err){
            console.log(err.graphQLErrors[0].extensions.exception.errors);
            setErrors(err.graphQLErrors[0].extensions.exception.errors);
        },
        variables: values
    });

    const onSubmit = (event) => {
        event.preventDefault();
        addQuestion()
    };

    return(
        <div>
            <p></p>
            <Button as={Link} to="/">Voltar</Button>
            <p></p>
            <Form onSubmit={ onSubmit } className={loading? "loading" : ''}>
                <h1>Cadastrar nova questão</h1>
                <Form.Input
                    label="Enunciado"
                    placeholder="Enunciado da questão"
                    name="questionBody"
                    value={values.questionBody}
                    error={errors.questionBody ? true : false}
                    onChange={onChange}/>
                <Button type="submit" primary>
                    Adicionar questão
                </Button>
            </Form>
            {Object.keys(errors).length > 0 && (
                <div className="ui error message">
                <ul className="list">
                    {Object.values(errors).map(value => (
                        <li key={value}>{value}</li>
                    ))}
                </ul>
            </div>
            )}
        </div>
    );
}

export default NewQuestion;