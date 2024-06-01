const nameInput = document.getElementById("nameInput");
const numberInput = document.getElementById("numberInput");
const btn = document.getElementById("submitBtn");
const form = document.getElementById("form");
let tbody = document.querySelector("tbody");
let row, cont;
let firstRow = document.getElementById('firstRow')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    cont++;
    if(firstRow){
        firstRow.remove();
    }
    let name = nameInput.value;
    let number = numberInput.value;

    let phoneNumber = `(${number[0]}${number[1]}) ${number[2]}${number[3]}${number[4]}${number[5]}${number[6]}-${number[7]}${number[8]}${number[9]}${number[10]}`;

    row= '<tr>';
    row+=`<td>${name}</td>`;
    row+=`<td>${phoneNumber}</td>`;
    row+= '</tr>';

    tbody.innerHTML += row;
})