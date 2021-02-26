const { model, Schema } = require('mongoose');

const questionSchema = new Schema({
    body: String
});

module.exports = model('Question', questionSchema);