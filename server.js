const express = require('express');
const bodyParser = require('body-parser');
const postRoute = require('./routes/post.routes');
const userRoute = require('./routes/user.routes');

const app =express();

app.use('/api/v1/user',userRoute);
app.use('/api/v1/post',postRoute);


app.listen(5000);