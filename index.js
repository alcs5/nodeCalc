const express = require('express');
const app = express();

app.set('view engine' , 'ejs');

const routes = require('./routes/routers');
app.use('/' , routes);

const port = 3030;
app.listen(port , () => {
    console.log(`listening to port ${port}`);
});