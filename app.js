function startQuiz() {
    reveal(0);
}
 var points = 0;

const numberOfQuestions = 9;
const correctAnswers = ["1967", "Brown Box", "Jim Ryan", "5", "Phil Spencer", "2020",
        "1994", "Uncharted", "Santa Monica Studio", "Hidetaka Miyazaki"];
        
function keyboardSubmit(event, x){
    var y = event.keyCode || event.which;
    document.getElementById("answer" + x).innerHTML = 13 + y;
    if (y === 13){
       event.preventDefault();
       submit(x);
     }
}    

function submit(x) {
    if(x<numberOfQuestions){
    reveal(x+1);
}

if (document.getElementById("answer" + x).value === correctAnswers[x]){
    document.getElementById("answer" + x).style.backgroundColor = "rgb(87, 221, 87)";
    points++;
}
else {
    document.getElementById("answer" + x).style.backgroundColor = "rgb(240, 73, 73)";
}

if (x == numberOfQuestions){
    document.getElementById("finalResult").innerHTML = "Your Score is: " + points;
    document.getElementById("finalResult").style.display = "block";
}
}
function reveal(x){
    document.getElementById("question" + x).style.display = "block";
    document.getElementById("answer" + x).style.display = "block";
    document.getElementById("next" + x).style.display = "block";
}



   


 