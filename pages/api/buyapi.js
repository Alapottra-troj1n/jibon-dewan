import connectDb from "../../lib/connectDb";

export default async function handler(req, res) {
    if (req.method == "POST") {

     try{
        const db = await connectDb();

        const {name, email, bkashNumber, transaction_id} = req.body;
        console.log(req.body);
        const results = await db.collection('responses').insertOne({name, email, bkashNumber, transaction_id});

        res.send({success: true, message: results});
     }catch(err){
        console.log(err);
        res.send({success: false, message: err.message});
     }
      
      
     


    }else{

  
        res.status(500).send({ success: false, message: "Must be a POST request" });


    }
  


}