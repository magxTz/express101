const { Router } = require("express");

const router= Router();
const cookieParser= require('cookie-parser');


const studentList=[
    {"id":"1","name":"Alex Malisa","school":"UDSM","course":"ME","gpa":3.2},
    {"id":"2","name":"Frank Malisa","school":"UDSM","course":"CIT","gpa":1.8,},
    {"id":"3","name":"Stephen Kikoti","school":"DUCE","course":"BAED","gpa":5.0,},
    {"id":"4","name":"simon Mabuga","school":"UDSM","course":"ME","gpa":1.6},
    {"id":"5","name":"Omary Nyalusi","school":"UDSM","course":"CIT","gpa":1.8,},
    {"id":"6","name":"Stephen Sanga","school":"DUCE","course":"BAED","gpa":2.0}
]
router.get('/',(req,res)=>{
    res.cookie('visited',true,{
        maxAge:20000,
    });
    if(req.query && Object.keys(req.query).length > 0){ 
        const {gpa,sortBy} = req.query;
        parsed_gpa=parseFloat(gpa);
        if(!isNaN(parsed_gpa)){
            const filteredStudents = studentList.filter(s => s.gpa>=parsed_gpa);
            if(sortBy ==='ASC'){
                const sortedStudent= filteredStudents.sort((a,b)=> a.gpa-b.gpa);
                res.send(sortedStudent);
            }
            else{
                const sortedStudent= filteredStudents.sort((a,b)=> b.gpa-a.gpa);
                res.send(sortedStudent);
            }
            
        }else{
            res.send('invalid value for Query parameter(s)');
        }
    }
    else{
        res.send(studentList);
    }
    
        
    
});

router.post('/',(req,res)=>{
    console.log(req.body);
    studentList.push(req.body);
    res.sendStatus(201);
});

router.get('/:identity',(req,res)=>{
    const {identity}= req.params;

    const match=studentList.find((student) => student.id===identity);
    res.send(match);
});
module.exports = router;