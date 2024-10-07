const express = require('express');
const bodyParser = require('body-parser');
const postRoute = require('./routes/post.routes');
const userRoute = require('./routes/user.routes');

const app =express();

app.use(bodyParser.json())

app.use('/api/v1/user',userRoute);
app.use('/api/v1/post',postRoute);

app.use((error,req,res,next)=>{
    if(res.headerSent)
    {
        return next(error);
    }
    res.status(error.code ||500).json({message:error.message||'An unkown error occured !'});
});


app.listen(5000);