// select all elements
const login = document.getElementById("login");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("opt5");




let qnsIndex = 0;


// create our questions
let questions = [
    {
        question : "Pancard",
        choiceA : "1.Aadhaar copy with date  of birth <br> 2.Two photos ",
        
    },{
        question : "SSC Registration",
        
    },{
        question : "Birth Certificate",
        qnsnum : "QNS 3",
        choiceA : "Cows",
        choiceB : "Cats",
        choiceC : "Puppies",
        choiceD : "Bats",
        correct : 3
    },{
        question : "Driving Licence Duplicating",
        qnsnum : "QNS 4",
        choiceA : "crew",
        choiceB : "army",
        choiceC : "gang",
        choiceD : "regiment",
        correct : 5
    },{
        question : "Income Certificate ",
        qnsnum : "QNS 5",
        choiceA : "swarms",
        choiceB : "cluster",
        choiceC : "herd",
        choiceD : "garland",
        correct : 2
    },
    {
        question : "Shabarimala Booking",
        qnsnum : "QNS 6",
        choiceA : "pide",
        choiceB : "flock",
        choiceC : "team ",
        choiceD : "swarm",
        correct : 5
    },
    {
        question : "Passport",
        qnsnum : "QNS 7",
        choiceA : "babel",
        choiceB : "band",
        choiceC : "cluster",
        choiceD : "atlas",
        correct : 2
    },{
        question : "Employment Registration",
        qnsnum : "QNS 8",
        choiceA : "bank",
        choiceB : "cloud",
        choiceC : "belt",
        choiceD : "round",
        correct : 3
    },{
        question : "Rationcard",
        qnsnum : "QNS 9",
        choiceA : "bed",
        choiceB : "belt",
        choiceC : "bank",
        choiceD : "constallation ",
        correct : 5
    },{
        question : "Wedding Registration",
        qnsnum : "QNS 10",
        choiceA : "flock",
        choiceB : "swarm",
        choiceC : "fleet",
        choiceD : "pack",
        correct : 5

    },{
        question : "Kudikkadam",
        qnsnum : "QNS 11",
        choiceA : "flock",
        choiceB : "swarm",
        choiceC : "crash",
        choiceD : "fleet",
        correct : 3
        
    },{
        question : "PSC Registration",
        qnsnum : "QNS 12",
        choiceA : "bail",
        choiceB : "bale",
        choiceC : "bile",
        choiceD : "bill",
        correct : 4
        
    },{
        question : "Possession Certificate",
        qnsnum : "QNS 13",
        choiceA : "flowers",
        choiceB : "sheep",
        choiceC : "grass",
        choiceD : "ships",
        correct : 2
        
    },{
        question : "A large ______ of policeman could be seen on the site",
        qnsnum : "QNS 14",
        choiceA : "posse",
        choiceB : "crew",
        choiceC : "army",
        choiceD : "mob",
        correct : 5
        
    },{
        question : "Collective noun of peacocks ",
        qnsnum : "QNS 15",
        choiceA : "muster",
        choiceB : "murder",
        choiceC : "quiver",
        choiceD : "school",
        correct : 5
        
    },{
        question : "Collective noun for guns is ",
        qnsnum : "QNS 16",
        choiceA : "covery",
        choiceB : "flight",
        choiceC : "bask",
        choiceD : "battery",
        correct : 2
        
    },{
        question : "Collective noun of crows",
        qnsnum : "QNS 17",
        choiceA : "muster",
        choiceB : "murder",
        choiceC : "crash",
        choiceD : "fleet",
        correct : 4
        
    },{
        question : "Collective noun of beauties",
        qnsnum : "QNS 18",
        choiceA : "bevy",
        choiceB : "crowd",
        choiceC : "chain",
        choiceD : "box",
        correct : 5
        
    },{
        question : "I saw a ______ of sheep in the field",
        qnsnum : "QNS 19",
        choiceA : "group",
        choiceB : "fleet",
        choiceC : "flock",
        choiceD : "swarm",
        correct : 3
        
    },{
        question : "The women was attacked by a ______ of wolves",
        qnsnum : "QNS 20",
        choiceA : "herd",
        choiceB : "gang",
        choiceC : "pack",
        choiceD : "flock",
        correct : 3
        
    }

    
    
];







// start quiz
function startQuiz(){
    login.style.display = "none";
    vold.style.display  = "none";
    quiz.style.display = "block";
    choices.style.display ="block";
}

function renderQuestion(x){
    let q = questions[x];
    
    question.innerHTML = "<p>"+ q.question +"</p>";


    choiceA.innerHTML = q.choiceA;
    

    myFunction();
   
   
}


// checkAnwer






function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }