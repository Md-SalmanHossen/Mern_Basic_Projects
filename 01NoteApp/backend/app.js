

const express=require('express');
const cors=require('cors');
const noteRoutes=require('./routes/noteRoutes');
const connectDB=require('./config/db')
const app =express();
app.use(cors());
app.use(express.json());


module.exports=app;