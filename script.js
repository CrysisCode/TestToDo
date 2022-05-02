function createTask() {
    let input = document.querySelector('.form-control');
    console.log(input.value);
    
    let newElement = document.createElement('li');
    let btnClose = document.createElement('button');
    newElement.classList = 'list-group-item d-flex justify-content-between align-items-center'; //ovako se kreira novi bootstrap element
    newElement.innerText = input.value;
    btnClose.classList = 'btn text-light btn-close';
    
    let newTask = document.querySelector('.list-group'); //u varijablu smo spremili gdje zelimo dodavati novi element
    newElement.innerHTML += btnClose.outerHTML; //oznacili smo da zelimo dodijeliti ovom elementu koji je unutrasnji dodati jos jedan html element koji oznacavamo outerHTML
    newTask.appendChild(newElement); //i ovdje pozivamo varijablu gdje zelimo spremati element i u njoj unutrasnji element koji ce dodati i outer unutar inner
}


document.addEventListener("DOMContentLoaded", function() {
    console.log("open");
    var element = document.querySelectorAll('.btn-close');
    for(var i = 0; i < element.length; i++){
        element[i].addEventListener("click", function(){
            var task = document.querySelector('.list-group-item');
            task.remove();
        })
    }
});
