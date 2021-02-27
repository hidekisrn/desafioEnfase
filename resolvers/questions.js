// Definindo as operações(Query/Mutation) das questões do GraphQL no Apollo

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
        },
        async getQuestion(_, { questionId }){
            try{
                const question = await Question.findById(questionId);
                if(question){
                    return question;
                } else {
                    throw new Error('Questão não existe')
                }
            } catch(err){
                throw new Error(err);
            }
        }
    },
    Mutation: {
        async createQuestion(
            _,
            {
                createQuestionInput: { questionBody }
            }
        ){
            const createQuestion = new Question({
                questionBody,
                createdAt: new Date().toISOString()
            });

            const createQuestions = await createQuestion.save();
            return createQuestions;
        },

        async deleteQuestion(_, { questionId }){
            try {
                const question = await Question.findById(questionId);
                if(question){
                    await question.delete();
                    return 'Questão deletada com sucesso!';
                } else {
                    throw new Error('Questão não existe')
                }
            } catch(err){
                throw new Error(err);
            }
        },

        async modifyQuestion(_, {questionId, questionBody }){
            try{
                const question = await Question.findById(questionId);

                if(question){
                    question.questionBody = questionBody
                    await question.save();
                    return question;
                } else {
                    throw new Error('Questão não existe')
                }
            } catch(err) {
                throw new Error(err);
            }
        }
    }
}