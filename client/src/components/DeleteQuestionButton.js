import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { DELETE_QUESTION_MUTATION } from '../utils/graphql';
import { Button, Icon, Confirm } from 'semantic-ui-react';

function DeleteQuestionButton({ questionId }){

    const [confirmOpen, setConfirmOpen] = useState(false);

    const [deleteQuestion] = useMutation(DELETE_QUESTION_MUTATION, {
        update(){
            setConfirmOpen(false);
            window.location.reload();
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
            onClick={() => setConfirmOpen(true)}>
                <Icon name="trash" style={{ margin: 0 }}/>
        </Button>
        <Confirm
            open={confirmOpen}
            onCancel={() => setConfirmOpen(false)}
            onConfirm={deleteQuestion}/>
        </>
    )
}

export default DeleteQuestionButton;