
const questions = [
    {
      question: "What is the largest planet in our solar system?",
      answers: [
        { text: "Saturn", isCorrect: false },
        { text: "Jupiter", isCorrect: true },
        { text: "Neptune", isCorrect: false },
        { text: "Earth", isCorrect: false }
      ]
    },
    {
      question: "Which instrument does a musician use to play jazz music?",
      answers: [
        { text: "Saxophone", isCorrect: true },
        { text: "Trumpet", isCorrect: false },
        { text: "Violin", isCorrect: false },
        { text: "Piano", isCorrect: false }
      ]
    },
    {
      question: "What is the capital of Australia?",
      answers: [
        { text: "Canberra", isCorrect: true },
        { text: "Sydney", isCorrect: false },
        { text: "Melbourne", isCorrect: false },
        { text: "Perth", isCorrect: false }
      ]
    },
    {
      question: "Who is known as the 'Father of Computers'?",
      answers: [
        { text: "Alan Turing", isCorrect: false },
        { text: "Ada Lovelace", isCorrect: false },
        { text: "John von Neumann", isCorrect: false },
        { text: "Charles Babbage", isCorrect: true },
      ]
    },
    {
      question: "Which country is known as the 'Land of the Long White Cloud'?",
      answers: [
        { text: "New Zealand", isCorrect: true },
        { text: "Canada", isCorrect: false },
        { text: "Norway", isCorrect: false },
        { text: "Scotland", isCorrect: false }
      ]
    },
    {
      question: "Who discovered penicillin?",
      answers: [
       
        { text: "Louis Pasteur", isCorrect: false },
        { text: "Alexander Fleming", isCorrect: true },
        { text: "Marie Curie", isCorrect: false },
        { text: "Albert Einstein", isCorrect: false }
      ]
    },
    {
      question: "Which river is the longest in the world?",
      answers: [
       
        { text: "Amazon", isCorrect: false },
        { text: "Yangtze", isCorrect: false },
        { text: "Mississippi", isCorrect: false },
        { text: "Nile", isCorrect: true },

      ]
    },
    {
      question: "Who wrote the novel 'Pride and Prejudice'?",
      answers: [
        
        { text: "Charlotte Bronte", isCorrect: false },
        { text: "Jane Austen", isCorrect: true },
        { text: "Emily Bronte", isCorrect: false },
        { text: "Charles Dickens", isCorrect: false }
      ]
    },
    {
      question: "Which is the smallest planet in our solar system?",
      answers: [
        { text: "Mercury", isCorrect: true },
        { text: "Mars", isCorrect: false },
        { text: "Venus", isCorrect: false },
        { text: "Earth", isCorrect: false }
      ]
    },
    {
      question: "Who painted the 'Starry Night'?",
      answers: [
       
        { text: "Pablo Picasso", isCorrect: false },
        { text: "Vincent van Gogh", isCorrect: true },
        { text: "Leonardo da Vinci", isCorrect: false },
        { text: "Claude Monet", isCorrect: false }
      ]
    },
    {
      question: "What is the chemical symbol for gold?",
      answers: [
        { text: "Au", isCorrect: true },
        { text: "Ag", isCorrect: false },
        { text: "Cu", isCorrect: false },
        { text: "Fe", isCorrect: false }
      ]
    },
    {
      question: "Which is the largest ocean on Earth?",
      answers: [
       
        { text: "Atlantic Ocean", isCorrect: false },
        { text: "Pacific Ocean", isCorrect: true },
        { text: "Indian Ocean", isCorrect: false },
        { text: "Arctic Ocean", isCorrect: false }
      ]
    },
    {
      question: "Who wrote the play 'Macbeth'?",
      answers: [
        { text: "William Shakespeare", isCorrect: true },
        { text: "Christopher Marlowe", isCorrect: false },
        { text: "Ben Jonson", isCorrect: false },
        { text: "John Webster", isCorrect: false }
      ]
    },
    {
      question: "What is the tallest mountain in the world?",
      answers: [
        { text: "Mount Everest", isCorrect: true },
        { text: "K2", isCorrect: false },
        { text: "Kangchenjunga", isCorrect: false },
        { text: "Lhotse", isCorrect: false }
      ]
    }
  ];
  const questionsElement=document.getElementById('question');
const answerButtons=document.getElementById('answerButtons');
const next_btn=document.getElementById('next_btn');
  let currentQuestionIndex=0;
  let score=0;
  
  const startQuiz=()=>{
    currentQuestionIndex=0;
    score=0;
    next_btn.innerHTML="Next"
    
    showQuestions();
   
  }
  const  showQuestions=()=>{
    resetQuestions();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionsElement.innerHTML=questionNo+ "."+currentQuestion.question;
    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button")
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.isCorrect){
            button.dataset.isCorrect=answer.isCorrect;
        }
        button.addEventListener('click',selectAnswers)
        
    })
  }
  const resetQuestions=(e)=>{
    next_btn.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
    
  }
  const selectAnswers=(e)=>{

    const selectBtn=e.target;
    const correct=selectBtn.dataset.isCorrect==="true";
    if(correct){
        selectBtn.classList.add("correct");
        score++;
    }
    else{
        selectBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.isCorrect==="true"){
            button.classList.add("correct")
        }
        button.disabled=true;

    })
    next_btn.style.display="block";
  }
  const showScore=()=>{
    resetQuestions();
    questionsElement.innerHTML=`your scoore is ${score} out of ${questions.length}`
    next_btn.innerHTML="Play Again";
    next_btn.style.display="block";

  }
  const handleNexButton=()=>{
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestions();
    }
    else{
        showScore();
    }
  }

  next_btn.addEventListener('click',()=>{
    if(currentQuestionIndex<questions.length){
        handleNexButton();
    }else{
        startQuiz();
    }
  })
  startQuiz();
  

  