const { Router } = require("express");

const router= Router();


const studentList=[
    {"id":"1","name":"Alex Malisa","school":"UDSM","course":"ME"},
    {"id":"2","name":"Frank Malisa","school":"UDSM","course":"CIT"},
    {"id":"3","name":"Stephen Kikoti","school":"DUCE","course":"COSS"}
]
router.get('/',(req,res)=>{

    if(true)
        res.send(studentList);
    else
    {
        error ={
            status:'ERROR',
            description:'invalid access token, contact admini'
        }
        res.send(error);
        console.log(`access denied,invalid access token`);
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