const { QuestionInputError } = require('apollo-server');

const Question = require('../models/Question');
module.exports = {
    Query: {
        async getQuestions(){
            try{
                const questions = await Question.find();
                return questions;
            } catch(err){
                throw new Error(err);
            }
        }
    },
    Mutation: {
        async newQuestion(
            _,
            {
                newQuestionInput: { body }
            }
        ){
            const newQuestion = new Question({
                body
            });

            const newQuestions = await newQuestion.save();
            return newQuestions;
        }
    }
}