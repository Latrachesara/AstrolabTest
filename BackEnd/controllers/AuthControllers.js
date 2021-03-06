const user = require ("./../models/User")
const bcrypt = require ("bcrypt")
const jwt = require ("jsonwebtoken")
require ("dotenv").config()
const createAccessToken = (payload) => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "1d",
    });
  };
const AuthControllers = {

    Register : async(req,res)=>{
    const {firstName, lastName, password, email } = req.body 
    try{
    const exist = await user.findOne({email}) 

    if (exist){
        return res.status(400).json({message:"email already exist"})
    }
    if (password.length < 8){
        return res.status(400).json({message:"password less then 8 caracteres"}) 
    }
    const passwordHashed = await bcrypt.hash(password, 12)
    const newUser = await new user ({ firstName, lastName, password:passwordHashed , email})
    newUser.save ().then ((user)=>{
        
        return res.status(200).json({message:"user created successfully", token})
    })
    .catch ((err)=>{
        return res.status(400).json({message:"user doesnt created"})
    })
}
    catch(error){
        return res.status(400).json({message:error.message})
    }
   },

   login : async(req, res) => {
     const {email, password}  = req.body
     try {
         const User =  await user.findOne({email})
         if (!User){
            return res.status(400).json({message:"email doesnt exist"})
         }
         const isMatch = await bcrypt.compare(password, User.password);
         if (isMatch){
            const token = createAccessToken ({id: User._id})
            res.cookie("accessToken", token,{
                httpOnly: true,
                path: "/",
                maxAge: 30 * 24 * 60 * 60 * 1000, //30days
              } )
              return res.status(200).json({token, user:User})
         }else {
             return res.status(400).json({message:"password incorrect"})
         }
     }
catch (error){
    return res.status(400).json({message:error.message})
}
   },

   VerifiLoggedIn: async (req, res) => {
    try {
      const token = req.cookies.accessToken;
      if (!token)
        return res.status(400).json({ message: "There is no token !" });
      jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        async (err, payload) => {
          if (err) {
            return res.status(400).json({ message: err.message });
          } else {
            const id = payload.id;
            const User = await user.findById(id);
            if (User) {
              return res.status(200).json({ User, token });
            } else {
              return res.status(400).json({ message: "There is no token !" });
            }
          }
        }
      );
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  },
  
   logout : async (req, res)=> {
    res.clearCookie("accessToken", { path: "/" });
    res.status(200).json({message:"user logout"})
   }
}
module.exports = AuthControllers