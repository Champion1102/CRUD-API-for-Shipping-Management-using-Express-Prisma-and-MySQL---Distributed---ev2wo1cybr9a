const express = require("express")
const router = express.Router()
const verify = require("../middleware/verifysecret")
const { prisma } = require("../db/config")

router.use(verify)

router.post("/create",async(req,res) =>{
    try{
        const {userId ,productId, count} = req.body;

        if(!userId || !productId || !count){
            return res.status(404).json({"error": "All fields required"})
        }
     
        const ship = await prisma.shipping.create({
         data : {userId, productId, count}
        })
       return  res.status(201).json(ship)  
    }catch(e){
       return  res.status(500).json({message : "Internal Server Error"})
    }

})

router.get("/get",async(req,res) => {
    try {
       const ships = await prisma.shipping.findMany();
       return  res.status(200).json(ships)
    } catch (error) {
        return res.status(500).json({message : "Internal Server Error"})
    }
})

router.get("/get/:id",async(req,res) =>{
    try {
        const {id} = req.params;
        const one = await prisma.shipping.findUnique({
            where : {userId : parseInt(id)}
        })
       return res.status(200).json(one)
        
    } catch (error) {
        return res.status(500).json({message : "Internal Server Error"})
    }
})

router.put("/cancel",async(req,res) =>{
    try {
        const { shippingId } = req.body;

        if(!shippingId || shippingId === None ){
           return res.status(404).json({ "error": "Missing shippingId"})
        }

        const update = await prisma.shipping.update({
            where : {shippingId : parseInt(shippingId)},
            data : {status : "cancelled"}
        })
        return res.status(200).json(update)
    } catch (error) {
       return  res.status(500).json({message : "Internal Server Error"})
    }
})




module.exports = router