const mongoose =require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    Price:{
        type:String,
        required: true,

    },
    taste:{
        type: String,
        enum:['sweet', 'spicy', 'sour'],
        required:true,
    },
    is_drink: {
        type:Boolean,
        defalut:false,
    },
    ingredients:{
        type:[String],
        default:0,
    }
})

const MenuItem = mongoose.model('MenuItem',menuItemSchema);

module.exports = MenuItem;