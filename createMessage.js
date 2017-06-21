// One IIFE should contain a function that accepts an element id and the user message
var slackish = (function(elementId, userMessage) {
// Each message should be stored in a private array in this IIFE.
	let storedMessages = [];

	function createMessage(userMessage) {
		storedMessages += userMessage;
	//add the user's message -
		let textBox = document.createElement("SPAN");
		let messageText = document.createTextNode(userMessage);
		textBox.appendChild(messageText); //textBox = <span>userMessage</span>
	//along with the delete button -
    let deleteButton = document.createElement("SPAN");
    let deleteText = document.createTextNode("Delete");
    deleteButton.appendChild(deleteText); //deleteButton = <span>Delete</span>
	//add to the specified parent element -
		let textCard = document.createElement("DIV");
		let cardContents = document.createElement(textBox + deleteButton);
		textCard.appendChild(cardContents);//textCard = <div><span>userMessage</span><span>Delete</span></div>
		document.getElementById("message-creator").appendChild(textCard);
	}

// This IIFE should also expose a function to read all messages

// and delete a single message.

})(slackish);