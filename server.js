const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path')


const app = express();
const PORT =process.env.PORT || 8080;

mongoose.connect('mongodb+srv://feedback:lilpop19@feedbackdb.nnv6w.mongodb.net/FeedbackDB',()=>
    console.log('connected to DB!')
);

// const MONGODB_URI = 'mongodb+srv://feedback_api:feedbackapi@feedbackdb.nnv6w.mongodb.net/?retryWrites=true&w=majority'
// mongoose.connect(MONGODB_URI ||'mongodb://localhost/feedback_project',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// mongoose.connection.on('connected', () => {
//     console.log('Mongoose is connected!');
// });

app.use(morgan('tiny'));

app.get('/api', (req, res) => {
    const data ={
        username: 'idarous',
        age: 26
    };
    res.json(data);
});

app.listen(PORT, console.log(`Server is starting at ${8080}`))