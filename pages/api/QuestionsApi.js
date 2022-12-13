import Questions from '../../models/Questions';
import dbConnect from "../../Util/DBconnect";
import {parseCookies} from 'nookies'

const handler =  async (req, res) => {
    const cookieuser = parseCookies();
    const token =  cookieuser.token ? cookieuser.token : "";
    const {method, query: { id }} = req;

    const newQuestion = req.body;
    dbConnect();

    if(method == "GET"){

        try{
            const quesRes = await Questions.findById({_id: id});
            
            res.status(200).json(quesRes);     

        }catch(err){
            res.status(500).json(err);
        }        
    }

    if(method == "POST"){
        if(!token || token !== process.env.ADMIN_TOKEN){
            return res.status(401).json("Not Authenticated");
        }
        try{
            console.log("hello from question api");
            const quesRes = await Questions.create(newQuestion);
            
            res.status(201).json(quesRes);     

        }catch(err){
            res.status(500).json(err);
        }        
    }
};  

export default handler;