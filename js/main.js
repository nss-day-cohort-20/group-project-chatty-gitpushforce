function clearChatArea(){
    document.getElementById("userMessageInput").value = "";
}

function toggleNightMode(elementsOfClass){
    for (var i = 0; i < elementsOfClass.length; i++) {
        elementsOfClass[i].classList.toggle("nightMode");
    }
}

function changeTheme(){
    let classesToChange = ["messageBox", "messageHeader", "navColor", "body", "submitMessage", ];

    classesToChange.forEach(function(classToChange){
        let elementsOfClass = document.getElementsByClassName(classToChange);
        console.log(elementsOfClass);
        toggleNightMode(elementsOfClass);
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
    clearChatArea();
});

document.getElementById("nightModeToggle").addEventListener("click", changeTheme);
document.getElementById("clearButton").addEventListener("click", clearChatArea;