const mongoose = require("mongoose")

const doctorSchema = new mongoose.Schema({
    name:
    {
        type:String,
        required: true
    },
    email:
    {
        type: String,
        //trim: true,
        //lowercase: true,
        //unique: true,
    },
    address:
    {
        type: String,
        required: true
    },
    qualifications:
    {
        type: String,
        required: true
    },
    experience:
    {
        type: Number,
        required: true
    },
    specialisation:
    {
        type: String,
        required: true
    }
})

const Doctor = new mongoose.model("Doctor",doctorSchema)
module.exports = Doctor