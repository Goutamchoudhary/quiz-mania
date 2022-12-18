const mongoose = require('mongoose');

const QuestionsSchema = new mongoose.Schema(
    {
        quizName: {type: String, required:true},
        question:{type:String, required:true},
        answerOptions: {type: [String], required:true},
        correctAnswers: {type: [String], required:true},
        difficulty: {type: Number, required:true},

    }, {timestamps:true  
})


module.exports = mongoose.models.Question || mongoose.model("Question", QuestionsSchema);