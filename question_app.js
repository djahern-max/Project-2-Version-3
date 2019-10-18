// var pug = require("pug");

// // Template engine. PUG
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

function populate() {
    if (quiz.isEnded()) {
        // showScores();
    } else {
        // show questions
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

    }
}

var questions = [
    new Question("Which one is not a programming language?", ["Java", "C#", "C++", "C"], "C"),
    new Question("Which one is not a Duuh?", ["1", "2", "3", "4"], "3"),
];

var quiz = new Quiz(questions);

populate();