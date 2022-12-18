import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema(
    {
        title:{type:String, required:true},
        questionsIDList: {type: [String], required:true}
        
    }, {timestamps:true  
})


module.exports = mongoose.models.Quiz || mongoose.model("Quiz", quizSchema);