const btnRock = document.querySelector('#btnRock');
const btnPaper = document.querySelector('#btnPaper');
const btnScissors = document.querySelector('#btnScissors');

const playButton = document.querySelector('#play');

const imgRock = document.querySelector('#rock');
const imgPaper = document.querySelector('#paper');
const imgScissors = document.querySelector('#scissors');
const imgUt = document.querySelector('#ut');

const imgRockCpu = document.querySelector('#rockCPU');
const imgPaperCpu = document.querySelector('#paperCPU');
const imgScissorsCpu = document.querySelector('#scissorsCPU');
const imgCt = document.querySelector('#ct');
var question = document.getElementById("quest");
var next = document.getElementById("sig");
var back = document.getElementById("ant");
var todas = document.getElementById("primeroAB");
var texto = document.getElementById("pab0");
var ans = document.getElementById("respuesta");
var show =document.getElementById("mostrar");
var ejem = document.getElementById("ejemploimg");



let round = document.querySelector('.round');
let winCounter = document.querySelector('#userWins');
let tiesCounter = document.querySelector('#ties');
let cpuCounter = document.querySelector('#cpuWins');
let textResult = document.querySelector('.textResult');
const emptyText = () => textResult.textContent = '';

const updateRound = () => {
    counter += 1; 
    round.textContent = `Turno ${counter}`
};

var preguntas1ab = [" ¿Cuánto es la mitad de dos, más tres?","¿Escribe el número que completa la serie?  17–34–51–68 - ?","Resuelve: En la panadería de Claudia se han preparado 73 empanadas y desean colocarlas en 4 cajas con el mismo contenido en cada una. ¿Cuántas empanadas deberán colocar en cada caja?","Cubo de Rubik","Calcule el resultado: 8 + 8 * 5","Resuelva el siguiente problema. José sembró 57 rosas y Sonia sembró el triple. ¿Cuántas rosas sembró Sonia?","TORRE DE HANOI"]

var respuesta1ab = ["4","85","18 y sobra 1","","48","171 rosas",""];

num = 0;

function siguiente(){
    question.textContent = ++num;
    if (num > 0 ){
        back.disabled = false;
     }
     if (num >=7){
         question.textContent = 7;
         next.disabled = true;
     }
     ans.textContent = "";
}


function anterior(){
    question.textContent = --num;
    if(num <= 0){
        question.textContent = 0;
        back.disabled = true;
    }  
    if(num <= 6){
        next.disabled = false;
    }
    ans.textContent = "";

}
function partido(){
    if(question.textContent == 0){
        texto.textContent = "Pregunta de calentamiento: "+ preguntas1ab[0];
        ejem.src ="images/ut.png";
        ejem.style.display = "none";
        mostrar.style.display = "block";
        respuesta.style.marginLeft = "225px";
        
    }
    else if (question.textContent == 1){
        texto.textContent = preguntas1ab[1];
        ejem.src ="images/ut.png";
        ejem.style.display = "none";
        mostrar.style.display = "block";
    }
    else if (question.textContent == 2){
        texto.textContent = preguntas1ab[2];
        ejem.src ="images/ut.png";
        ejem.style.display = "none";
        mostrar.style.display = "block";
        
    }
    else if (question.textContent == 3){
        texto.textContent = preguntas1ab[3];
        ejem.src = "images/cubo.jpg";
        ejem.style.display = "block";
        ejem.style.marginLeft = "140px";
        mostrar.style.display = "none";
        
    }
    else if (question.textContent == 4){
        texto.textContent = preguntas1ab[4];
        ejem.src ="images/ut.png";
        ejem.style.display = "none";
        mostrar.style.display = "block";

    }
    else if (question.textContent == 5){
        texto.textContent = preguntas1ab[5];
        ejem.src ="images/ut.png";
        ejem.style.display = "none";
        mostrar.style.display = "block";
    }
    else if (question.textContent == 6){
        texto.textContent = preguntas1ab[6];
        ejem.src ="images/hanoi.jpg";
        ejem.style.display = "block";
        ejem.style.marginLeft = "140px";
        mostrar.style.display = "none";
    }
    else if (question.textContent == 7){
        texto.textContent = "Partido Finalizado";
        ejem.src ="images/hanoi.jpg";
        ejem.style.display = "none";
        ejem.style.marginLeft = "140px";
        mostrar.style.display = "none";
    }
    
}

function answer(){
    if(question.textContent == 0){
        ans.textContent = respuesta1ab[0];    }
        else if(question.textContent == 1){
            ans.textContent = respuesta1ab[1];
        }
        else if(question.textContent == 2){
            ans.textContent = respuesta1ab[2];
        }
        else if(question.textContent == 3){
          ans.textContent = respuesta1ab[3];
      }
      else if(question.textContent == 4){
          ans.textContent = respuesta1ab[4];
      }
      else if(question.textContent == 5){
          ans.textContent = respuesta1ab[5];
      }
      else if(question.textContent == 6){
          ans.textContent = respuesta1ab[6];
      }
}


next.addEventListener("click", siguiente )

back.addEventListener("click", anterior )

next.addEventListener("click", partido )

back.addEventListener("click", partido )

show.addEventListener("click",answer);

partido() 


let cpuWins = 0;
let ties = 0;
let userWins = 0;
let counter = 1;

//Results 

let caseWin = () => {
 userWins += 1;
 winCounter.textContent = userWins; 
 textResult.textContent = 'You won';  
};

let caseTie = () => {
    ties += 1;
    tiesCounter.textContent = ties;
    textResult.textContent = "It's a tie";
};

let caseLose = () => {
    cpuWins += 1;
    cpuCounter.textContent = cpuWins;
    textResult.textContent = 'You lost';
};

//Possible outcomes

let playRound = (userSelection,cpuSelection) => {

    if(userSelection == 'rock' && cpuSelection == 'rock'){
        caseTie();
    } else if(userSelection == 'rock' && cpuSelection == 'paper'){
        caseLose();
    } else if(userSelection == 'rock' && cpuSelection == 'scissors'){
        caseWin();
    } else if(userSelection == 'paper' && cpuSelection == 'rock'){
        caseWin();
    } else if(userSelection == 'paper' && cpuSelection == 'paper'){
        caseTie();
    } else if(userSelection == 'paper' && cpuSelection == 'scissors'){
        caseLose();
    } else if(userSelection == 'scissors' && cpuSelection == 'rock'){
        caseLose();
    } else if(userSelection == 'scissors' && cpuSelection == 'paper'){
        caseWin();
    } else if(userSelection == 'scissors' && cpuSelection == 'scissors'){
        caseTie();
    } else {
        return console.error('Todo se derrumbó xd');
        
    };


};

emptyText();

round.textContent = `Turno ${counter}`;


let playerChoice = "";


//CPU Imgaes toggling

const toggleRockCPU = () => {
    imgRockCpu.style.display = 'block';
    imgPaperCpu.style.display = 'none';
    imgScissorsCpu.style.display = 'none';
    imgCt.style.display = 'none';
};

const togglePaperCPU = () => {
    imgRockCpu.style.display = 'none';
    imgPaperCpu.style.display = 'block';
    imgScissorsCpu.style.display = 'none';
    imgCt.style.display = 'none';
};

const toggleScissorsCPU = () => {
    imgRockCpu.style.display = 'none';
    imgPaperCpu.style.display = 'none';
    imgScissorsCpu.style.display = 'block';
    imgCt.style.display = 'none';
};

const toggleBlanckCPU = () => {
    imgRockCpu.style.display = 'none';
    imgPaperCpu.style.display = 'none';
    imgScissorsCpu.style.display = 'none';
    imgCt.style.display = 'block';
};


const toggleCPUImages = (cpuPlay) => {
    if(cpuPlay == 'rock'){
        toggleRockCPU();
    } else if(cpuPlay == 'paper'){
        togglePaperCPU();
    } else if(cpuPlay == 'scissors'){
        toggleScissorsCPU();
    } else {
        return;
    }
};

//User Images toggling
const toggleRock = () => {
    imgRock.style.display = 'block';
    imgPaper.style.display = 'none';
    imgScissors.style.display = 'none';
    imgUt.style.display = 'none';
};

const togglePaper = () => {
    imgRock.style.display = 'none';
    imgPaper.style.display = 'block';
    imgScissors.style.display = 'none';
    imgUt.style.display = 'none';
};

const toggleScissors = () => {
    imgRock.style.display = 'none';
    imgPaper.style.display = 'none';
    imgScissors.style.display = 'block';
    imgUt.style.display = 'none';
};

const toggleUserImages = (playerChoice) => {
    if(playerChoice == 'rock'){
        toggleRock();
    }  else if(playerChoice == 'paper'){
        togglePaper();
    } else if(playerChoice == 'scissors'){
        toggleScissors();
    } else {return};
};

//Set User Choice
const setChoice = (e) => {
    playerChoice = e.target.getAttribute('data-choice');

    toggleUserImages(playerChoice);  
};

//Button functions

btnRock.addEventListener('click', function(e){
    setChoice(e);
    toggleBlanckCPU();
    emptyText();
});

btnPaper.addEventListener('click', function(e){
    setChoice(e);
    toggleBlanckCPU();
    emptyText();
});

btnScissors.addEventListener('click', function(e){
    setChoice(e);
    toggleBlanckCPU();
    emptyText();
});

playButton.addEventListener('click', cpuChoice = () => {
    if(!playerChoice){
        alert('No seas perr@, escogé algo -_-') 
        return;
    }
    let cpuOptions = ['rock', 'paper', 'scissors'];
    let cpuPlay = cpuOptions[Math.floor(Math.random()*cpuOptions.length)]
    toggleCPUImages(cpuPlay);
    updateRound();
    playRound(playerChoice,cpuPlay);
});










