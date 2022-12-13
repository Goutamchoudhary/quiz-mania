import Quiz from '../../../models/Quiz';
import Questions from '../../../models/Questions';
import dbConnect from "../../../Util/DBconnect";
import {parseCookies} from 'nookies'

const handler =  async (req, res) => {
    const cookieuser = parseCookies();
    const token =  cookieuser.token ? cookieuser.token : "";

    const title = req.body;
    dbConnect();

    if(req.method == "GET"){

        try{
            const quizList = await Quiz.find();
            
            res.status(200).json(quizList);     

        }catch(err){
            res.status(500).json(err);
        }        
    }

    if(req.method == "POST"){
        if(!token || token !== process.env.ADMIN_TOKEN){
            return res.status(401).json("Not Authenticated");
        }
        try{
            const questionsList = await Questions.find().limit(10).sort({$natural:-1});
            const newQuiz = {title, questionsList};
            const quizRes = await Quiz.create(newQuiz);
            
            res.status(200).json(quizRes);     

        }catch(err){
            res.status(500).json(err);
        }        
    }
};  

export default handler;