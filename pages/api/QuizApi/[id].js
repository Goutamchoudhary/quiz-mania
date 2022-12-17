import Quiz from '../../../models/Quiz';
import dbConnect from "../../../Util/DBconnect";
import {parseCookies} from 'nookies'

const handler =  async (req, res) => {
    const cookieuser = parseCookies();
    const token =  cookieuser.token ? cookieuser.token : "";
    const {method, query: { id }} = req;
    
    dbConnect();

    if(method == "GET"){

        try{
            const quizRes = await Quiz.findById({_id: id});
            
            res.status(200).json(quizRes);     

        }catch(err){
            res.status(500).json(err);
        }        
    }

    // if(method === "PUT"){
    //     if(!token || token !== process.env.TOKEN){
    //         return res.status(401).json("Not Authenticated");
    //     }
    //     try{
    //         const product = await Order.findByIdAndUpdate(id, req.body, {new:true});
    //         res.status(200).json(product);
    //     }catch(err){
    //         res.status(500).json(err);
    //     }
    // }
    // if(method === "DELETE"){
    //     if(!token || token !== process.env.TOKEN){
    //         return res.status(401).json("Not Authenticated");
    //     }
    //     try{
    //         await Product.findByIdAndDelete(id);
    //         res.status(20).json("The product has been deleted!");
    //     }catch(err){
    //         res.status(500).json(err);
    //     }
    // }
};  

export default handler;