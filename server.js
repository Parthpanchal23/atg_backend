const express = require('express');
const bodyParser = require('body-parser');
const postRoute = require('./routes/post.routes');

const app =express();
app.use(postRoute);
app.listen(5000);