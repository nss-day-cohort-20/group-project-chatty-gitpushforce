document.getElementById("userMessageInput").addEventListener("keydown", function(){
    let keyResult = event.which;
    let messageText = document.getElementById("userMessageInput").value
    if (keyResult === 13) {Slackish.createMessage(messageText)}
});