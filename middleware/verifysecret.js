const secret = process.env.SHIPPING_SECRET_KEY

async function verifysecret(req,res,next){
    const {shipping_secret_key} = req.headers;


        if(!shipping_secret_key){
             res.status(403).send({"error": "SHIPPING_SECRET_KEY is missing or invalid"})
        }

        if(secret !== shipping_secret_key){
          res.status(403).send({"error": "Failed to authenticate SHIPPING_SECRET_KEY"})
        }

            next()

}

module.exports = verifysecret;