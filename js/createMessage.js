// One IIFE should contain a function that accepts an element id and the user message
var Slackish = (function(slackish) {
// Each message should be stored in a private array in this IIFE.
	let storedMessages = [];

slackish.deleteFromDom = function deleteFromDom () {
    document.getElementById("message-creator").removeChild(event.target.parentNode.parentNode);
};

	slackish.createMessage = function(userMessage) {
		storedMessages.push(userMessage);
	//add the user's message -
		let textBox = document.createElement("h3");
		let messageText = document.createTextNode(userMessage);
		textBox.appendChild(messageText);
	//along with the delete button -
    let buttons = document.createElement("span");
    let deleteButton = document.createElement("span");
    let deleteText = document.createTextNode("");
    deleteButton.className=("delete-single-message glyphicon glyphicon-remove");
    // deleteButton.add.classList("glyphicon");
    deleteButton.appendChild(deleteText);
    buttons.appendChild(deleteButton);
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
		document.getElementById("message-creator").appendChild(textCard);
	// and delete a single message.
		let deleteButtonClass = document.getElementsByClassName("delete-single-message")
		for (var i = 0; i < deleteButtonClass.length; i++) {
			deleteButtonClass[i].addEventListener("click", slackish.deleteFromDom);
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