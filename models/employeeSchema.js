const mongoose = require("mongoose");
var Schema = mongoose.Schema;
var employee_schema = new Schema(
    {
        fullname: {
            type: String,
            required: "full name is required"
        },
        phone: {
            type: String,
            required: "phone  is required"
        },
        email: {
            type: String,
            required: "email is required"
        },
        city: {
            type: String,
            required: "city is required"
        },
    });

mongoose.model("new_employee", employee_schema);