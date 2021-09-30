const express=require('express');

const router=express.Router();

const studentsController = require('../Controllers/Students');
const teachersController = require('../Controllers/Teachers');
 


router.get('/getAllStudents',studentsController.getAllStudents)
router.get('/getStudent/:name',studentsController.getStudent)
router.post('/newStudent',studentsController.addNewStudent)
router.delete('/deleteStudent/:name',studentsController.deleteStudent)
router.put('/updateStudent/:name',studentsController.updateStudent)



router.get('/getAllTeachers',teachersController.getAllTeachers)
router.get('/getTeacher/:name',teachersController.getTeacher)
router.post('/newTeacher',teachersController.addNewTeacher)
router.delete('/deleteTeacher/:name',teachersController.deleteTeacher)
router.put('/updateTeacher/:name',teachersController.updateTeacher)


 

module.exports = router;

