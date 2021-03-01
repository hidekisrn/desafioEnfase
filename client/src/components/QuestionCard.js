import React from 'react';
import { Item, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import DeleteQuestionButton from './DeleteQuestionButton';

function QuestionCard({ question: { id, questionBody, createdAt } }){

    return(
        <Item.Group>
            <Item>
                <Item.Content>
                    <Item.Header as={Link}to={`/questions/${id}`}>{questionBody}</Item.Header>
                    <Item.Meta>Created {moment(createdAt).fromNow()}</Item.Meta>
                    <DeleteQuestionButton questionId={id}/>
                    <Button as='div' floated="left" as={Link} to={`/editquestion/${id}`}>
                        <Icon name="edit" style={{ margin: 0 }}/>
                    </Button>
                </Item.Content>
            </Item>
        </Item.Group>
    )
}

export default QuestionCard;