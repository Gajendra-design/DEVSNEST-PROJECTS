const outerdiv=document.querySelector('.container');
const template=`<div class="inner"></div>`;
for(let i=0;i<1360;i++){
    outerdiv.innerHTML+=template;
}
const innerdiv=document.querySelectorAll('.inner');
console.log(innerdiv);
innerdiv.forEach((inner)=>{
inner.addEventListener('click',()=>{
    inner.classList.toggle('click')
})
})