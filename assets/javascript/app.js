$( document ).ready(function() {
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
    time: 44,
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
        $("#timer").html("Time Remaining: " + timer.time);
        timer.time--;
    }
};

var numberRight = 0;
var numberWrong = 0;
var unanswered = 0;
var currentQuestion;
var answers;
var correctResponse;

$("#startbtn").on("click", function() {
    $("#start").hide();
    startGame();
});

function startGame() {
    $("#timer").html("Time Remaining: 45");
    $("#done").html("<button id='donebtn' style='width:200px; margin-top: 30px;'><b>Done</b></button>")
    for (var i = 0; i < questions.length; i++) {
        timer.start();
        currentQuestion = questions[i].question;
        answers = questions[i].answers;
        correctResponse = questions[i].correctAnswer;
        var newDiv = $("<div>");
        newDiv.append("<p>" + currentQuestion + "</p>");
        for (var j = 0; j < answers.length; j++) {
            
            var option = answers[j];
            var name = "radiobtn" + i;
            newDiv.append($('<li style="list-style: none;"><input type="radio" value=' + j + ' name="radiobtn' + i + '" >' + option + '</li>'));
            $("#question").append(newDiv);
        }
    } 
    setTimeout(endGame, 45000);
    $("#donebtn").on("click", function() {
        endGame();
    });
}

function checkAnswers() {
    for (var i = 0; i < questions.length; i++) {
        var choices = document.getElementsByName('radiobtn'+i);
        for (var j = 0; j < choices.length; j++) {
            var choice = choices[j];
            if (choice.checked && choice.value == questions[i].correctAnswer) {
                numberRight++;
            }
            else if (choice.checked && choice.value != questions[i].correctAnswer) {
                numberWrong++;
            }
        }
    }
    unanswered = 5 - (numberWrong + numberRight);
}

function endGame() {
    timer.stop();
    checkAnswers();
    $("#question").hide();
    $("#timer").hide();
    $("#donebtn").hide();
    var stats = $("<p>Correct Answers: " + numberRight + "</p>" +
        "<p>Incorrect Answers: " + numberWrong + "</p>" +
        "<p>Unanswered: " + unanswered + "</p>");
    $("#message").html("<h2>All Done!</h2>");
    $("#stats").append(stats);
}

});
