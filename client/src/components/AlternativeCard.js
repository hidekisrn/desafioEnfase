import React from 'react';
import { Item, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import DeleteAlternativeButton from './DeleteAlternativeButton';

function AlternativeCard({ questionId, alternative: { id, alternativeBody, correctAnswer } }){

    return(
        <Item.Group>
            <Item>
                <Item.Content>
                    <Item.Header>{alternativeBody}</Item.Header>
                    <Item.Meta>Resposta da alternativa: {String(correctAnswer)}</Item.Meta>
                    <DeleteAlternativeButton alternativeId={id} questionId={questionId}/>
                    <Button as='div' floated="left" as={Link} to={`/editalternative/${questionId}/${id}`}>
                        <Icon name="edit" style={{ margin: 0 }}/>
                    </Button>
                </Item.Content>
            </Item>
        </Item.Group>
    )
}

export default AlternativeCard