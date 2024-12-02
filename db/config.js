const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const connectDB = async(req,res) =>{
    try{
        await prisma.$connect();
        // return res.json("connected to mysqldb")
    }catch(e){
        return res.json({message : "error connecting to db"})
    }

}

module.exports={prisma,connectDB};