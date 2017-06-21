function toggleNightMode(){
    let classesToChange = document.getElementsByClassName("messageBox")
    for (var i = 0; i < classesToChange.length; i++) {
        classesToChange[i]
    }
    .classList.toggle("nightMode");
    // messageBox, messageHeader, navColor, body
}

document.getElementById("userMessageInput").addEventListener("keydown", function(){
    let messageText = document.getElementById("userMessageInput").value;
    let keyResult = event.which;
    if (keyResult === 13) {Slackish.createMessage(messageText)}
});

// console.log(document.getElementById("messageSubmitButton"));

document.getElementById("messageSubmitButton").addEventListener("click", function(){
    let messageText = document.getElementById("userMessageInput").value;
    Slackish.createMessage(messageText)
});

document.getElementById("nightModeToggle").addEventListener("click", toggleNightMode);
