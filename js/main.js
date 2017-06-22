
function toggleClass(elementsOfClass, className){
    for (var i = 0; i < elementsOfClass.length; i++) {
        elementsOfClass[i].classList.toggle(className);
    }
}

function changeTextSize(){
    let classesToChange = ["messageCard"];

    classesToChange.forEach(function(classToChange){
        let elementsOfClass = document.getElementsByClassName(classToChange);
        // console.log(elementsOfClass);
        toggleClass(elementsOfClass, "largeText");
    })
}

function changeTheme(){
    let classesToChange = ["all"];

    classesToChange.forEach(function(classToChange){
        let elementsOfClass = document.getElementsByClassName(classToChange);
        // console.log(elementsOfClass);
        toggleClass(elementsOfClass, "nightMode");
        document.querySelector('body').classList.toggle('nightMode');
    })
}

document.getElementById("userMessageInput").addEventListener("keydown", function(){
    let messageText = document.getElementById("userMessageInput").value;
    let keyResult = event.which;
    if (keyResult === 13) {
        Slackish.createMessage(messageText);
        document.getElementById("userMessageInput").value = "";
    }
});

// console.log(document.getElementById("messageSubmitButton"));

document.getElementById("messageSubmitButton").addEventListener("click", function(){
    let messageText = document.getElementById("userMessageInput").value;
    Slackish.createMessage(messageText);
    document.getElementById("userMessageInput").value = "";
});

document.getElementById("clearButton").addEventListener("click", function(){
    let cardContainer = document.getElementById("message-creator");
    cardContainer.innerHTML = "";
});

document.getElementById("nightModeToggle").addEventListener("click", changeTheme);
document.getElementById("largeTextToggle").addEventListener("click", changeTextSize);