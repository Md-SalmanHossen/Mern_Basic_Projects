
const mongoose=require('mongoose');

const connectDB=async()=>{

    try{
        await mongoose.connect('mongodb://localhost:27017/notes');
        console.log('Connected to MongoDB');
    }catch(error){
        console.error('Database connecting error: ',error);
        process.exit(1);
    }
    
}

module.exports=connectDB;