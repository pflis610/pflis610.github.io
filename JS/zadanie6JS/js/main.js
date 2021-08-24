let listaPracownikow = {
    "pracownicy": [
        {"firstName": "Krystian", "lastName": "Dziopa"}, 
        {"firstName": "Anna", "lastName": "Szapiel"},
        {"firstName": "Piotr", "lastName": "Żmuda"}
    ]
}
console.log(listaPracownikow);

listaPracownikow.pracownicy.forEach((element, index) => {
    console.log(JSON.stringify(element));
    console.log('Index: ' + index + ', Imię: ' + element.firstName + ", Nazwisko: " + element.lastName);
});