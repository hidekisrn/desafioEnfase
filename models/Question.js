const { model, Schema } = require('mongoose');

const questionSchema = new Schema({
    body: String,
    createdAt: String
}
// , { versionKey: false }
);

module.exports = model('Question', questionSchema);