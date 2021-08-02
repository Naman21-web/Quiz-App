const quizData = [
    {
        question: "How old are you",
        a:"10",
        b:"17",
        c:"26",
        d:"117",
        correct:"c"
    },{
        question:"Which is best programing Language",
        a:"Java",
        b:"Python",
        c:"C++",
        d:"JavaScript",
        correct: "b"
    },{
        question:"Which is most used programing language in 2020",
        a:"java",
        b:"python",
        c:"javascript",
        d:"C++",
        correct:"d"
    },{
        question:"What does HTML stands for",
        a:"HyperTextMarkupLanguage",
        b:"HaperTextMarkupLanguage",
        c:"HaperTextMarkingLanguage",
        d:"HyperTextMarkingLanguage",
        correct:"a"
    },{
        question:"What year was Javascript formed",
        a:"2002",
        b:"1996",
        c:"2008",
        d:"1995",
        correct: "d"
    }
]

const answerE1s =  document.querySelectorAll('.answer');
const questionE1 = document.getElementById('question');
const quiz = document.getElementById('quiz')
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionE1.innerHTML =  currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}

function getSelected() {
    console.log("hio");

let answer = undefined;

    answerE1s.forEach((answerE1) => {
        if(answerE1.checked){
            answer = answerE1.id;
        }
    })

    return answer;
}

function deselectAnswers() {
    
    answerE1s.forEach((answerE1) =>{
        answerE1.checked = false;
    })
}

submitBtn.addEventListener("click" , ()=>{
    const answer =  getSelected();

    if(answer) {
        if(answer === quizData[currentQuiz].correct){
            score ++;
        }

     
        currentQuiz++;


    // loadQuiz();

    if (currentQuiz < quizData.length){
        loadQuiz();
    }
    else{
        alert("Quiz Finished")
        quiz.innerHTML = `<h2>You answered correctly ${score}/${quizData.length} questions</h2>
        <button onclick = "location.reload()">Reload</button>`
    }

}
   
})