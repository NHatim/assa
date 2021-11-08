var express = require('express');
var router = express.Router();

// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'my-db.clnuugivpvs3.us-east-1.rds.amazonaws.com',
  user: 'hatim',
  database: 'my-db'
});
let studentList = [];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(studentList);
});

router.post('/', function(req, res, next){
    const newStudent = req.body
    studentList.push(newStudent)
    res.redirect('/students/' + newStudent.id)
})

router.get('/:id', function(req, res, next) {
    
const studentId = req.params.id;
studentList.forEach(student =>{
    if (student.id == studentId) {
        res.json(student)
        
    }else{
        res.send("Pas d'étudiant avec ce numéro")
    }
})
});




module.exports = router;
