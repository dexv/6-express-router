const express = require('express');
const routerV1 = require('./routes/index')
const app = express();
//body json
app.use(express.json());
routerV1(app);

app.listen(8080, ()=>{
    console.log("server ok. Port: 8080");
});
