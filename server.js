const express = require('express');
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');
const routerV1 = require('./routes/v1/index')
const app = express();
//body json
app.use(express.json());

app.use(fileUpload({
    limits: { fileSize: 20 * 1024 * 1024 }
}));

app.use((req, res, next)=>{
    console.log("middleware");
    next();
});

routerV1(app);

app.use(function(err, req, res, next){
    console.error(err);
    const status = err.statusCode || 500;
    const message = err.message;
    const data = err.data;

    res.status(status).json({
        message: message,
        data: data
    })
});

mongoose.connect('mongodb://mongoadmin:secret@localhost/mi_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(()=>{
    console.log("Mongo ok")
});


app.listen(8080, ()=>{
    console.log("server ok. Port: 8080");
});
