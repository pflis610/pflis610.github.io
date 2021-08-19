let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];

let olElement = document.createElement('ol');

for (const city of cities) {
    let liElement = document.createElement('li');
    let textNode = document.createTextNode(city);
    let attrNode = document.createAttribute('class');
    attrNode.value = 'city';

    olElement.appendChild(liElement);
    liElement.appendChild(textNode);
    liElement.setAttributeNode(attrNode);

    console.log(liElement);
    console.log(olElement);
}

document.body.appendChild(olElement);