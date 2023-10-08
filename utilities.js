// This function takes input and convert it into number(data type) 
function getElement(elementId){
    const inputField = document.getElementById(elementId);
    const inputFieldValue = inputField.value;
    const inputFieldValueConversion = parseFloat(inputFieldValue);
    inputField.value = '';
    return inputFieldValueConversion;
}
// This function sets element value
function setElement(elementId , newValue){
    const total = document.getElementById(elementId);
    total.innerText = newValue;
}
// This function checks given input is number or not
function inputValidation(value1, value2){
    if(isNaN(value1) || isNaN(value2)){
        alert('Please enter number');
        return;
    }
}

function addToCalculateEntry(shapeType, area){
    
    const calculateEntry = document.getElementById('calculate');

    const count = calculateEntry.childElementCount;
    
    const p = document.createElement('p');
    p.classList.add('my-4')
    p.innerHTML =`${count + 1}.${shapeType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>`;
    calculateEntry.appendChild(p);
}