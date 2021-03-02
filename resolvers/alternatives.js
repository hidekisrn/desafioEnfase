// Definindo as operações(Query/Mutation) das alternativas do GraphQL no Apollo
const Question = require('../models/Question');

module.exports = {
    Mutation: {
        createAlternative: async(_, { questionId, alternativeBody, correctAnswer }) => {
            const question = await Question.findById(questionId);

            if(question){
                // unshift para incluir a alternative no topo
                question.alternatives.unshift({
                    alternativeBody,
                    correctAnswer,
                    createdAt: new Date().toISOString()
                })
                await question.save();
                return question;
            } else {
                throw new Error('Questão não encontrada');
            }
        },

        deleteAlternative: async(_, { questionId, alternativeId }) => {
            const question = await Question.findById(questionId);

            if (question){
                const alternativeIndex = question.alternatives.findIndex(a => a.id === alternativeId);

                if(question.alternatives[alternativeIndex]){
                    question.alternatives.splice(alternativeIndex, 1);
                    await question.save();
                    return question;
                } else {
                    throw new Error('Alternativa não existe')
                }
            } else {
                throw new Error('Questão não encontrada')
            }
        },

        editAlternative: async(_, {questionId, alternativeId, alternativeBody, correctAnswer }) => {
            const question = await Question.findById(questionId);

            if (question){
                const alternativeIndex = question.alternatives.findIndex(a => a.id === alternativeId);

                if(question.alternatives[alternativeIndex]){
                    question.alternatives[alternativeIndex].alternativeBody = alternativeBody
                    question.alternatives[alternativeIndex].correctAnswer = correctAnswer
                    await question.save();
                    return question;
                } else {
                    throw new Error('Alternativa não existe')
                }
            } else {
                throw new Error('Questão não encontrada')
            }

        }
    }
}