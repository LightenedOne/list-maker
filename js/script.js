// Caching frequently used variables

let input = document.querySelector("#list-input");
let button = document.querySelector("#enter-button");
let ul = document.querySelector("#users-list");

let removeButtons = [];
// Setting up event listeners

/*
button.addEventListener("click", addToListAfterClick);
input.addEventListener("keypress", addToListAfterEnter);
*/

button.addEventListener("click", onAddButtonClick);
input.addEventListener("keypress", onEnterPress);

function onEnterPress(event) {
    if(canCreate() && event.keyCode === 13)
        createListItem();
}

function onAddButtonClick() {
    if(canCreate)
        createListItem();
}

function createListItem() {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        let removeButton = document.createElement("button");
        removeButton.classList.add("remove-button");
        removeButton.textContent = "x";
        li.appendChild(removeButton);
        
        input.value = "";
}

function canCreate() {
    if(input.value.length > 0) {
        return true;
    }
}







/*
function getInputLength() {
    return input.value.length;
}

function hasContent() {
    if(input.value.length > 0)
        return true;  
}

function createNewListElement() {
    let li = document.createElement("li");
    let removeButton = document.createElement("button");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    li.appendChild(removeButton);
    removeButton.classList.add("remove-button");
    removeButton.textContent = "Remove";
    li.addEventListener("click", markItemAsDone);
    input.value = "";
}

function addToListAfterClick() {
    if(hasContent()) 
        createNewListElement();
}

function addToListAfterEnter(event) {
    if(hasContent() && event.keyCode === 13)
        createNewListElement();
}

function markItemAsDone() {
    this.classList.add("done");
}
*/

