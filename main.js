var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var checkButton = document.querySelector("#birthday-lucky");
var outputBox = document.querySelector("#output-text")



function checkValues(sum,lucky){
    if(sum%lucky == 0){
        outputBox.innerText="๐๐Congrats! Your Birthday is lucky.๐๐";
    }
    else{
        outputBox.innerText="๐๐Your birthday is not lucky but don't worry you're still special๐๐";
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
    if(lucky&&dob){
        checkValues(sum,lucky);
    }
    else{
        outputBox.innerText ="Please enter values in both of the fields. ๐ก"
    }

    
   
    
    
    
}
checkButton.addEventListener("click", checkBirthdayIsLucky);