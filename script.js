// select all elements
const login = document.getElementById("login");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("opt5");
const Servicecharge = document.getElementById("fee");



let qnsIndex = 0;


// create our questions
let questions = [
    {
        question : "Aadhar PVC Order",
        choiceA : "1. Aadhaar Number ",
        qnsnum : "QNS 0",
        ServiceCharge:" Service Charge : 80/-"
    },{
        question : "Birth Certificate",
        choiceA : "1. Hospital/Dispensary certificate <br> 2. Address proof of Parents (Voters ID, Driving Licence) <br>3.Aadhaar <br>4. Mobile Number",
        qnsnum : "QNS 1",
        ServiceCharge:" Service Charge : 100/-"
    },{
        question : "Caste Certificate",
        qnsnum : "QNS 2",
        choiceA : "Cows",
     
    },{
        question : "Community Certificate",
        qnsnum : "QNS 3",
        choiceA : "crew",
        ServiceCharge:" Service Charge : 50/-"
       
    },{
        question : "Driving Licence Duplicate ",
        qnsnum : "QNS 4",
        choiceA : "1. Photo <br> 2. Sign <br> 3. Affidavit(Signed by Nottery) <br> 4. Mob No (OTP) <br> 5.DL No & Date of Birth ",
        ServiceCharge:" Service Charge : 00/-"
    },{
        question : "Employment Registration",
        qnsnum : "QNS 5",
        choiceA : "1. SSLC <br> 2. Mod No <br> 3. Email ID ",
        ServiceCharge:" Service Charge : 100/-"
   
    },{
        question : "EshramCard",
        qnsnum : "QNS 6",
        choiceA : "babel",
      
    },{
        question : "Income certificate",
        qnsnum : "QNS 7",
        choiceA : "1. Aadhaar <br> 2. Ration Card <br> 3. Land Tax Recipet <br> 4. Mob No ",
        ServiceCharge:" Service Charge : 50/-"
    },{
        question : "KSEB Newconnection",
        qnsnum : "QNS 8",
        choiceA : "bed",
     
    },{
        question : "Kudikadam",
        qnsnum : "QNS 9",
        choiceA : "flock",
      

    },{
        question : "LandTax",
        qnsnum : "QNS 10",
        choiceA : "flock",
    
        
    },{
        question : "Marriage Registration",
        qnsnum : "QNS 11",
        choiceA : "bail",
        ServiceCharge:" Service Charge : 100/-"
        
    },{
        question : "None creamy layer",
        qnsnum : "QNS 12",
        choiceA : "1. SSLC <br> 2. Parent School Certificate <br> 3. Aadhaar<br> 4. Land Tax Recipet<br> 5.Ration Card ",
        ServiceCharge:" Service Charge : 50/-"
        
    },{
        question : "One and Same Certificate",
        qnsnum : "QNS 13",
        choiceA : "posse",
     
        
    },{
        question : "Passport ",
        qnsnum : "QNS 14",
        choiceA : "muster",
    
        
    },{
        question : "Pancard ",
        qnsnum : "QNS 15",
        choiceA : "covery",
    
        
    },{
        question : "Possession Certificate",
        qnsnum : "QNS 16",
        choiceA : "muster",
    
        
    },{
        question : "Property Tax",
        qnsnum : "QNS 17",
        choiceA : "bevy",
   
        
    },{
        question : "PSC Registration",
        qnsnum : "QNS 18",
        choiceA : "group",
 
        
    },{
        question : "Rationcard PVC",
        qnsnum : "QNS 19",
        choiceA : "herd",
       
        
    },{
        question : "Employment Renewal",
        qnsnum : "QNS 20",
        choiceA : "herd",
       
        
    },{
        question : "SSC Registration",
        qnsnum : "1. Aadhaar Number <br> 2. SSLC <br> 3. Email <br> 4. Mobile Number",
        choiceA : "herd",
      
    },{
        question : "SSC Examination",
        qnsnum : "QNS 22",
        choiceA : "herd",
        
        
    },{
        question : "Pension",
        qnsnum : "QNS 23",
        choiceA : "herd",
        
        
    },{
        question : "Sabarimala Booking",
        qnsnum : "QNS 24",
        choiceA : "1. Photo <br> 2. Aadhaar<br> 3. Mob No (OTP) <br> 5. Email ID ",
        ServiceCharge:" Service Charge : 30/Person",
        
        
    },{
        question : "Special Permit",
        qnsnum : "QNS 25",
        choiceA : "1. Photo of RC <br> 2. Mob No(OTP) <br> 3. Details of Passangers <br> 4. Date & Duration of Journey ",
        ServiceCharge:" Service Charge : 100/-",
        
        
    },{
        question : "Voters ID New",
        qnsnum : "QNS 26",
        choiceA : "1. Photo <br> 2. SSLC/Aadhaar <br> 3. Family Member Voter ID  <br> 4. Mob No (OTP) ",
        ServiceCharge:" Service Charge : 00/-",
        
        
    },{
        question : "RationCard New",
        qnsnum : "QNS 31",
        choiceA : "1. Photo <br> 2. Ownership/Recidential Certificate <br> 3. Aadhaar of all Members <br> 4. Income Certificate ",
        ServiceCharge:" Service Charge : 00/-",
        
        
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
    Servicecharge.innerHTML = q.ServiceCharge;
    

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