var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var checkButton = document.querySelector("#birthday-lucky");
var outputBox = document.querySelector("#output-text")



function checkValues(sum,lucky){
    if(sum%lucky == 0){
        outputBox.innerText="Your Birthday is lucky";
    }
    else{
        outputBox.innerText="Your birthday is not lucky";
    }
}
function sumOfDigits(dob){
    dob = dob.replaceAll("-", "");
    sum = 0;
    while(dob!=0){
        sum = sum + (dob%10);
        dob = parseInt(dob/10)
    }
    return sum
}
function checkBirthdayIsLucky() {
    var dob = dateOfBirth.value;
    var sum = sumOfDigits(dob);
    var lucky = luckyNumber.value;
   
    checkValues(sum,lucky)
    
    
}
checkButton.addEventListener("click", checkBirthdayIsLucky);