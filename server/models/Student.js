const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    rollNumber: {
        type: Number,
        required: true,
    },
    
});

const Student = mongoose.model("Student", StudentSchema)
module.exports = Student;