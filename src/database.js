const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sas-db-app', {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false
    })
    .then(db => console.log('DB is Connected'))
    .catch(err => console.error(err));