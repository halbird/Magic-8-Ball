$(document).ready(function(){
var magic8Ball = {};
magic8Ball.listOfAnswers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As 	I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];
  
$("#answer").hide();  
  
magic8Ball.askQuestion = function(question) 
{
  $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
  
  $("#answer").fadeIn(4000);
  // create random number
  var randomNum = Math.random();
  
  // random number within array
  var randomArrayNum = randomNum * this.listOfAnswers.length;
  
  // round random number down to whole number
  var randomAnswer = Math.floor(randomArrayNum);
  
  // return a random answer
  var answer = this.listOfAnswers[randomAnswer];
  
  $("#answer").text(answer);
  
  // write the question and answer
  console.log(question);
  console.log(answer);
};

var clickButton = function()
 {
   $("#answer").hide();
   $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
   setTimeout(
    function() {
        var question = prompt("Ask a yes/no question");
        magic8Ball.askQuestion(question);
        $("#8ball").effect("shake");
    }, 500);
 };
  
// run clickButton when click object with ID questionButton
$("#questionButton").click(clickButton);

});
