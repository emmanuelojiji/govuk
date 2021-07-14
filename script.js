window.onload = () => {

let firstYesButton = document.getElementById("first-yes-button");
let firstNoButton = document.getElementById("first-no-button");
let firstQuestionBox = document.getElementById("question-box-1");

let secondYesButton = document.getElementById("second-yes-button");
let secondNoButton = document.getElementById("second-no-button");
let secondQuestionBox = document.getElementById("question-box-2");

let reasonBox = document.getElementById("reason-box");

let workButton = document.getElementById("work");
let otherButton = document.getElementById("other");

let goButton = document.getElementById("go");
let message = document.getElementById("message");

let link = document.getElementById("");

const keyJobs = ["doctor", "teacher", "nurse", "care worker", "cashier", "bus driver", "cleaner",
    "delivery", "carer", "police officer", "police", "healthcare worker", "health-care worker"];


/*First yes or no question*/
firstYesButton.onclick = () => {
    message.style.display = "block";
    message.innerHTML = "Thank you for helping our key-workers during this difficult period. Please stay safe.";
    firstQuestionBox.style.display = "none";
    secondQuestionBox.style.display = "none";
    reasonBox.style.display = "none";

}

firstNoButton.onclick = () => {

    firstQuestionBox.style.display = "block";
    message.style.display = "none";
    reasonBox.style.display = "none";
    secondQuestionBox.style.display = "none";

};

/*-------------*/

/*Second yes or no question*/

secondYesButton.onclick = () => {
    message.style.display = "block";
    message.innerHTML = "In a bid to suppress the spread of COV-ID 19, we ask that all non-key workers please stay home. Stay Home, Protect the NHS, Save Lives.";
    secondQuestionBox.style.display = "none";
    reasonBox.style.display = "none";

}

secondNoButton.onclick = () => {

    message.style.display = "none";
    reasonBox.style.display = "block";
    secondQuestionBox.style.display = "none";

};


/*-------------*/


/*Work button clicked*/

workButton.onclick = () => {
    secondQuestionBox.style.display = "block";
    message.style.display = "none";
}

otherButton.onclick = () => {

    secondQuestionBox.style.display = "none";
    message.style.display = "block";
    message.innerHTML = "We understand essential activities are vital. Please stay safe while doing so. Remember to keep a 6ft distance from other members of the public.";
}



goButton.onclick = () => {

    let input = document.getElementById("input").value;
    input = input.toLowerCase();
    input = input.trim();

    if (keyJobs.includes(input)) {

        message.style.display = "block";
        message.innerHTML = "Thank you for all your hard work in a bid to keep the UK safe and running smoothly. Please stay safe.";

    }

    else if (input.length == 0) {

        message.style.display = "block";
        message.innerHTML = "Please enter your job role.";
    }

    else {
        message.style.display = "block";
        message.innerHTML = "In a bid to suppress the spread of COV-ID 19, we ask that all non-key workers please stay home. Stay Home, Protect the NHS, Save Lives.";

    }

    clearField = () =>{
        input.value ="hello";
    }

    clearField();

}

}