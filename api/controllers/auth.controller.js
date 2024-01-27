import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';



export const signup=async(req,res)=>{
   const{username,password,email}=req.body;
  
   //here we are using model to add to database
   const hashedPassword=bcryptjs.hashSync(password,10)
    const newUser=new User({username,email,password:hashedPassword});
    try {
        await newUser.save();
   res.status(201).json("user created succesfully");
    } catch (error) {
        res.status(500).json(error.message)
        
    }

   
};
