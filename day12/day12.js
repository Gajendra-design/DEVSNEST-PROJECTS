const addform=document.querySelector('.add-form');
const ul=document.querySelector('.todolist');
const li=document.querySelector('.todo');
addform.addEventListener('submit',e=>{
    e.preventDefault();
    if(addform.add.value.trim()){
        const todotemplete=` <li class="todo">
        <span class="content">${addform.add.value}</span>
        <i class="far fa-trash-alt icon"></i>
        </li>`;
        ul.innerHTML+=todotemplete;
        addform.reset();
    }
  
})
ul.addEventListener('click',e=>{
   if(e.target.localName==="i"){
       e.target.parentElement.remove();
   }
})