let myBudgets = JSON.parse(localStorage.getItem('myBudgets')) || {};
let totalBudget = 0;

let addBudgetButton = document.getElementById('addBudgetButton');
let addBudgetInputs = document.getElementById('addBudgetInputs');
let nameOfAddBudget = document.getElementById('nameOfAddBudget');
let sumOfAddBudget = document.getElementById('sumOfAddBudget');
let finalyAddBudget = document.getElementById('finalyAddBudget');
let totalBudgetDiv = document.getElementById('totalBudgetDiv');
let everyBudgets = document.getElementById('everyBudgets');
let specificBudget;

// localStorage.setItem('myBudgets', JSON.stringify(null));

// Демонатрация блока добавления счета
function displayBudgetInputs() {
    if (addBudgetInputs.classList == 'addBudgetInputsOn') {
        addBudgetInputs.classList = 'addBudgetInputsOff';
    } else if (addBudgetInputs.classList == 'addBudgetInputsOff') {
        addBudgetInputs.classList = 'addBudgetInputsOn';
    }
}

// Добавление счета
function addBudget() {
    everyBudgets.innerHTML = '';
    myBudgets[nameOfAddBudget.value] = Number(sumOfAddBudget.value);
    localStorage.setItem('myBudgets', JSON.stringify(myBudgets));
    console.log(myBudgets);
    sumOfBudget();
    displayEveryBudget();
}

addBudgetButton.onclick = displayBudgetInputs;
finalyAddBudget.onclick = addBudget;

// Подсчет и вывод общего бюджета
function sumOfBudget() {
    totalBudget = 0;
    for (let key in myBudgets) {
        totalBudget = totalBudget + myBudgets[key];
        console.log(totalBudget);
        totalBudgetDiv.innerHTML = `Все счета: ${totalBudget}`;
    }
}

// Вывод отдельных счетов
function displayEveryBudget() {
    for (let key in myBudgets) {
        specificBudget = document.createElement('div');
        specificBudget.innerHTML = `${key}: ${myBudgets[key]}`;
        everyBudgets.appendChild(specificBudget);
    }
}

displayEveryBudget();

totalBudgetDiv.innerHTML = `Все счета: ${totalBudget}`;