import dbConnect from "../../Util/DBconnect";
import User from '../../models/User';
import CryptoJS from 'crypto-js';
import jwt from 'jsonwebtoken';

const handler =  async (req, res) => {
    
    dbConnect();

    if(req.method == "POST"){
        const {userEmail, password} = req.body;
        
        if(!userEmail || !password){
            return res.status(422).json({error:"please pass all the fields"});
        }
        
        try{
            const user = await User.findOne({email:userEmail});
            !user && res.status(401).json("User does not exist!");
            
            const bytes = CryptoJS.AES.decrypt(user.password, process.env.JWT_SECRET);
            
            const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
            
            // if(originalPassword !== password){
            //     res.status(401).json("Wrong password or username");
            // }
            
            const accessToken = jwt.sign(                       // Using this the user is more
                {id: user._id, isAdmin: user.isAdmin},          // secure now.
                process.env.JWT_SECRET, {expiresIn: "7d"});
            
            //console.log(accessToken);
            const {password, ...info} = user._doc;          // rest operator

            res.status(200).json({...info, accessToken});     // spread operator

        }catch(err){
            res.status(500).json(err);
        }        
    }
};  

export default handler;