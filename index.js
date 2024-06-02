const express = require("express")
const { connected } = require("./config/db");
const userSchema = require("./schame");

 
 


const app = express();
app.use(express.json()) ;
 
app.get("/", async(req, res) => {
   try {
      const user = await userSchema.find() ;
      res.send(user) ;
   } catch (error) {
    res.send(error) ;
   }
})

app.post("/post" , async (req , res)=>{
       console.log(req.body) ;
      try{
           const user  = new userSchema(req.body) ;
           await user.save() ;
           res.status(200).send({message : "user created succeffuly "}) ;
      }catch(e){
        res.status(400).send({message : "server error "}) ;
    }
})

app.listen(3000, async() => {
   try{
     await connected
     console.log("Connected to DB")
     console.log("Server is running on port 3000")
   }
   catch(err){

    console.log(err)
   }
})