const {Schema, model } = require('mongoose')

const NoteSchema = new Schema({
    title:{
        type:String,
        required: true
    },
    content:{
        type:String,
    },
    date:{
        type: Date,
        required: true
    }
})

const Note = model('note', NoteSchema)
module.exports = Note