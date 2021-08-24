let items = document.getElementById('items');
let addButton = document.querySelector('button');

document.querySelector('button').onclick = function() {
    let liElement = document.createElement('li');
    let counter = document.querySelectorAll('.item').length + 1;
    liElement.setAttribute('class', 'item');

    liElement.innerText = "Item " + counter;
    items.appendChild(liElement);
}


