import {Schema, model} from "mongoose";

const studentSchema = new Schema({
    fullName: String,
    className: String,
    englishAssessment: Number,
    mathAssessment: Number,
    physicsAssessment: Number
})

const student = model("Picture", studentSchema);

export default student;