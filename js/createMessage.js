// One IIFE should contain a function that accepts an element id and the user message
var Slackish = function(slackish) {
// Each message should be stored in a private array in this IIFE.
let storedMessages = [];

//delete message from DOM, database, and add fx
slackish.deleteMessage = function() {
	let textToDelete = event.target.parentNode.parentNode.children[0].innerText;
	// remove from database
	for (var i = 0; i < storedMessages.length; i++) {
		if (textToDelete === storedMessages[i]) {
			let indexToRemove = storedMessages.indexOf(storedMessages[i]);
			storedMessages.splice(indexToRemove, 1);
			break;
		}
	}

	//// delete with j'query fx
	$(this).parent().addClass("animated flipOutX").delay(400).slideUp();

	// this is how to remove from DOM without J'query
	 // document.getElementById("message-creator").removeChild(event.target.parentNode.parentNode);

};

slackish.createMessage = function(userMessage) {
	storedMessages.push(userMessage);

	let buttons = document.createElement("span");
	let deleteButton = document.createElement("span");
	deleteButton.className=("delete-single-message glyphicon glyphicon-remove");
	buttons.addEventListener("click",slackish.deleteMessage, false);
	buttons.appendChild(deleteButton);
	//add the user's message -
	let textBox = document.createElement("h3");
	let messageText = document.createTextNode(userMessage);
	textBox.appendChild(messageText);

	//along with the delete button -


	// let edit = document.createElement("span");
	// let editButton = document.createElement("span");
	// editButton.className=("edit-single-message glyphicon glyphicon-pencil");
	// edit.appendChild(editButton);


	//add to the specified parent element -
	let textCard = document.createElement("div");
	textCard.classList.add('messageCard');
	let messageDate = document.createElement("p");
	textCard.appendChild(messageDate);

	cardDate = new Date();
	textCard.dateText = moment(cardDate).format('MMMM Do h:mma');
	let dateText = document.createTextNode(textCard.dateText)
	messageDate.className=("messageDate");
	textCard.appendChild(textBox);
	textCard.appendChild(buttons);
	textCard.appendChild(dateText);
	// textCard.appendChild(edit);
	document.getElementById("message-creator").appendChild(textCard);
};

// This IIFE should also expose a function to read all messages
slackish.messagesGetter = function() {
	storedMessages.forEach(function(item, index) {
		console.log(item);
	})
};

return Slackish;

}(Slackish || {});