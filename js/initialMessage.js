// Taking the old Slackish variable and updating it or createing a new one
var Slackish = (function(oldSlackish){

    // create an empty variable to store the array we will parse later
    let initialMessagesArr = null;

    // create an empty object to assign methods to
    // this is done so all the methods will not just be on Slackish later
    let initialMessage = Object.create(null);

    // iffe because we want the page to get the information on page load
    (function(){

        // creating, listening for, opening and sending ann XHR request
        var messageReader = new XMLHttpRequest();
        messageReader.addEventListener("load", setInitialMessages);
        messageReader.open("GET", "js/initialMessages.json");
        messageReader.send();
    }())

    // update the initialMessagesArr with the contents of the JSON
    function setInitialMessages(){
        initialMessagesArr = JSON.parse(event.target.responseText).messages;
        initialMessagesArr.forEach(function(message){Slackish.createMessage(message.text)});
    }

    // create a method to call the initialMessagesArray
    initialMessage.getInitialMessages = function(){
        return initialMessagesArr
    }

    oldSlackish.initialMessage = initialMessage;

    return oldSlackish

}(Slackish || {} ))


