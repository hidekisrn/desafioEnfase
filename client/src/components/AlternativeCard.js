import React from 'react';
import { Item } from 'semantic-ui-react';
import DeleteAlternativeButton from './DeleteAlternativeButton';

function AlternativeCard({ questionId, alternative: { id, alternativeBody, correctAnswer } }){

    return(
        <Item.Group>
            <Item>
                <Item.Content>
                    <Item.Header>{alternativeBody}</Item.Header>
                    <Item.Meta>Resposta da alternativa: {String(correctAnswer)}</Item.Meta>
                    <DeleteAlternativeButton alternativeId={id} questionId={questionId}/>
                </Item.Content>
            </Item>
        </Item.Group>
    )
}

export default AlternativeCard