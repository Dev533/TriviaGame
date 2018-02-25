// Create objects which will make up the component of each question and
// corresponding set of answers, as well as the boolean value of each answer.
var correctAnswers = 0
var incorrectAnswers = 0

var questions = [{
    question: '1. The plot twist in Fight Club is',
    choices: ['a. The soap was actually for dishwashing.',
    'b. The "Ikea" products were actually from Walmart. ',
    'c. Seriously, you think I would ruin the movie for you?',
    'd. Tyler Durden dies from eating Tide Pods.'],
    
    answer: 2
    //The code above is more efficient since the true answer is in position 2 in the choices object.
    //answer:[false, false, true, false]
},
{
    question: '2. In The Matrix, Neo learns this martial art via brain upload.',
    choices: ['a. Karate','b. Tae Kwon Do', 'c. Kung Fu', 'd. Wu Tang'],
    
    answer: 2
    // See above object for similar explanation.
    //answer: [false, false, true, false]
}];


// Variable showQuestion will hold the setInterval when we start the timed trivia game.
var showQuestion;

// Count will keep track of the index of the currently displaying object (question and answers combo).
var count = 0;

// Use jQuery to run "startGame" when we click the "start" button.
  $('#start').on("click", startGame);
// Use jQuery to run "stopGame" when we click the "stop" button.
  
//May not need this in the meantime. Keep handy in case.
//$('#stop').on("click", stopGame);

// This function will replace display whatever question it's given
// in the 'src' attribute of the div tag.



//function displayQuestion() {
    //var questionHTML = "<div>" + questions[count].question + "</div>"
    //for (var i = 0; i < questions[count].choices.length; i++){
    //questionHTML += "<button id='choicesOne' >" + questions[count].choices[i] + "</button>"
    //}
    /*var questionsHTML = "<div>"
    for(var i = 0; i < questions.length; i++){
        questionsHTML += "<div>" + questions[i].question + "</div>"
    }
    questionsHTML += "</div>"*/
   // $('#question').html(questionHTML)
   // $('#choicesOne').on("click", function(){
    //  var answerIndex = questions[count].answer;
      //console.log(questions[count].choices[answerIndex])
      //console.log($(this).text())
      //alert("What does a horeseshoe do? Is anyone even listening to me?")
    //})
   // don't need the line below anymore. Included it a few lines up. 
   // $("#question").html("<div>" + questions[count].question + "</div>");
//}

function nextQuestion() {

  // Increments the count by 1.
  count++;
  var questionHTML = "<div>" + questions[count].question + "</div>"
  for (var i = 0; i < questions[count].choices.length; i++){
    questionHTML += "<button id='choicesOne'>" + questions[count].choices[i] + "</button>"
  }
  $('#question').html(questionHTML)
  //$('#choicesTwo').on("click", function(){
  //  alert("If peeing your pants is cool, then consider me Miles Davis.")
  //})
  // TODO: Show the loading gif in the "image-holder" div.
  //$('#question').html("<div>" + questions[count].question + "</div>");

  // TODO: Use a setTimeout to run displayQuestion after 1 second.
  setTimeout (displayQuestion, 1000)

  // TODO: If the count is the same as the length of the image array, reset the count to 0.
  if (count === questions.length){
    count = 0;
  }
}
function startGame() {

  // When the function startGame begins, the below code hides the start button.
  $('#start').hide()
  // The showQuestion variable is equal to a paragraph with an id of qOne and a value of the question object at
  // a particular count value.
  showQuestion = ("<p id='qOne'>"+questions[count].question+" </p>")
  // The for loop below goes through the array of choices in the choices object within the questions array.
  // Then, the showQuestion variable is equal to the count at 0 and each instance of showQuestion as count is at
  // 1, 2, etc. For each count of showQuestion, a button is created of the targeted questions.choices object.
  for (var i = 0; i < questions[count].choices.length; i++) {
    showQuestion += "<button id='choicesOne' >"+questions[count].choices[i]+"</button>"
  } 
  // Here we target the div with the question id. Then, we add the html (the buttons) as designated in the 
  // showQuestion variable in the for loop above.
  $('#question').html(showQuestion)

  var countDown = 30
  var counter = setInterval(timer, 1000)

  function timer() {
    countDown = countDown-1
    if (countDown<=0){
      clearInterval(counter);
      return
    }
    $('#timer').html(countDown + " secs")
  }
  //The startGame function lasts for 10 seconds. We have yet to designate what happens when the 10 seconds is up.
  setTimeout (startGame, 30000)
  
  // Commenting out below to try a different version above.
  // showQuestion = setInterval (nextQuestion, 5000)
}

function stopGame() {

  // TODO: Put our clearInterval here:
  clearInterval (showQuestion)
  
}

// This will run the display image function as soon as the page loads.
displayQuestion();
