
// fetching values from class and Id
const numbers = [];
const numberForm = document.getElementById('numberForm');
const inputField = document.getElementById('numberInput');
const numberList = document.querySelector('.number-list');
const sumResult = document.querySelector('.sum-result');
const averageResult = document.querySelector('.average-result');
const largestResult = document.querySelector('.largest-result');
const smallestResult = document.querySelector('.smallest-result');


// function for add button

function addNumber() {
    const inputNumber = parseFloat(inputField.value);
    if ( inputField.value === '') {
        // stckbar code
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      
    }
 
    numbers.push(inputNumber);
    displayNum();
    calculate();
    inputField.value = '';
    console.log(inputNumber);
  }
  // function for display number
function displayNum() {
    const Items = document.createElement('li');
    Items.textContent = numbers[numbers.length -1];
    numberList.appendChild(Items);

}

// function for calculate

function calculate() {
    const sum = numbers.reduce((total, num) => total + num, 0);
    const average = sum / numbers.length;
    const largest = Math.max(...numbers);
    const smallest = Math.min(...numbers);

    sumResult.textContent = sum;
    averageResult.textContent = average.toFixed(1);
    largestResult.textContent = largest;
    smallestResult.textContent = smallest;
}

// function for clear

function clearAll() {
    numbers.length = 0;
    numberList.innerHTML = '';
    sumResult.textContent = '0';
    averageResult.textContent = '0';
    largestResult.textContent = '0';
    smallestResult.textContent = '0';

    // stackbar code for message
    var x = document.getElementById("snackbar-one");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

// function for back

function backOne() {
    if (Number.length > 0) {
        numbers.pop();
        const lastItem = numberList.lastChild;
        numberList.removeChild(lastItem);
        calculateResults();
    }
}
