

function uppg7() {
   
    // skapa en funktion som tar in två tal som argument
    // funktionen ska returnera summan av talen
    // kalla på funktionen i en return statement och ge den parametrarna 5 och 10

    function addNumbers(number1, number2) {
        let sum = number1 + number2
        return sum
    }

    return addNumbers(5, 10)
 
}

module.exports = { uppg7 };