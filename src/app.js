const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const app = express();

/*app.use(cors(corsOptions));
const allowCrosDomain= function(req,res,next){
    res.header('Access-Control-Allow-Origin',"hƩps://bln6v83fnk.execute-api.us-east-1.amazonaws.com/Prod/paƟents*");
    res.header('Access-Control-Allow-Methods',"OPTIONS, POST, GET, PUT, DELETE");
    res.header('Access-Control-Allow-Headers',"*");
    res.header('Access-Control-Allow-Headers',"Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
    next();
}

app.use(allowCrosDomain);
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json()) 

app.use(express.urlencoded({extended:false}));*/
//Ejecuto el llamado a mis rutas
const indexRouter = require('./routes/index');
const patientRouter = require('./routes/patientRouter');

// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));

//Aquí estoy disponiendo la posibilidad para utilizar el seteo en los formularios para el usod e los metodos put ó delete
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use(patientRouter);


//Activando el servidor desde express
app.listen('3001', () => console.log('Servidor corriendo en el puerto 3001'));
