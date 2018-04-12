
var questions = [{
            ques: "Which of these quarterbacks wore number 13 for the Browns?",
            ans: ["Frank Ryan", "Brian Sipe", "Brandon Weeden", "Brian Hoyer"],
            name: "browns1",
            correct: "Frank Ryan",
            divClass: ".browns1"
        },
        {
            ques: "Who holds the franchise record for total offensive points scored?",
            ans: ["Jim Brown", "Leroy Kelly", "Lou Groza", "Otto Graham"],
            name: "browns2",
            correct: "Lou Groza",
            divClass: ".browns2"
        },
        {
            ques: "Which of these players was NOT the first overall pick in the draft?",
            ans: ["Tim Couch", "Courtney Brown", "Joe Thomas", "Myles Garrett"],
            name: "browns3",
            correct: "Joe Thomas",
            divClass: ".browns3"
        },
        {
            ques: "Who holds the franchise record for receiving touchdowns?",
            ans: ["Dante Lavelli", "Gary Collins", "Paul Warfield", "Ozzie Newsome"],
            name: "browns4",
            correct: "Gary Collins",
            divClass: ".browns4"
        },
        {
            ques: "Who is the most recent quarterback to win his first game playing for the Browns?",
            ans: ["Jeff Garcia", "Johnny Manziel", "Derek Anderson", "Spergeon Wynn"],
            name: "browns5",
            correct: "Jeff Garcia",
            divClass: ".browns5"
        },
        {
            ques: "What year did the Browns play their first season in the AAFC?",
            ans: ["1940", "1944", "1946", "1950"],
            name: "browns6",
            correct: "1946",
            divClass: ".browns6"
        },
        {
            ques: "What year was the Browns most recent championship?",
            ans: ["1958", "1964", "1972", "1984"],
            name: "browns7",
            correct: "1964",
            divClass: ".browns7"
        },
        {
            ques: "Who was the awful first head coach of the new Browns franchise when they came back in 1999?",
            ans: ["Butch Davis", "Hue Jackson", "Chris Palmer", "Mike Pettine"],
            name: "browns8",
            correct: "Chris Palmer",
            divClass: ".browns8"
        },
        {
            ques: "When was the last year the Browns had a winning season?",
            ans: ["2002", "2007", "2010", "2014"],
            name: "browns9",
            correct: "2007",
            divClass: ".browns9"
        },
        {
            ques: "Which of these baseball legends is a browns fan?",
            ans: ["Wade Boggs", "Pete Rose", "Hank Aaron", "Barry Bonds"],
            name: "browns",
            correct: "Hank Aaron",
            divClass: ".browns"
        }
    ]

var labels = ["optone", "opttwo", "optthree", "optfour" ];

var startGame = $("#start-btn").on('click', function() {
    $(this).parent().hide();
    $('.container').show();
    countdown(60);
    questionDisplay();
});


var questionDisplay = function() {
    $(".questions :not('#sub-but')").empty();

    for (var j = 0; j < 10; j++) {
        $('.questions').prepend('<div class="' + questions[j].name + '"></div>');
        $(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
        
        for (var i = 0; i <= 3; i++) {
            $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
        }
        $('.questions').prepend('<hr />');
    }
}



var countdown = function(seconds) {

    var timer = setInterval(function() {
        seconds = seconds - 1;
        $("#time-remain").html(seconds);

        if (seconds <= 0) {
            $('.container').fadeOut(500);
            var correctAnswers = 0;
            var wrongAnswers = 0;
            var unAnswered = 0;

            
            for (var i = 0; i < 10; i++) {

                if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

                    correctAnswers++;
                    console.log("this is correct! number:" + i)
                } else {
                    wrongAnswers++;
                    console.log("this is wrong! number:" + i)
                };
            }
            $('#correctEndGame').append(correctAnswers);
            
            $('#wrongEndGame').append(wrongAnswers);
            $('#endGame').fadeIn(1000).show();


            clearInterval(timer);
            return;
        }
    }, 1000);

    $('#sub-but').on('click', function() {
        clearInterval(timer);
    })
}; 



var gradeQuiz = $('#sub-but').on('click', function() {

    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;

    
    for (var i = 0; i < 10; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

            correctAnswers++;
        } else {
            wrongAnswers++;
        };
    };

 
    countdown();
    
    $('.container').fadeOut(500);
    
    $('#answerScreen').show();
   
    $('#correctScreen').append(correctAnswers);
 
    $('#wrongScreen').append(wrongAnswers);

});