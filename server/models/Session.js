const mongoose = require('mongoose');
const sessionSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    startDate:{
        type:Date,
        required:true
    },
     endDate:{
        type:Date,
        required:true
    }

},
{
    timestamps:true
}
)

module.exports = mongoose.model('Session',sessionSchema)