// import the mongoose
const mongoose = require('mongoose');

// create a schema
const Schema = mongoose.Schema;

// we need to declare the fields present in the collection
const TeacherSchema = new Schema(
    {   teacher_id: {
             type: Number,
             required: true
        },
        name: {
            type: String,
            required: true
        },
       
       subject: {
            type: String,
            required: true
        },
       classes: {
            type: Array,
            required: true
        },
        salary:{
            type:Number,
            required:true
        }
    }
);

// create a model from schema, connect to mongoDB collection and export the model
module.exports = mongoose.model('Teacher', TeacherSchema, 'Teachers');