


//first function we need from teh websitre
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


