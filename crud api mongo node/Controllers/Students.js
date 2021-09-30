const Students = require('../model/Students');

exports.getAllStudents = (req, res) => {
    Students.find().then(result => {       //find methond to fetch all data
        console.log(result)
        res.status(200).json({
            message: "Students data fetched",
            students: result
        });
    }).catch(error => {
        res.status(500).json(
            {
            message: "Error in Database",
            error: error
           }
        );
    });
}

exports.getStudent=(req,res)=>{
     const studentName=req.params.name;
     Students.find({
         name:studentName
     }).then(result=>{
         res.status(200).json({
             message:"request successfull",
             student:result
         });
     }).catch(err=>{
         res.status(500).json({
             message:"data not available error!",
             error:err
         })
     })
}

exports.addNewStudent = (req, res) => {
    //fetching details
    const{                      
        student_id,
        name,
        class_,
        section,
        subjects,          
        address
    }=req.body;

    //create new object with user data
   
    const teacherObj =new Students({
    student_id: student_id,
    name: name,
    class_: class_,
    subject: subject,
    section:section,
    subjects:subjects,
    address:address
  });
  
  //we will call method to save this in db
  teacherObj.save().then(
      result=> {
          res.status(200).json({
              message:"student registered successfully !!",
              Student:result
          });
      }).catch(error =>{
          res.status(500).json({
              message: "Error in Database",
              error:error
          });
      });
}

exports.deleteStudent = (req, res) => {
    const studentName = req.params.name;    //storing name paramerter in variable

    Students.find({
       name: studentName
    }).then(result=>{
        id=result[0].id
        Students.findByIdAndRemove(id)
        .then(data=>{
            if (!data){
                res.status(404).send({
                    message :`cannot delete ${studentName} mat be doesnt exixt in db!`
                });
            }else{
                res.send({
                    message:"deleted succesfully !"
                });
            }
        })
    })
}

exports.updateStudent = (req, res) => {
    const studentName = req.params.name;
    Students.find({
        name: teacherName
    }).then(result=>{
      const  id=result[0].id
       Students.findByIdAndUpdate({ _id: id }, req.body)
       .then((data) => {
         res.send("updated Successfully");
       })
       .catch((err) => {
         res.send("err in updation");
       });
    })
}

