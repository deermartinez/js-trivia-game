


//first function we need from the websitre
(function(){
    function buildQuiz(){
      //The variable and function to store the output
      const output = [];
      //const is similar to let, output
  
      // Regarding each question
      myQuestions.forEach(
          //forEach calls function once for each element in the array inorder
        (currentQuestion, questionNumber) => {
  
          // Variable storing possible/correct answers
          const answers = [];
  
          // For each available answer...
          for(letter in currentQuestion.answers){
  
            // HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // Add this question and its answers to the output
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
          );
        }
      );
  
      // Combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
  }



    //going off of the website, this is the second function needed
    function showResults(){
  
      // Gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // Keep track of user's answers
      let numCorrect = 0;
  
      // For each question
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // Find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // If answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // Add to the number of correct answers
          numCorrect++;
  
          // Colors the answers green
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // If answer is wrong or blank
        else{
          // Color the answers red
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      // Show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
  



  //Displaying the questions
  const myQuestions = [
      {
        question: "Question 1",
        answers: {
          a: "",
          b: "",
          c: ""
        },
        correctAnswer: "Answer"
      },
      {
        question: "Question 2",
        answers: {
          a: "",
          b: "",
          c: ""
        },
        correctAnswer: "Answer"
      },
      {
        question: "Question 3",
        answers: {
          a: " ",
          b: "",
          c: " ",
          d: " "
        },
        correctAnswer: "Answer"
      }
    ];


      //DIsplay the quiz right away or to ""kick them off
  buildQuiz();
  
    // Third thing from the website
   // Event listeners
    submitButton.addEventListener('click', showResults);
  })();



// var sibling = {
//     name: "Ebony",
//     age: 38,
//     children:["Sky", "Kelis", "Brandon"],
//     single: false,
//     email: "email@email.com"
// }

// var sibling = new Object();;
// sibling.name = "Ebony";
// sibling.age = 38;
// sibling.children = ["Sky", "Kelis", "Brandon"]
// sibling.single = false;
// sibling.email = "email@email.com";


// //passing argument/methods into function

// function meetSibling(){
//     console.log("My name is " + sibling.name);
// }

// meetSibling(sibling);


// //acessing objects
// //dot notation
// document.write("My name is " + sibling.name + "I am " + sibling.age + "years old.");
// //bracket notation
// document.write("My name is " + sibling["name"] + "My email is " + sibling["email"]);
// //see all keys/values in an object
// //for in loop
// for (key in sibling){
//      document.write(key)
//     // console.log(key);
// }

// document.write (Object.keys(sibling));


// //a recipe card
// //create an object to hold information on your favorite recipe. It should have 
// //4 propertires including a string, a number, an array of string, and 1 more
// //on seperate lines(one console.log for each statement for each) log the recipe information

// //object literal way
// var recipe = {
//     name: "Food",
//     servings: 4,
//     ingredients: ["Milk", "Butter", "Heat"],
//     calories: "680 calories a serving",
     
// }

// //object construct way
// // var recipe = new Object();
// //     recipe.name = "Food";
// //     recipe.servings = 4;
// //     recipe.ingredient = ["Milk", "Butter", "Heat"];
// //     recipe.calories = "680 calories a serving";
     

// console.log("Our recipe/dish for today is called " + recipe.name);
// console.log("This is a serving of  " + recipe.servings);
// console.log("There are " + recipe.calories);
// console.log("The ingredients are " + recipe.ingredients);



// //keep track of books you have read and what you want to read
// //creat an array of objects, where each object describes a book and has properties for the title(string),
// //author(string), alreadyREad(boolean)
// //iterate through arroy of books, for each book, log the book by title and author like so: The Hobbit by JRR Tolkien
// //now use an if/else statement to change the ouput depending on whether you read it yet or not,

// var books = [
//     {
//         title: "The host",
//         author: "Stephanie Meyer?",
//         alreadyRead: true

//     },

//     {
//         title: "Holes",
//         author: "Yes",
//         alreadyRead: true

//     },

//     {
//         title: "A Promised Land",
//         author: "Obama",
//         alreadyRead: false

//     },
// ];


// for (i=0; i<books.length; i++){
//     var book = books[i];
//     var bookInfo = book.title + " by " + book.author;
//     if (book.alreadyRead){
//         console.log("You read " + bookInfo);
//     }
//     else{
//         console.log("You should read " + bookInfo);
//     }
//  }