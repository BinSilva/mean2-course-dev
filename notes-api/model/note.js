var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var noteModel = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    userEmail: { type: String, required: true },
    created: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Note', noteModel);