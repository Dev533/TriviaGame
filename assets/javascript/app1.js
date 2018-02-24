// Create objects which will make up the component of each question and
// corresponding set of answers, as well as the boolean value of each answer.
var questions = [{
    question: '1. The plot twist in Fight Club is',
    choices: ['a. The soap was actually for dishwashing.',
    'b. The "Ikea" products were actually from Walmart. ',
    'c. Seriously, you think I would ruin the movie for you?',
    'd. Tyler Durden dies from eating Tide Pods.'],
    answer:[false, false, true, false]
},
{
    question: '2. In The Matrix, Neo learns this martial art via brain upload.',
    choices: ['a. Karate','b. Tae Kwon Do', 'c. Kung Fu', 'd. Wu Tang'],
    answer: [false, false, true, false]
}];


// Variable showQuestion will hold the setInterval when we start the timed trivia game.
var showQuestion;

// Count will keep track of the index of the currently displaying object (question and answers combo).
var count = 0;

// Use jQuery to run "startGame" when we click the "start" button.
  $('#start').on("click", startGame);
// Use jQuery to run "stopGame" when we click the "stop" button.
  $('#stop').on("click", stopGame);

// This function will replace display whatever question it's given
// in the 'src' attribute of the div tag.
function displayQuestion() {
    var questionHTML = "<div>" + questions[count].question + "</div>"
    for (var i = 0; i < questions[count].choices.length; i++){
      questionHTML += "<button>" + questions[count].choices[i] + "</button>"
    }
    /*var questionsHTML = "<div>"
    for(var i = 0; i < questions.length; i++){
        questionsHTML += "<div>" + questions[i].question + "</div>"
    }
    questionsHTML += "</div>"*/
    $('#question').html(questionHTML)
   // don't need the line below anymore. Included it a few lines up. 
   // $("#question").html("<div>" + questions[count].question + "</div>");
}

function nextQuestion() {

  // Increments the count by 1.
  count++;
  var questionHTML = "<div>" + questions[count].question + "</div>"
  for (var i = 0; i < questions[count].choices.length; i++){
    questionHTML += "<button>" + questions[count].choices[i] + "</button>"
  }
  $('#question').html(questionHTML)
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

  // TODO: Use showImage to hold the setInterval to run nextImage.
  showQuestion = setInterval (nextQuestion, 5000)
}
function stopGame() {

  // TODO: Put our clearInterval here:
  clearInterval (showQuestion)
  
}

// This will run the display image function as soon as the page loads.
displayQuestion();
