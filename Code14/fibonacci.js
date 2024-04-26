function generateFibonacciSeries(limit) {
    var fibonacciSeries = [];
    var a = 0, b = 1;

    for (var i = 0; i < limit; i++) {
        fibonacciSeries.push(a);
        var temp = a + b;
        a = b;
        b = temp;
    }

    return fibonacciSeries;
}

function displayFibonacciSeries() {
    var limit = parseInt(prompt("Enter the number of Fibonacci numbers to generate:"));

    if (isNaN(limit) || limit <= 0) {
        alert("Please enter a valid positive number.");
        return;
    }

    var fibonacciSeries = generateFibonacciSeries(limit);
    var fibonacciSeriesElement = document.getElementById("fibonacciSeries");
    fibonacciSeriesElement.innerHTML = "Fibonacci Series: " + fibonacciSeries.join(", ");
}

displayFibonacciSeries();
