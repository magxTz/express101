const express= require('express')
const student_router = require('./routes/user');
const aris_router = require('./routes/aris');
const PORT=3001;
const app = express();

app.use(express.json());
app.use('/api/users',student_router);
app.use('/api/aris/student/',aris_router);

app.listen(PORT,()=>console.log(`server is up running listening port : ${PORT}`));
app.use(express.json());
