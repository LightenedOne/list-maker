var input = document.querySelector("#list-input");
var button = document.querySelector("#enter-button");
var ul = document.querySelector("#list");

function getInputLength() {
    return input.value.length;
}

function hasContent () {
    if(getInputLength() > 0)
        return true;
}

function createNewListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addToListAfterClick() {
    if(hasContent)
        createNewListElement();
}

function addToListAfterEnter(event) {
    if(hasContent && event.keyCode === 13)
        createNewListElement();
}

button.addEventListener("click", addToListAfterClick);
input.addEventListener("keypress", addToListAfterEnter);

