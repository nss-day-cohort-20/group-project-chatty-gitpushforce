// One IIFE should contain a function that accepts an element id and the user message
var Slackish = (function(slackish) {
// Each message should be stored in a private array in this IIFE.
	let storedMessages = [];

	slackish.createMessage = function(userMessage) {
		storedMessages.push(userMessage);
	//add the user's message -
		let textBox = document.createElement("h3");
		let messageText = document.createTextNode(userMessage);
		textBox.appendChild(messageText); //textBox = <span>userMessage</span>
	//along with the delete button -
    let buttons = document.createElement("span");
    let deleteButton = document.createElement("span");
    let deleteText = document.createTextNode("");
    deleteButton.className=("delete-single-message glyphicon glyphicon-remove");
    // deleteButton.add.classList("glyphicon");
    deleteButton.appendChild(deleteText);
    buttons.appendChild(deleteButton); //buttons = <span><button>Delete</button></span>
	//add to the specified parent element -
		let textCard = document.createElement("div");
		textCard.classList.add('messageCard');
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
			});
		};
	}

	slackish.messagesGetter = function() {
		console.log(storedMessages);
	}

// This IIFE should also expose a function to read all messages

	return Slackish;

})(Slackish || {});





