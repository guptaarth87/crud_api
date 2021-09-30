// const Teachers = require('../model/Teachers');
const Teacher = require('../model/Teachers');

exports.getAllTeachers = (req, res) => {
    Teacher.find().then(result => {
        // console.log(result)
        res.status(200).json({
            message: "Teachers data fetched",
            teachers: result
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

exports.getTeacher=(req,res)=>{
    Teacher.find({

    }).then(result=>{
        res.status(200).json({
            message:"request successfull",
            teacher:result
        })
    }).catch(err=>{
        res.status(500).json({
            message:"data not available error!",
            error:err
        });
    })
}

exports.addNewTeacher = (req, res) => {
    const{
        teacher_id,
        name,
        subject,
        classes,
        salary
    }=req.body;

    //create new object with user data
   
    const teacherObj =new Teacher({
    teacher_id: teacher_id,
    name: name,
    subject: subject,
    classes: classes,
    salary :salary
  });
  
  //we will call method to save this in db
  teacherObj.save().then(
      result=> {
          res.status(200).json({
              message:"teacher registered successfully !!",
              teacher:result
          });
      }).catch(error =>{
          res.status(500).json({
              message: "Error in Database",
              error:error
          });
      });
}

exports.deleteTeacher = (req, res) => {
        const teacherName = req.params.name;
        Teacher.find({
           name: teacherName
        }).then(result=>{
            id=result[0].id
            Teacher.findByIdAndRemove(id)
            .then(data=>{
                if (!data){
                    res.status(404).send({
                        message :`cannot delete ${teacherName} mat be doesnt exixt in db!`
                    });
                }else{
                    res.send({
                        message:"deleted succesfully !"
                    });
                }
            })
        })
}

exports.updateTeacher = (req, res) => {
    const teacherName = req.params.name;
 Teacher.find({
     name: teacherName
 }).then(result=>{
   const  id=result[0].id
    Teacher.findByIdAndUpdate({ _id: id }, req.body)
    .then((data) => {
      res.send("updated Successfully");
    })
    .catch((err) => {
      res.send("err in updation");
    });
 })
 }


