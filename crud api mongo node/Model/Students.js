// import the mongoose
const mongoose = require('mongoose');

// create a schema
const Schema = mongoose.Schema;

// we need to declare the fields present in the collection
const StudentSchema = new Schema(
    {
        student_id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
       
        class_: {
            type: Number,
            required: true
        },
        section: {
            type: String,
            required: true
        },
        subjects:{
            type:Array,
            required:true
        },
        address: {
            type: String,
            required: true
        }
    }
);

// create a model from schema, connect to mongoDB collection and export the model
module.exports = mongoose.model('Student', StudentSchema, 'Students');