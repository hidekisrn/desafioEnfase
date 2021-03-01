import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';

import { Button, Icon, Confirm } from 'semantic-ui-react'

function DeleteAlternativeButton({ questionId, alternativeId }){
    
    console.log('ids', questionId, alternativeId);

    const [confirmOpen, setConfirmOpen] = useState(false);

    const [deleteAlternative] = useMutation(DELETE_ALTERNATIVE_MUTATION, {
        update(){
            setConfirmOpen(false);
            // TODO: REMOVER QUESTÃO DA MEMORIA CACHE
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
            onClick={() => setConfirmOpen(true)}
            >
                <Icon name="trash" style={{ margin: 0 }}/>

        </Button>
        <Confirm
            open={confirmOpen}
            onCancel={() => setConfirmOpen(false)}
            onConfirm={deleteAlternative}/>
        </>
    )
}

const DELETE_ALTERNATIVE_MUTATION = gql`
    mutation deleteAlternative($questionId: ID!, $alternativeId: ID!){
        deleteAlternative(questionId: $questionId, alternativeId: $alternativeId){
            id
            questionBody
            alternatives{
                id
                alternativeBody
            }
        }
    }
`;

export default DeleteAlternativeButton;