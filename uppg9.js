

function uppg9 (){
    // skapa en funktion som heter sort och tar in en array av siffror som argument
    // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"

    // anropa funktionen och skicka med en array som argument

    const numbers = [1, 8, 14, 26, 17, 4, 19, 53]

    function sort(array) {
        for (let item of array) {
            if (item % 2 === 0) {
                console.log(item, "jämt")
            } else {
                console.log(item, "udda")
            }
        }
    }

    sort(numbers)
  
}

module.exports = { uppg9 };