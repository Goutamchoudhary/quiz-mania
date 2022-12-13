import User from '../../models/User';
import dbConnect from "../../Util/DBconnect";
import CryptoJS from 'crypto-js';

const handler =  async (req, res) => {
    const {username, email, password} = req.body;
    console.log('in auth');
    dbConnect();
    console.log(username, email, password);

    if(req.method == "POST"){
        
        if(!username || !email || !password){
            return res.status(422).json({error:"please pass all the fields"});
        }

        try{
            const user = await User.findOne({email});
            if(user){
                return res.status(422).json({error:"user already exists with that email"});
            }
            const newUser = new User({
                username: username,
                email: email,
                password: CryptoJS.AES.encrypt(
                            password, 
                            process.env.JWT_SECRET).toString()
            });
            const savedRes = await newUser.save();
            res.status(201).json(savedRes);
        }
        catch(err){
            console.log(err);
        }
    }
};  

export default handler;