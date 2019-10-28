import { MongoClient, ObjectID } from 'mongodb';
import student from "./model";
import mongoose from "mongoose";


const url = 'mongodb://localhost:27017';
const dbName = 'pictureDB';
mongoose.connect (url+'/'+dbName);

const studentControler = {
    get: function (request, response) {
        const page = parseInt(request.query.page);
        student.find()
        .then(students=>{
                let firstIndex, lastIndex;
                if (page) {
                    firstIndex = page * 5 - 5;
                    lastIndex = page * 5;
                }
                let arr = students.slice(firstIndex, lastIndex);
                response.send(arr);    
        })
        .catch(
            error=>{
                response.status(500).send(error);
            }
        );
    },

    getAverage: function (req, res) {
        const average = req.query.x;
        student.find()
        .then(students => {
            let arr = [];
            students.forEach((elem) => {
                if ((elem.englishAssessment + elem.mathAssessment + elem.physicsAssessment) / 3 >= average)
                    arr.push(elem);
            })
            res.send(arr);
        })
    },

    delete_id: function (request, response) {
        student.findByIdAndDelete(request.query.id).
        then(student=>{
            if (student)
                response.send(student);
            else
                response.status(404).send("Не знайдено");    
        }).catch(
            error=>{
                response.status(500).send(error);
            }
        )
    },

    post: function(request, response) {
        const newStudent = new student(request.body);
        newStudent.save()
        .then(student=>{
            response.send(student);    
        }).catch(
            error=>{c 
                response.status(500).send(error);
            });
    }
}

export default studentControler;