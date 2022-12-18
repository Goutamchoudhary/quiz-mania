import Question from '../../models/Question';
import dbConnect from "../../Util/DBconnect";
import {parseCookies} from 'nookies'

const handler =  async (req, res) => {
    const cookieuser = parseCookies();
    const token =  cookieuser.token ? cookieuser.token : "";
    dbConnect();

    if(req.method == "GET"){
        const quizTitle = req.query.quiz;
        const difficulty = req.query.difficulty;

        try{
            const quesRes = await Question.find({$and: [
                                                    {'quizName': quizTitle},
                                                    {'difficulty': difficulty}
                                                ]
                                            })

            const {correctAnswers, ...questionDetails} = quesRes[0]._doc;
            res.status(200).json(questionDetails);     

        }catch(err){
            res.status(500).json(err);
        }        
    }

    if(req.method == "PUT"){
        const quizTitle = req.query.quiz;
        const difficulty = req.query.difficulty;
        const selectedOptions = req.body;

        try{
            const quesRes = await Question.find({$and: [
                                                    {'quizName': quizTitle},
                                                    {'difficulty': difficulty}
                                                ]
                                            })

            const {correctAnswers, ...question} = quesRes[0];
            const isCorrect = JSON.stringify(selectedOptions.sort()) === JSON.stringify(correctAnswers.sort());

            res.status(200).json({isCorrect: isCorrect});     

        }catch(err){
            res.status(500).json(err);
        }        
    }

    if(req.method == "POST"){
        const newQuestion = req.body;

        if(!token || token !== process.env.ADMIN_TOKEN){
            return res.status(401).json("Not Authenticated");
        }
        try{
            console.log("hello from question api");
            const quesRes = await Question.create(newQuestion);
            
            res.status(201).json(quesRes);     

        }catch(err){
            res.status(500).json(err);
        }        
    }
};  

export default handler;