function getRandomId(max){
    return Math.floor(Math.random() * max);
}

var randomId = getRandomId(100);

function createTask() {
    let input = document.querySelector('.form-control');
    console.log(input.value);
    
    let newElement = document.createElement('li');
    newElement.setAttribute("id", randomId);
    newElement.classList = 'list-group-item d-flex justify-content-between align-items-center'; //ovako se kreira novi bootstrap element
    newElement.innerText = input.value;

    let btnClose = document.createElement('button');
    btnClose.setAttribute("onclick", "deleteTask()");
    btnClose.classList = 'btn text-light btn-close';
    
    let newTask = document.querySelector('.list-group'); //u varijablu smo spremili gdje zelimo dodavati novi element
    newElement.innerHTML += btnClose.outerHTML; //oznacili smo da zelimo dodijeliti ovom elementu koji je unutrasnji dodati jos jedan html element koji oznacavamo outerHTML
    newTask.appendChild(newElement); //i ovdje pozivamo varijablu gdje zelimo spremati element i u njoj unutrasnji element koji ce dodati i outer unutar inner
}

document.addEventListener("DOMContentLoaded", function() {

for(let i = 0; i < 3;i++){

    let newElement = document.createElement('li');
    newElement.setAttribute("id", randomId);
    newElement.classList = 'list-group-item d-flex justify-content-between align-items-center'; //ovako se kreira novi bootstrap element
    newElement.innerText = "input.value";

    let btnClose = document.createElement('button');
    btnClose.setAttribute("onclick", "deleteTask()");
    btnClose.classList = 'btn text-light btn-close';
    
    let newTask = document.querySelector('.list-group'); //u varijablu smo spremili gdje zelimo dodavati novi element
    newElement.innerHTML += btnClose.outerHTML; //oznacili smo da zelimo dodijeliti ovom elementu koji je unutrasnji dodati jos jedan html element koji oznacavamo outerHTML
    newTask.appendChild(newElement); //i ovdje pozivamo varijablu gdje zelimo spremati element i u njoj unutrasnji element koji ce dodati i outer unutar inner
    }
    var element = document.querySelectorAll('.btn-close');

    for(var i = 0; i < element.length; i++){
        element[i].addEventListener("click", function(){
            let fixedTask = document.querySelector('.list-group-item');
            fixedTask.remove();
        })
    }
});

function deleteTask() {
    let task = document.getElementById(randomId);
    task.remove();
}