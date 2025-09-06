const express= require('express');
const cons = require('cors');
const mongose = require('mongoose');

const app = express();  
app.use(cons());
app.use(express.json());
const URL ='mongodb://localhost:27017/examprep'
mongose.connect(URL)
.then(() =>{
     console.log('Connected to MongoDB...') 
})
.catch((err)=>{
    console.log('Error is ${err}')
})


//Api Started 

app.use('/api/examinee', require('./routes/examineeRoute'));
//admin api started
app.use('/api/admin',require('./routes/adminRoute'))
//session api
app.use('/api/session/',require('./routes/sessionRoute'))
//subject api
app.use('/api/subject/',require('./routes/subjectRoute'))
//question api
app.use('/api/question/',require('./routes/questionRoute'))
//examination api
app.use('/api/exams/' ,require('./routes/examinationRoute'))
//msg api
app.use('/api/message/',require('./routes/messageRoute'))
//api ended



// Api Ended


app.listen(5000,()=>{
    console.log('Server Connected on http://localhost:5000');
})