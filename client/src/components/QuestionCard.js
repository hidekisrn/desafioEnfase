import React from 'react';
import { Item } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';

function QuestionCard({ question: { id, questionBody, createdAt } }){
    return(
        <Item.Group>
            <Item>
                <Item.Content>
                    <Item.Header>{questionBody}</Item.Header>
                    <Item.Meta>Created {moment(createdAt).fromNow()}</Item.Meta>
                </Item.Content>
            </Item>
        </Item.Group>
    )
}

export default QuestionCard