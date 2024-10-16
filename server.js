
const express = require('express');
const bodyParser = require('body-parser');
const postRoute = require('./routes/post.routes');
const userRoute = require('./routes/user.routes');
const HttpError = require('./utils/http-error');
const swaggerUi = require('swagger-ui-express');
const specs = require('./swaggerOptions');
const MON = require('./db/mongo');

const app =express();
app.use(bodyParser.json())

// Mongo Practice 
app.post("/product",MON.createMPost);
app.get("/product",MON.getMPost)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use('/api/v1/user',userRoute);
app.use('/api/v1/post',postRoute);

app.use((req,res,next)=>{
    const error = new HttpError('Couldnot fing this route',404);
    throw error;
    next();
})

app.use((error,req,res,next)=>{
    if(res.headerSent)
    {
        return next(error);
    }
    res.status(error.code ||500).json({message:error.message||'An unkown error occured !'});
});

app.listen(5000);