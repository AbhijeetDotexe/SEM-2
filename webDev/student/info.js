const express=require('express');
const router=express.Router();
const sequelize=require('../db/dbconfig');
const STUDENT=require('../models/student.model')
// var data=[
//     {name:"Uttam", rollno:123},
//     {name:"Mahesh", rollno:124},
// ]
// var data1=[
//     {name:"Uttam1", rollno:123},
//     {name:"Mahesh1", rollno:124},
// ]

router.get('/',async (req,res)=>{
    // res.send('Response from the Server.js');
    const students=await STUDENT.findAll();
    res.send(students)
})
router.get('/get',async (req,res)=>{
    // res.send('Response from the Server.js');
    const students=await STUDENT.findAll({
        where:{
            student_name:"Uttam"
        }
    });
    res.send(students)
})


router.get('/get/one',async (req,res)=>{
    // res.send('Response from the Server.js');
    const students=await STUDENT.findOne({
        where:{
            student_name:"Uttam"
        }
    });
    res.send(students)
})

router.get('/get/:id',async (req,res)=>{
    // res.send('Response from the Server.js');
    const students=await STUDENT.findAll({
        where:{
            student_id:req.params.id
        }
    });
    res.send(students)
})

router.post('/',async (req,res)=>{
    const student=await STUDENT.create(req.body)
    res.send(student)
})

router.post('/login',async (req,res)=>{
    const student=await STUDENT.findAll({
        where:{
            student_id:req.body.student_id,
            student_email:req.body.student_email
        }
    })
    if(student.length>0)
        res.send({login:true})
    else{
        res.send({login:false})
    }
})

router.post('/update/:id',async (req,res)=>{
    const student=await STUDENT.findOne({
        where:{
            student_id:req.params.id
        }
    })
    const updatedstudent=await student.update({
        student_email:req.body.student_email
    })
    res.send(updatedstudent)
})

router.get('/delete/:id',async (req,res)=>{
    const student=await sequelize.query(`Delete * from students`)
    // const student=await STUDENT.findOne({
    //     where:{
    //         student_id:req.params.id
    //     }
    // })
    const updatedstudent=await student.destroy()
    res.send('item deleted')
})
// router.post('/',(req,res)=>{
//     res.send(data)
// })
// router.get('/',(req,res)=>{
//     res.send(data1)
// })
module.exports=router