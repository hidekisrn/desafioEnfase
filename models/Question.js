// Definição da estrutura/organização dos dados para o Mongoose
const { model, Schema } = require('mongoose');

const questionSchema = new Schema({
    questionBody: String,
    createdAt: String,
    alternatives: [{
        alternativeBody: String,
        correctAnswer: Boolean,
        createdAt: String
    }]
}
// https://mongoosejs.com/docs/guide.html#versionKey
// , { versionKey: false }
);

module.exports = model('Question', questionSchema);