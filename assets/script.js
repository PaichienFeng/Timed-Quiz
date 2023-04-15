
//start button
//set timer
//first to fifth question
//if correct "correct"; else "wrong" & -20 secs.
//all done, input "enter initials" with a submit button
//high scores "again" or "clear highscores"

const startBUTT = document.createElement("button");
startBUTT.textContent = 'start';
document.body.append(startBUTT);
document.body.setAttribute('style','text-align: center;'); 
const TimerEL = document.createElement("h2");
document.body.append(TimerEL);
let score = 0
let timerInterval;
let input;
let h2;
let pEL1;
let labelEL;
let submit;

startBUTT.addEventListener('click', start);

   for (let i = 0; i < 5; i++) {
    const section = document.createElement("section");
    document.body.append(section);
};

const sections = document.querySelectorAll("section");

let timer = 1;
function Correct() {
    const correctEL = document.createElement("p");
    document.body.append(correctEL);
    correctEL.textContent = "Correct!"

    const timerInterval = setInterval(function(){
        
        timer--;
        
        if (timer === 0) {
             correctEL.style.display = "none";
             clearInterval(timerInterval);
             
        }        
    }, 1000);
    timer = 1;
};

function Wrong() {
    const wrongEL = document.createElement('p');
    document.body.append(wrongEL);
    wrongEL.textContent = "Wrong!"

    const timerInterval = setInterval(function(){
        
        timer--;
        
        if (timer === 0) {
             wrongEL.style.display = "none";
             clearInterval(timerInterval);
        }        
    }, 1000);
    timer = 1;
};

// const section = document.querySelector()

let Timer = 75
TimerEL.textContent = Timer;


function start() {
    timerInterval = setInterval(function() {
        Timer--;
        TimerEL.textContent = Timer;

        if (Timer === 0) {
            clearInterval(timerInterval);
            TimerEL.style.display= "none";
            sections[0].style.display = "none";
            sections[1].style.display = "none";
            sections[2].style.display = "none";
            sections[3].style.display = "none";
            sections[4].style.display = "none";
            Alldone();
    
         };
    }, 1000);

    startBUTT.style.display = 'none';
    Question1();
}




function Question1() {
    const pEL1 = document.createElement("p");
    sections[0].append(pEL1);
    pEL1.textContent = questions[0].Q1;

    for (let i = 0; i < 4; i++) {
        const button = document.createElement("button");
        sections[0].append(button);
        button.textContent = questions[0].Choices[i];

        if (i ===1) {
            button.addEventListener("click", function(){
                score+=20;
                sections[0].style.display = "none";
                Correct();
                Question2();
            });} else {
                button.addEventListener("click", function(){
                    Timer-=20;
                    sections[0].style.display = "none";
                    Wrong();
                    Question2();
                });
               
            }
        }
    };

function Question2() {
    const pEL1 = document.createElement("p");
    sections[1].append(pEL1);
    pEL1.textContent = questions[1].Q2;
    
    for (let i = 0; i < 4; i++) {
        const button = document.createElement("button");
        sections[1].append(button);
        button.textContent = questions[1].Choices[i];
    
        if (i ===2) {
            button.addEventListener("click", function(){
                score+=20;
                sections[1].style.display = "none";
                Correct();
                Question3();
            });} else {
                button.addEventListener("click", function(){
                    Timer-=20;
                    sections[1].style.display = "none";
                    Wrong();
                    Question3();
                });
                   
             }
         }
       };

function Question3() {
    const pEL1 = document.createElement("p");
    sections[2].append(pEL1);
    pEL1.textContent = questions[2].Q3;
        
    for (let i = 0; i < 4; i++) {
        const button = document.createElement("button");
         sections[2].append(button);
        button.textContent = questions[2].Choices[i];
        
        if (i ===3) {
            button.addEventListener("click", function(){
                score+=20;
                sections[2].style.display = "none";
                Correct();
                Question4();
            });} else {
                button.addEventListener("click", function(){
                    Timer-=20;
                     sections[2].style.display = "none";
                    Wrong();
                    Question4();
                });
                       
                    }
                }
            };

function Question4() {
    const pEL1 = document.createElement("p");
    sections[3].append(pEL1);
    pEL1.textContent = questions[3].Q4;
            
    for (let i = 0; i < 4; i++) {
        const button = document.createElement("button");
        sections[3].append(button);
         button.textContent = questions[3].Choices[i];
            
        if (i ===2) {
            button.addEventListener("click", function(){
                score+=20;
                sections[3].style.display = "none";
                Correct();
                Question5();
            });} else {
                button.addEventListener("click", function(){
                    Timer-=20;
                    sections[3].style.display = "none";
                    Wrong();
                     Question5();
                });
                           
            }
         }
     };
    
function Question5() {
    const pEL1 = document.createElement("p");
    sections[4].append(pEL1);
    pEL1.textContent = questions[4].Q5;

    for (let i = 0; i < 4; i++) {
        const button = document.createElement("button");
        sections[4].append(button);
        button.textContent = questions[4].Choices[i];
                
        if (i ===3) {
              button.addEventListener("click", function(){
                 score+=20;
                sections[4].style.display = "none";
                Correct();
                Alldone();                               
            });} else {
                 button.addEventListener("click", function(){
                    Timer-=20;
                    sections[4].style.display = "none";
                    Wrong();
                    Alldone();                                   
                });
                
             }
         };
        
      };

    function Alldone() {
        clearInterval(timerInterval);

        h2 = document.createElement("h2");
        document.body.append(h2);
        h2.textContent = "All Done!"

        pEL1 = document.createElement("p");
        document.body.append(pEL1);
        pEL1.textContent = "Your score is " + score +"."

        labelEL = document.createElement("label");
        document.body.append(labelEL);
        labelEL.textContent = "Enter initials: "

        input = document.createElement("input");
        document.body.append(input);

        submit = document.createElement("button");
        document.body.append(submit);
        submit.textContent = "Submit";
        submit.addEventListener("click", function(){
            Highscore();
        })

        
    };

    function Highscore(){
        h2.style.display = "none";
        pEL1.style.display = "none";
        labelEL.style.display = "none";
        input.style.display = "none";
        submit.style.display = "none";
        TimerEL.style.display = "none";

        const h1 = document.createElement("h2");
        document.body.append(h1);
        h1.textContent = "Highscores";

        const rankingUL = document.createElement("ul");
        document.body.append(rankingUL);
        const rankingLI = document.createElement("li");
        rankingUL.append(rankingLI);
        rankingLI.textContent = input.value + " - " + score;
        localStorage.setItem("ranking", rankingLI.textContent);

        const againEL = document.createElement("button");
        document.body.append(againEL);
        againEL.textContent = "Again";
        againEL.addEventListener("click", function(){
            window.location.reload();
        });

        const clearEL = document.createElement("button");
        document.body.append(clearEL);
        clearEL.textContent = "Clear Highscores";
        clearEL.addEventListener("click", function(){
            rankingLI.style.display = "none";
        })
    }

  

