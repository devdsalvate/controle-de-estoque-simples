let buttonsAddRemove = document.getElementById('buttons-add-remove');
let formAdd = document.getElementById('form-add');
let formRemove = document.getElementById('form-remove');
let caixa = document.getElementById('caixa');

function add() {
    buttonsAddRemove.style.display = 'none';
    formAdd.style.display = 'flex';
    caixa.style.display = 'flex';
}

function remove() {
    buttonsAddRemove.style.display = 'none';
    formRemove.style.display = 'flex';
}