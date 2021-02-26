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
// , { versionKey: false }
);

module.exports = model('Question', questionSchema);