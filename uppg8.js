

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument

    const people = [{name: "Benny", age: 25}, {name: "Jonas", age: 32}, {name: "Sandra", age: 46}, {name: "Ida", age: 29}, {name: "Caroline", age: 35}]

    function overThirty(array) {
        for (let item of array) {
            if (item.age > 30) {
                console.log(item.name)
            }
        }
    }

    overThirty(people)

}

module.exports = { uppg8 };