var randomId;

function createTask() {
    let input = document.querySelector('.form-control');
    

    if(input.value === ""){
        alert("You must write something!!!");
    }
    else {
        console.log(input.value);
        function getRandomId(max){
            return Math.floor(Math.random() * max);
        }
    
        randomId = getRandomId(100);
    
        let newElement = document.createElement('li');
        newElement.setAttribute("id", randomId);
        newElement.classList = 'list-group-item d-flex justify-content-between align-items-center'; //ovako se kreira novi bootstrap element
        newElement.innerText = input.value;
    
        let btnClose = document.createElement('button');
        btnClose.setAttribute("onclick", "this.parentNode.parentNode.removeChild(this.parentNode);");
        btnClose.classList = 'btn text-light btn-close';
        
        let newTask = document.querySelector('.list-group'); //u varijablu smo spremili gdje zelimo dodavati novi element
        newElement.innerHTML += btnClose.outerHTML; //oznacili smo da zelimo dodijeliti ovom elementu koji je unutrasnji dodati jos jedan html element koji oznacavamo outerHTML
        newTask.appendChild(newElement); //i ovdje pozivamo varijablu gdje zelimo spremati element i u njoj unutrasnji element koji ce dodati i outer unutar inner
    }
}

document.addEventListener("DOMContentLoaded", function() {

for(let i = 0; i < 10; i++){

    let randomId = 1;
    randomId += i

    console.log(randomId);

    let newElement = document.createElement('li');
    newElement.setAttribute("id", randomId);
    newElement.classList = 'list-group-item d-flex justify-content-between align-items-center'; //ovako se kreira novi bootstrap element
    newElement.innerText = `Task ${randomId}`;

    let btnClose = document.createElement('button');
    btnClose.setAttribute("onclick", "this.parentNode.parentNode.removeChild(this.parentNode);");
    btnClose.classList = 'btn text-light btn-close';
    
    let newTask = document.querySelector('.list-group'); //u varijablu smo spremili gdje zelimo dodavati novi element
    newElement.innerHTML += btnClose.outerHTML; //oznacili smo da zelimo dodijeliti ovom elementu koji je unutrasnji dodati jos jedan html element koji oznacavamo outerHTML
    newTask.appendChild(newElement); //i ovdje pozivamo varijablu gdje zelimo spremati element i u njoj unutrasnji element koji ce dodati i outer unutar inner
    }
});

var taskRemove = document.querySelector('.btn-close')
taskRemove.addEventListener("click", function(){
    let task = document.querySelector(randomId);
    task.remove();
})