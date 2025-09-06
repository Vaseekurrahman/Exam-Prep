const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    question:{
        type:String,
    },
    option1:{
        type:String
    },
     option2:{
        type:String
    },
     option3:{
        type:String
    },
     option4:{
        type:String
    },
    correct:{
        type:String
    },
    subject:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Subject',
        required:true
    },
},{
    timestamps:true
})
module.exports = mongoose.model("Question",questionSchema);