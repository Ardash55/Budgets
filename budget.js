let myBudgets = {};
let totalBudget = 0;

let addBudgetButton = document.getElementById('addBudgetButton');
let addBudgetInputs = document.getElementById('addBudgetInputs');
let nameOfAddBudget = document.getElementById('nameOfAddBudget');
let sumOfAddBudget = document.getElementById('sumOfAddBudget');
let finalyAddBudget = document.getElementById('finalyAddBudget');
let totalBudgetDiv = document.getElementById('totalBudgetDiv');

function displayBudgetInputs() {
    if (addBudgetInputs.classList == 'addBudgetInputsOn') {
        addBudgetInputs.classList = 'addBudgetInputsOff';
    } else if (addBudgetInputs.classList == 'addBudgetInputsOff') {
        addBudgetInputs.classList = 'addBudgetInputsOn';
    } else {
        console.log('залупа');
        console.log(addBudgetInputs.style.display);
    }
}

function addBudget() {
    myBudgets[nameOfAddBudget.value] = Number(sumOfAddBudget.value);
    console.log(myBudgets);
    sumOfBudget();
}

addBudgetButton.onclick = displayBudgetInputs;
finalyAddBudget.onclick = addBudget;

function sumOfBudget() {
    totalBudget = 0;
    for(let key in myBudgets) {
        totalBudget = totalBudget + myBudgets[key];
        console.log(totalBudget);
        totalBudgetDiv.innerHTML = `Все счета: ${totalBudget}`;
        console.log('влпавлопива')
    }
}

totalBudgetDiv.innerHTML = `Все счета: ${totalBudget}`;