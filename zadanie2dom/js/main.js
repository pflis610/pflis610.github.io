let items = document.getElementById('items');
let addButton = document.querySelector('button');

document.querySelector('button').onclick = function() {
    let liElement = document.createElement('li');
    let textNode = document.createTextNode('Item');
    let attrNode = document.createAttribute('class');
    attrNode.value = 'item';

    items.appendChild(liElement);
    liElement.appendChild(textNode);
    liElement.setAttributeNode(attrNode);

    // let itemsQty = document.getElementById('items').children;
    // items.lastElementChild.insertAdjacentText('beforeend', itemsQty.lastIndexOf + 1);

    // let itemsQty = document.getElementById('items').lastIndexOf;
    // items.lastElementChild.insertAdjacentText('beforeend', itemsQty + 1);  
 
    // let itemArray = [];
    // itemArray.push(document.querySelectorAll('item'));
    // let itemsQty = lastIndexOf(itemArray);
    // items.lastElementChild.insertAdjacentText('beforeend', itemsQty + 1);
}

console.log(items);

