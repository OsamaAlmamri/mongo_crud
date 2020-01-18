const mongooes = require("mongoose");
mongooes.connect("mongodb://localhost:27017/new_employee", {useNewUrlParser: true}, err => {
    if (!err) {
        console.log('connect');
    } else {
        console.log('error');
    }

});

require('./employeeSchema');