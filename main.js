var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var checkButton = document.querySelector("#birthday-lucky");



function sumOfDigits(n){

}

function checkBirthdayIsLucky() {
    var dob = dateOfBirth.value;
    dob = dob.replaceAll("-", "");
    console.log(dob)
}

checkButton.addEventListener("click", checkBirthdayIsLucky);