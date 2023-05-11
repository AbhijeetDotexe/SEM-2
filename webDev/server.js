const express=require('express');
const app=express();
const studentRouter=require('./student/info');
const seq=require('./db/dbconfig');
const STUDENT=require('./models/student.model')
const MARK=require('./models/marks.model')

app.use(express.static(__dirname+'/public'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/student',studentRouter)
seq.sync();

// app.get('/student',(req,res)=>{
//     res.send('Response from the Server.js');
// })
// app.post('/student',async (req,res)=>{
//     const student=await STUDENT.create(req.body)
//     res.send(student)
// })
app.listen(3001,()=>{
    console.log('Server is running')
})