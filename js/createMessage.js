// One IIFE should contain a function that accepts an element id and the user message
var slackish = (function(elementId, userMessage) {
// Each message should be stored in a private array in this IIFE.
	let storedMessages = [];

	function createMessage(userMessage) {
		storedMessages += userMessage;
	//add the user's message -
		let textBox = document.createElement("span");
		let messageText = document.createTextNode(userMessage);
		textBox.appendChild(messageText); //textBox = <span>userMessage</span>
	//along with the delete button -
    let buttons = document.createElement("span");
    deleteButton.className=""
    let deleteButton = document.createElement("button");
    buttons.appendChild(deleteButton); //deleteButton = <span>Delete</span>
	//add to the specified parent element -
		let textCard = document.createElement("DIV");
		textCard.appendChild(textBox);
		textCard.appendChild(buttons);
		document.getElementById("message-creator").appendChild(textCard);
	}

// This IIFE should also expose a function to read all messages

// and delete a single message.

})(slackish);