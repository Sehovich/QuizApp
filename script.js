const quizData = [
    {
        question: 'How old is Armin?',
        a: '18',
        b: '20',
        c: '22',
        d: '23',
        correct: 'c'

    }, {
        question: 'Armin is programming in?',
        a: 'JavaScript',
        b: 'HTML',
        c: 'CSS',
        d: 'Python',
        correct: 'a'

    },{
        question: 'Where is Armin studying?',
        a: 'ETF',
        b: 'IBU',
        c: 'IUS',
        d: 'Ceps',
        correct: 'c',
    },{
        question:'What is the capital city of BIH?',
        a:'Mostar',
        b:'Tuzla',
        c:'Bihac',
        d:'Sarajevo',
        correct:'d'
    },{
        question:'Where does Armin live?',
        a:'Belgrade',
        b:'Sarajevo',
        c:'Fojnica',
        d:'Kiseljak',
        correct: 'c'

    }
      
];
const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {

    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
   
 
}

function getSelected (){
    


 let answer = undefined;

answerEls.forEach((answerEl) => {
    if(answerEl.checked){
        answer = answerEl.id;

    }
});

    return answer;
    
}

function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });

}

submitBtn.addEventListener("click", () =>  {

const answer = getSelected();


if(answer) { 
    if(answer === quizData[currentQuiz].correct){
         score++;
    }
    
    currentQuiz++;
    if(currentQuiz < quizData.length){
    loadQuiz();
}else{
    quiz.innerHTML = `<h2>You answered correctly ${score}/${quizData.length} questions.</h2>
    <button onclick="location.reload()">Reload</button`;
}}


    
});

