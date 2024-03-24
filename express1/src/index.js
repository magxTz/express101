const express= require('express')
const router = require('./routes/user');
const PORT=3001;
const app = express();

app.use(express.json());
app.use('/api',router);

app.listen(PORT,()=>console.log(`server is up running listening port : ${PORT}`));
app.use(express.json());
