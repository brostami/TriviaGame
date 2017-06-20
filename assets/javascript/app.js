var questions = [{
    question: "Who was the team’s coach in the 1999-2000 season?",
    answers: ["Dean Smith", "Bill Guthridge", "Matt Doherty", "Roy Williams"],
    correctAnswer: 1 
}, {
    question: "What is the name of the UNC mascot?",
    answers: ["Tar Heel", "Jordan", "Ramses", "Wallace"],
    correctAnswer: 2
}, {
    question: "How many NCAA national championships has UNC won?",
    answers: [4, 5, 6, 7],
    correctAnswer: 2
}, {
    question: "What NBA team drafted Michael Jordan when he left UNC in 1984?",
    answers: ["Houston Rockets", "Portland Trail Blazers", "Detroit Pistons", "Chicago Bulls"],
    correctAnswer: 3
}, {
    question: "Where did Roy Williams coach before going to UNC?",
    answers: ["Kansas", "Kentucky", "Kent State", "Kansas State"],
    correctAnswer: 0
}];

var intervalId;
var clockRunning;
var timer = {
    time: 15,
    start: function() {
        if (!clockRunning) {
            intervalId = setInterval(timer.count, 1000);
            clockRunning = true;
        }
    },
    stop: function() {
        clearInterval(intervalId);
        clockRunning = false;
    },
    count: function() {
        timer.time--;
        $("#timer").html(timer.time);
    }
};
var userChoice;
var numberRight;
var numberWrong;
var unanswered;
var currentQuestion;
var answerMessage;
var correctResponse;
var answerImage;

$("#start").click(function(){
    $("#start").hide();

    for (var i = 0; i < questions.length; i++) {
        timer.start;
        $("#question").html(questions[i].question);
        for (var j = 0; j < questions[i].answers.length; j++) {
            var option = questions[i].answers[j];
            $('<li><input type="radio" value=' + j + ' name="dynradio" />' + option + '</li>').appendTo$("#answers");
        }
    }

})