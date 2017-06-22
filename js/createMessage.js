// One IIFE should contain a function that accepts an element id and the user message
var Slackish = (function(slackish) {
// Each message should be stored in a private array in this IIFE.
	let storedMessages = [];

	slackish.createMessage = function(userMessage) {
		storedMessages.push(userMessage);
	//add the user's message -
		let textBox = document.createElement("span");
		let messageText = document.createTextNode(userMessage);
		textBox.appendChild(messageText);
	//along with the delete button -
    let buttons = document.createElement("span");
    let deleteButton = document.createElement("button");
    let deleteText = document.createTextNode("Delete");
    deleteButton.className = "delete-single-message"
    deleteButton.appendChild(deleteText);
    buttons.appendChild(deleteButton);
	//add to the specified parent element -
		let textCard = document.createElement("div");
		textCard.appendChild(textBox);
		textCard.appendChild(buttons);
		document.getElementById("message-creator").appendChild(textCard);
	// and delete a single message.
		let deleteButtonClass = document.getElementsByClassName("delete-single-message")
		for (var i = 0; i < deleteButtonClass.length; i++) {
			deleteButtonClass[i].addEventListener("click", deleteFromDom);
			deleteButtonClass[i].addEventListener("click", function(){
				let textToDelete = event.target.parentNode.parentNode.children[0].innerText;
				for (var i = 0; i < storedMessages.length; i++) {
					if (textToDelete === storedMessages[i]) {
						let indexToRemove = storedMessages.indexOf(storedMessages[i]);
						storedMessages.splice(indexToRemove, 1);
						break;
					}
				}
			})
		};
	}
// This IIFE should also expose a function to read all messages
	slackish.messagesGetter = function() {
		storedMessages.forEach(function(item, index) {
			console.log(item);
		})
	};

	return Slackish;

})(Slackish || {});