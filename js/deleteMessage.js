
function deleteFromDom () {
    document.getElementById("message-creator").removeChild(event.target.parentNode.parentNode);
    document.getElementsByClass('messageCard').classList.add('animated flipOutX');
};

