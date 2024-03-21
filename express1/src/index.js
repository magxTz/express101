const express= require('express')
const PORT=3001;
const app = express();

app.listen(PORT,()=>console.log(`server is up running listening port : ${PORT}`));
app.use(express.json());
const usersList=[{"name":"Alex Malisa"},{"name":"frank Malisa"}]
app.get('/users',(req,res)=>{
    console.log(req);
    res.send(usersList);
});

app.post('/users',(req,res)=>{
    console.log(req.body);
    usersList.push(req.body);
    res.sendStatus(201);
});


