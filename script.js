let startBtn = document.querySelector(".startBtn")
let startSection = document.querySelector(".startSection")
let quizSection = document.querySelector(".quizSection")
let highScores = document.querySelector(".highScores")
let questionEl = document.querySelector(".question")
let questionEl1 = document.querySelector(".ansBtn1")
let questionEl2 = document.querySelector(".ansBtn2")
let questionEl3 = document.querySelector(".ansBtn3")
let questionEl4 = document.querySelector(".ansBtn4")

let index = 0

let questions = [
    {
        question: "question 1",
        answer1: "question 1, answer 1",
        answer2: "question 1, answer 2",
        answer3: "question 1, answer 3",
        answer4: "question 1, answer 4"
    },
    {
        question: "question 2",
        answer1: "question 2, answer 1",
        answer2: "question 2, answer 2",
        answer3: "question 2, answer 3",
        answer4: "question 2, answer 4"
    },
    {
        question: "question 3",
        answer1: "question 3, answer 1",
        answer2: "question 3, answer 2",
        answer3: "question 3, answer 3",
        answer4: "question 3, answer 4"
    },
]
startBtn.addEventListener("click", function () {
    quizSection.style = "display: block"
    startSection.style = "display: none"
    questionEl.textContent = questions[index].question
    questionEl1.textContent = questions[index].answer1
    questionEl2.textContent = questions[index].answer2
    questionEl3.textContent = questions[index].answer3
    questionEl4.textContent = questions[index].answer4

    index++

    questionEl1.addEventListener("click", answerBtn)
    questionEl2.addEventListener("click", answerBtn)
    questionEl3.addEventListener("click", answerBtn)
    questionEl4.addEventListener("click", answerBtn)
})

function answerBtn() {
    if(questions.length <= index){
        quizSection.style="display: none"
        highScores.style="display: block"
        let initials = prompt("what is your initials")
        let highScore = initials+": "+ Math.floor(Math.random()*60)
        document.querySelector(".scoresList").textContent=highScore
        document.querySelector(".restart").addEventListener("click", function(){
            highScores.style="display: none"
            document.location.reload()
        })
    } else{
    questionEl1.textContent = questions[index].answer1
    questionEl2.textContent = questions[index].answer2
    questionEl3.textContent = questions[index].answer3
    questionEl4.textContent = questions[index].answer4
    index++
    }
}
