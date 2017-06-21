// One IIFE should contain a function that accepts an element id and the user message
var Slackish = (function(slackish) {
// Each message should be stored in a private array in this IIFE.
	let storedMessages = [];

	slackish.createMessage = function(userMessage) {
		storedMessages += userMessage;
	//add the user's message -
		let textBox = document.createElement("span");
		let messageText = document.createTextNode(userMessage);
		textBox.appendChild(messageText); //textBox = <span>userMessage</span>
	//along with the delete button -
    let buttons = document.createElement("span");
    let deleteButton = document.createElement("button");
    deleteButton.className=""
    buttons.appendChild(deleteButton); //deleteButton = <span><button></button></span>
	//add to the specified parent element -
		let textCard = document.createElement("div");
		textCard.appendChild(textBox);
		textCard.appendChild(buttons);
		document.getElementById("message-creator").appendChild(textCard);
	}

// This IIFE should also expose a function to read all messages

// and delete a single message.

	return Slackish;

})(Slackish || {});






