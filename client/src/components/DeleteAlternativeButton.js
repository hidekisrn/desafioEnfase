import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Button, Icon, Confirm } from 'semantic-ui-react'
import { DELETE_ALTERNATIVE_MUTATION } from '../utils/graphql';

function DeleteAlternativeButton({ questionId, alternativeId }){
    
    console.log('ids', questionId, alternativeId);

    const [confirmOpen, setConfirmOpen] = useState(false);

    const [deleteAlternative] = useMutation(DELETE_ALTERNATIVE_MUTATION, {
        update(){
            setConfirmOpen(false);
        },
        variables: {
            questionId,
            alternativeId
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
            onConfirm={deleteAlternative}/>
        </>
    )
}

export default DeleteAlternativeButton;