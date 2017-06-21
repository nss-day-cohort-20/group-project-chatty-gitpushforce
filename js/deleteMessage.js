function deleteFromDom () {
let messageContainer = document.getElementById("messageContainer");
let messageCard = document.getElementById("messageCard");
messageContainer.removeChild(event.target.parentNode.parentNode);

console.log(event.target.parentNode)
};

document.getElementById("messageCard").addEventListener("click", deleteFromDom)
document.getElementById("messageCard2").addEventListener("click", deleteFromDom)