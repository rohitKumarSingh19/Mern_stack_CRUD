const mongoose=require('mongoose');
const databaseConnection=async()=>{
    // await mongoose.connect("mongodb://localhost:27017/bookstore")
    try{
        mongoose.connect("mongodb://localhost:27017/book").then(()=>{
            console.log(`Database connected successfully!`);
        }).catch((err)=>{
            console.log('Database connection failed',err);
        })
    }catch(error){
        console.log(error.message)
    }
}
module.exports=databaseConnection;