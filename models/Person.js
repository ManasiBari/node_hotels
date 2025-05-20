const mongoose = require('mongoose');

//Define the Person schema
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number

    },
    work: {
        type: String,
        enum: ['chef', 'water','manager'],
        required: true
    },
    mobile:{
        type: String,
        reuired: true
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    address:{
        type: String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    }

})

//Create Person model

const person =mongoose.model('person', personSchema);
module.exports = person;