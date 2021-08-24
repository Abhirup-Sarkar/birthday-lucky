var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var checkButton = document.querySelector("#birthday-lucky");


function checkBirthdayIsLucky() {
    var dob = dateOfBirth.value;
    dob = dob.replaceAll("-", "");
    var sum = sumOfDigits(dob);
    
    
    
}
function sumOfDigits(dob){
    s = 0;
    while (dob>0){
        
        s = s + dob % 10;
        dob = parseInt(dob / 10);
    }
    console.log(s)
}



checkButton.addEventListener("click", checkBirthdayIsLucky);