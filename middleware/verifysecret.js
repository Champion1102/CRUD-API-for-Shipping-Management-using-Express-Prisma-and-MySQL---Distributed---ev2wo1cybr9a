
const verifysecret = async(res,req,next) =>{
    const secret = process.env.SHIPPING_SECRET_KEY
    const secretkey = req.header("SHIPPING_SECRET_KEY")


    try{
        if(!secretkey){
           return  res.status(403).json({"error": "SHIPPING_SECRET_KEY is missing or invalid"})
        }

        if(secret !== secretkey){
            return res.status(403).json({"error": "Failed to authenticate SHIPPING_SECRET_KEY"})
        }

        if(secret === secretkey){
            next()
        }
    }catch(e){
        return res.status(500).json({message : "Internal Server Error"} )
    }
}

module.exports = verifysecret;