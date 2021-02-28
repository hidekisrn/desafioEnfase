import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';

import { Button, Icon, Confirm } from 'semantic-ui-react'

function DeleteQuestionButton({ questionId }){

    const [confirmOpen, setConfirmOpen] = useState(false);

    const [deleteQuestion] = useMutation(DELETE_QUESTION_MUTATION, {
        update(){
            setConfirmOpen(false);
            // TODO: REMOVER QUESTÃO DA MEMORIA CACHE
        },
        variables: {
            questionId
        }
    })

    return(
        <>
        <Button
            as='div'
            color="red"
            floated="left"
            onClick={() => setConfirmOpen(true)}
            >
                <Icon name="trash" style={{ margin: 0 }}/>

        </Button>
        <Confirm
            open={confirmOpen}
            onCancel={() => setConfirmOpen(false)}
            onConfirm={deleteQuestion}/>
        </>
    )
}

const DELETE_QUESTION_MUTATION = gql`
    mutation deleteQuestion($questionId: ID!){
        deleteQuestion(questionId: $questionId)
    }
`;

export default DeleteQuestionButton