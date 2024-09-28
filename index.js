let getH1 = document.querySelector('#text');
let p = document.querySelector('section');
let counterId = 0;


function addArray(){

    if(getH1.value.length === 0){
        alert();
    }else{
        counterId++;
        localStorage.setItem(counterId, getH1.value);
    getH1.value = "";   
    showKeys();
    getH1.focus();
}
}

function removeAllTasks(){


    localStorage.clear();
    //counterId = 0;
    p.innerHTML = "";
}
function showKeys(){

    p.innerHTML = "";
    for(let i = 0; i < localStorage.length; i++){

        const keys = localStorage.key(i);
        const values = localStorage.getItem(keys);

        const createP = document.createElement('p');
        createP.textContent = `${values}`;
        getH1.focus();

        let btnRemove = document.createElement('button');
        btnRemove.innerHTML = "X";
        btnRemove.id = "btnRemove";
        btnRemove.onclick = () => {

            createP.remove();
            btnRemove.remove(localStorage.removeItem(keys));
            counterId--;
            console.log(counterId);
        };

        p.appendChild(createP);
        createP.appendChild(btnRemove);
    }
    console.log(counterId);
}
showKeys();
