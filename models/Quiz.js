import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema(
    {
        title:{type:String, required:true},
        questionsList: {type: [string], required:true}
        
    }, {timestamps:true  
})


module.exports = mongoose.models.Quiz || mongoose.model("Quiz", quizSchema);