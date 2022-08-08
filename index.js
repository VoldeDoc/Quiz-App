//create an array for question number and options answer and answer tracker
let questions = [{
    numb : 1,
    answer: "Manchester City",
    track: [1,2,3,4,5,6,7,8,9,10],
    question : "Which of these is an english club?",
    options : ["Manchester City","Manchester Associate","Loseerpool","Aso Villa",] 
},
{
    numb : 2,
    answer: "2019",
    track: [1,2,3,4,5,6,7,8,9,10],
    question : "When last did Liverpool win their first EPl?",
    options : ["2017","2022","2019","2021",] 
},
{
    numb : 3,
    answer: "Real Madrid",
    track: [1,2,3,4,5,6,7,8,9,10],
    question : "What team has the highest ucl?",
    options : ["Manchester United","Arsenal","Bayern Munich","Real Madrid",] 
},
{
    numb : 4,
    answer: "Steven Gerrad",
    track: [1,2,3,4,5,6,7,8,9,10],
    question : "Who is Aston Villa's Coach?",
    options : ["Gary Neville","Dion Dublin","Steven Gerrad","Frank Lampard",] 
},
{
    numb : 5,
    answer: "English Premier League",
    track: [1,2,3,4,5,6,7,8,9,10],
    question : "what is the full meaning of EPL?",
    options : ["English Premier League","English Premiership ","English Prime League","European Premier League",] 
},
{
    numb : 6,
    answer: "Manchester City",
    track: [1,2,3,4,5,6,7,8,9,10],
    question : "What club is Pep Guardiola currently at?",
    options : ["Manchester City","Manchester Associate","Liverpool","Barcelona",] 
},
{
    numb : 7,
    answer: "Cristiana Ronaldo",
    track: [1,2,3,4,5,6,7,8,9,10],
    question : "Who is the all time goal scorer?",
    options : ["Pele","Cristiana Ronaldo","Lionel Messi","Robert Lewandowski",] 
},
{
    numb : 8,
    answer: "Lionel Messi",
    track: [1,2,3,4,5,6,7,8,9,10],
    question : "Who have the most Ballon D'or ?",
    options : ["Zinedane Zidane","Kylian Mbappe","Cristiana Ronaldo","Lionel Messi",] 
},
{
    numb : 9,
    answer: "Neymar Junior",
    track: [1,2,3,4,5,6,7,8,9,10],
    question : "Who broke the transfer record fee?",
    options : ["Kylian Mbappe","Neymar Junior","Philip countinho","Ousman Dembele",] 
},
{
    numb : 10,
    answer: "Glazer Family",
    track: [1,2,3,4,5,6,7,8,9,10],
    question : "Who is the owner of Manchester United?",
    options : ["Erik Ten Hag","Ralf Ragnick","Glazer Family","Sir Alex Ferguson",] 
}
]


const start_btn = document.querySelector('.start_btn button');
const info_box = document.querySelector('.info_box');
const exit_btn = info_box.querySelector (".exit_btn");
const continue_btn = info_box.querySelector(".continue_btn");
const quiz_box = document.querySelector(".quiz_box");
const next_btn = quiz_box.querySelector('.next_btn');
const option_list = document.querySelector('.option_list')
const quiz_timer = quiz_box.querySelector('.timer .timer_second');
const timer_line = quiz_box.querySelector('header .time_line');
const result_box = document.querySelector('.result_box');
const restart_btn = result_box.querySelector('.restart_btn');
const quit_btn = result_box.querySelector('.quit_btn');



//when the  start button is clicked
start_btn.onclick=()=>{
    info_box.classList.add("activeInfo");
}

//when the exit button is clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");
}

//when the continue button is clicked
continue_btn.onclick =()=>{
    let name = document.forms['myForm']['text'].value;
    if (name == "" || !isNaN(name)) {
        alert('Name must be filled')
    }
    else{
        quiz_box.classList.add("activeQuiz");
        info_box.classList.remove("activeInfo");
        showQuestions(que_count);
        showQuestionCount(que_numb);
        startTimeLine(widthValue);
        startCountdown(timeValue);


    }
   
}

let que_count= 0;
let que_numb = 1;
showQuestions(que_count);
let userScore = 0;
let correctIcon = `<div class="icon tick"><i class="fas fa-check"></i></div>`;
let wrongIcon = ` <div class="icon cross"><i class="fas fa-times"></i></div>`;
let counter;
let timeValue = 15;
let counterLine;
let widthValue = 0;
//show questions and options
function showQuestions(index) {
    const  que_text = document.querySelector(".question_text");
    let que_tag = `<span>${questions[index].numb}   .   ${questions[index].question} </span>`;
    que_text.innerHTML=que_tag;
    
    let option_tag = "<div class='option'><span>" + questions[index].options[0] + "</span></div>"
                    +"<div class='option'><span>" + questions[index].options[1] + "</span></div>"
                     +"<div class='option'><span>" +questions[index].options[2] + "</span></div>"
                     +"<div class='option'><span>" +questions[index].options[3] + "</span></div>" ;
    option_list.innerHTML=option_tag;

              
    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick","optionSelected(this)");   
    }

} 


//when you select an option
function optionSelected(answer) {
    let userAns = answer.textContent;
    let correcAns = questions[que_count].answer;
    let allOptions = option_list.children.length;
    if (userAns == correcAns) {
        userScore += 1;
        console.log(userScore);
        answer.classList.add("correct"); 
        answer.insertAdjacentHTML("beforeend",correctIcon);
        console.log("Answer is correct");
    }
    else{
        answer.classList.add("wrong")
        answer.insertAdjacentHTML("beforeend",wrongIcon);
        console.log("Answer is wrong");
    }
    
//disable the options after selecting
for (let i = 0; i < allOptions; i++) {
    option_list.children[i].classList.add("disabled");
    
}

}

 //show what number you have answered so far
 function showQuestionCount(figure) {
    const question_counter = document.querySelector('.question_counter');
    let question_count =` <span>${figure}</span> of <span>${questions.length}</span>`
question_counter.innerHTML = question_count;
 }
 

 //when the next button is clicked;
next_btn.onclick =()=>{
  if (que_count < questions.length-1) {
    que_count++;
    que_numb++;
    showQuestions(que_count);
    showQuestionCount(que_numb);
    clearInterval(counter);
    startCountdown(timeValue);
    clearInterval(counterLine);
    startTimeLine(widthValue);
   
    
  }
  else{
    console.log('question completed');
    showResult();

  }
}


//start the countdown function
  function startCountdown(time) {
    counter = setInterval( ()=>{
        quiz_timer.textContent = time;
        time--;
        if (time < 9) {
            let addZero = quiz_timer.textContent;
            quiz_timer.textContent = "0" + addZero
        }
        if ( time < 0) {
            clearInterval(counter);
            quiz_timer.textContent = "00"
            if (que_count < questions.length-1) {
                que_count++;
                que_numb++;
                showQuestions(que_count);
                showQuestionCount(que_numb);
                clearInterval(counter);
                startCountdown(timeValue);
                clearInterval(counterLine);
                startTimeLine(widthValue);
               
                
              }
        }
    },1000)
        }

function startTimeLine(time) {
   counterLine = setInterval( ()=>{
    time += 1;
    timer_line.style.width = time + 'px';
    if (time > 600) {
        clearInterval(counterLine)
    }
   },27)
}

//show the result box

function showResult() {
    info_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");
    var high = document.getElementById("text").value;
         if (userScore > 7) {
             let myScore = `<span>${high}, You got  ${userScore} out of   ${questions.length}</span>`;
             document.getElementById("score_text").innerHTML = myScore  ;
    }
         else if(userScore > 4 ) {
            let myScore = `<span>${high}, You got  ${userScore}  out of   ${questions.length}</span>`;
            document.getElementById("score_text").innerHTML = myScore  ;
         }
      
         else{
          let myScore = `<span>${high}, You got  ${userScore}  out of  ${questions.length}</span>`;
             document.getElementById("score_text").innerHTML = myScore  ;
         }
}

//when replay quiz button is clicked
quit_btn.onclick=()=>{
    window.location.reload()
}

//when restart button is clicked
restart_btn.onclick = () =>{
    result_box.classList.remove("activeResult")//remove result box;
    quiz_box.classList.add("activeQuiz")//remove quiz box;
     que_numb = 1;
     counter;
     timeValue = 15; 
     que_count = 0;
     userScore = 0;
    showQuestions(que_count); //calling showQe
    showQuestionCount(que_numb); //passing que_numb valu
    clearInterval(counter); 
    clearInterval(counterLine); 
    startCountdown(timeValue); //calling 
    startTimeLine(widthValue);
 }

 
 