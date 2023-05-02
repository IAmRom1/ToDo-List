const form = document.querySelector('form');

function storeList(){
    window.localStorage.ToDoList = List.innerHTML;
}
function getToDoList(){
    List.innerHTML = window.localStorage.ToDoList;
}
window.addEventListener('load', ()=>{
    getToDoList();
})
form.addEventListener ('submit', (e)=>{
    e.preventDefault();

    List.innerHTML += `<li>${task.value}</li>`;
    task.value = "";
    storeList();
})
List.addEventListener("click", (e)=>{
    if (e.target.classList.contains('checked')){
        e.target.remove();
    }else{
        e.target.classList.add('checked')
    }
    storeList();
})