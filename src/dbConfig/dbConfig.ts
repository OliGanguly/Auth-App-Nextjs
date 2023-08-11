import mongoose, { connection } from "mongoose";
export async function connect(){
    try{
     mongoose.connect(process.env.MONGO_URI!) //! defines always available
     const connection = mongoose.connection;
     connection.on('connected', ()=>{
        console.log("MongoDb connected")
     })
     connection.on('error', (err)=>{
        console.log("MongoDb Not connected",err);
        process.exit();
     })
    }catch(error){
        console.log(error);
    }
}

