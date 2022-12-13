const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema(
    {
        title:{type:String, required:true},
        questionsList: {type: Array}
        
    }, {timestamps:true  
})


module.exports = mongoose.models.Quiz || mongoose.model("Quiz", quizSchema);