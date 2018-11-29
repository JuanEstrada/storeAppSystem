const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');

//Ini
const app = express();
require('./database');

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));

app.set('view engine', '.hbs');

//middleware
app.use(express.urlencoded({
    extended: false
}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'Apollo13',
    resave: true,
    saveUninitialized: true
}))

//globalVariables

//routes
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));
app.use(require('./routes/catalog'));

//staticFiles
app.use(express.static(path.join(__dirname, 'public')));



//Server is Listening
app.listen(app.get('port'), () => {
    console.log('Server on PORT', app.get('port'));
});