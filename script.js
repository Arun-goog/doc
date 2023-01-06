// select all elements
const login = document.getElementById("login");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("opt5");
const Servicecharge = document.getElementById("fee");



let qnsIndex = 0;

function PasswordCheck(){

    
    var passdata =document.getElementById("pswd").value;
    

    if( passdata ==="1342"){
        
        startQuiz();

    } else{
        alert("Incorrect Code")

        return false ;
       
    }

}

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
        choiceA : "1. Aadhaar<br>2. Mobile Number<br>3. Ration card <br>4. School Certificate of Aplicant<br>5. Scool Certificate of Parents ",
        ServiceCharge:" Service Charge : 50/-"
    },{
        question : "Community Certificate",
        qnsnum : "QNS 3",
        choiceA : "1. Aadhaar<br>2. Mobile Number<br>3. Ration card <br>4. School Certificate of Aplicant<br>5. Scool Certificate of Parents ",
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
        choiceA : "1. Aadhaar Number<br>2. PhoneNumber (Aadhaar Linked)<br>3. BankPass Book<br>4. Father Name<br>5. Caste<br>6. Education<br>7. Job<br>8. Monthly Income<br>9. Work Experience<br>10. Nominee Name And DOB",
        ServiceCharge:" Service Charge : 100/-"
    },{
        question : "Income certificate",
        qnsnum : "QNS 7",
        choiceA : "1. Aadhaar <br> 2. Ration Card <br> 3. Land Tax Recipet <br> 4. Mob No ",
        ServiceCharge:" Service Charge : 50/-"
    },{
        question : "KSEB Newconnection",
        qnsnum : "QNS 8",
        choiceA : "1.Aadhaar copy<br>2. Land Tax<br>3. Mobile Number (OTP)<br>4. Email ID<br>5. Father Name<br>6. Building Details<br>7.Certificate Number from Licenced Elactrician",
        ServiceCharge:" Service Charge : 100/-"
    },{
        question : "Kudikadam",
        qnsnum : "QNS 9",
        choiceA : "1. Aadhaaram <br> 2. Land tax Recipet ",
        ServiceCharge:" Service Charge : 100/-"

    },{
        question : "LandTax",
        qnsnum : "QNS 11",
        choiceA : "1. Previous Land Tax Receipt ",
        ServiceCharge:" Service Charge : 20/- (Min)"
    
        
    },{
        question : "Marriage Registration",
        qnsnum : "QNS 11",
        choiceA : "1. Photo (both) <br> 2. Aadhaar (both) <br> 3. Two Witness Aadhaar  <br> 4. Age Proof of both ( SSLC) <br> 5. Copy of the Certificate from auditorium or marriage place or religious authority concerned or a declaration  about solemnization of marriage ",
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
        choiceA : "1. Aadhaar Number <br>2. Phone Number <br>3. Emergency Contact Number <br>4. SSLC",
        qnsnum : "QNS 14",
        ServiceCharge:" Service Charge : 250/- - 300/-"
    
        
    },{
        question : "Pancard ",
        qnsnum : "QNS 15",
        choiceA : "1. Two Photos <br>2. Sign <br>3. Aadhaar copy (with date of birth)<br>4.Father Name <br>5. PhoneNUmber<br>6. Email ID",
        ServiceCharge:" Service Charge : 250/-"
        
    },{
        question : "Possession Certificate",
        qnsnum : "QNS 16",
        choiceA : "1. Aadhaar <br> 2. Ration Card <br> 3. Land Tax Recipet <br> 4. Aadhaaram ",
        ServiceCharge:" Service Charge : 50/-",
        
    },{
        question : "Building Tax",
        qnsnum : "QNS 17",
        choiceA : "1. Previous Tax Receipt ",
        ServiceCharge:" Service Charge : 20/-(Mini)"
        
    },{
        question : "PSC Registration",
        qnsnum : "QNS 18",
        choiceA : "1. Photo <br> 2. Photo <br> 3. Sign <br> 4. Aadhaar ",
        ServiceCharge:" Service Charge : 100/-",
        
    },{
        question : "Rationcard PVC",
        qnsnum : "QNS 19",
        choiceA : "1. Aadhhar Number<br>2. Ration Card Number<br>3. PhoneNumber (OTP)<br>4. Email ID",
        ServiceCharge:" Service Charge : 100/-",
        
    },{
        question : "Employment Renewal",
        qnsnum : "QNS 20",
        choiceA : "1. Employment Card Number",
        ServiceCharge:" Service Charge : 50/-",
        
    },{
        question : "SSC Registration",
        qnsnum : "QNS 21",
        choiceA : "1. Aadhaar Number <br> 2. SSLC <br> 3. Email <br> 4. Mobile Number",
        ServiceCharge:" Service Charge : 100/-",
      
    },{
        question : "SSC Examination",
        qnsnum : "QNS 22",
        choiceA : "1. Photo<br>2. Sign",
        ServiceCharge:" Service Charge : 70/-",
        
        
    },{
        question : "Pension",
        qnsnum : "QNS 23",
        choiceA : "1. Aadhaar <br> 2. Ration Card <br> 3. Bank Passbook <br> 4. Land Tax Reciept <b> 5. Voter ID <b>Photo <b> 6. Age Proof Document (Driving Licence,School Certificate,Passport) ",
        ServiceCharge:" Service Charge : 100/-",
        
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
        
        
    }
    ,{
        question : "RationCard New",
        qnsnum : "QNS 27",
        choiceA : "1. Photo <br> 2. Ownership/Recidential Certificate <br> 3. Aadhaar of all Members <br> 4. Income Certificate ",
        ServiceCharge:" Service Charge : 00/-",
        
        
    },{
        question : "RationCard New",
        qnsnum : "QNS 28",
        choiceA : "1. Photo <br> 2. Ownership/Recidential Certificate <br> 3. Aadhaar of all Members <br> 4. Income Certificate ",
        ServiceCharge:" Service Charge : 00/-",
        
        
    },{
        question : "RationCard New",
        qnsnum : "QNS 29",
        choiceA : "1. Photo <br> 2. Ownership/Recidential Certificate <br> 3. Aadhaar of all Members <br> 4. Income Certificate ",
        ServiceCharge:" Service Charge : 00/-",
        
        
    },{
        question : "RationCard New",
        qnsnum : "QNS 30",
        choiceA : "1. Photo <br> 2. Ownership/Recidential Certificate <br> 3. Aadhaar of all Members <br> 4. Income Certificate ",
        ServiceCharge:" Service Charge : 00/-",
        
        
    },{
        question : "RationCard New",
        qnsnum : "QNS 31",
        choiceA : "1. Photo <br> 2. Ownership/Recidential Certificate <br> 3. Aadhaar of all Members <br> 4. Income Certificate ",
        ServiceCharge:" Service Charge : 00/-",
        
        
    },{
        question : "Pravasi Mariage Assistance",
        qnsnum : "QNS 32",
        choiceA : "1. Marriage Certificate <br> 2. Ration Card/ SSLC <br> 3. sign <br> 4. Applicant bank passbook ",
        ServiceCharge:" Service Charge : 100/-",
        
        
    },{
        question : "Aims Registration",
        qnsnum : "QNS 33",
        choiceA : "1. Aadhaar <br> 2. Mob No (OTP)  <br> 3. Bank Passbook <br> 4. Land Tax Reciept ",
        ServiceCharge:" Service Charge : 70/-",
        
        
    },{
        question : "Land Verification",
        qnsnum : "QNS 34",
        choiceA : "1. Aadhaar <br> 2. Mob No (OTP)  <br> 3. Bank Passbook <br> 4. Land Tax Reciept ",
        ServiceCharge:" Service Charge : 70/-",
        
        
    },{
        question : "Employment Special Renewal",
        qnsnum : "QNS 35",
        choiceA : "1. Employment Card Number<br>2. PhoneNumber<br>3. Address<br>4. Ward Number",
        ServiceCharge:" Service Charge : 30/-",
        
    },{
        question : "PM Kisan Registration",
        qnsnum : "QNS 35",
        choiceA : "1. Employment Card Number<br>2. PhoneNumber<br>3. Address<br>4. Ward Number",
        ServiceCharge:" Service Charge : 30/-",
        
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
