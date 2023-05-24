const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 4000;
dotenv.config({path:'./config.env'})

const DB = process.env.DATABASE_URL.replace("<PASSWORD>",process.env.DATABASE_PASSWORD);

mongoose.connect(DB)
.then(()=>{
    console.log("DB connection Successful");
})
.catch(()=>{
    console.log("DB connection UnSuccessful");
})

app.listen(PORT,()=>{
    console.log(`App listening to port ${PORT}`);
})