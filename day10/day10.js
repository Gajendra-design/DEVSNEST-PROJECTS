let inner=document.querySelectorAll(".inner");
let moves=document.querySelectorAll("span")
let i=1;
let count=0;
let cardset={first: 1,second: 1};
inner.forEach((card,index)=> {
    card.addEventListener('click',()=>{
        count++;
        if(count!=3){
            card.classList.toggle("rotate-front");
            moves[1].innerHTML=i++;
        }
          console.log(count);  
          if(count==1){
            cardset.first=index;
          }
          if(count==2){
              cardset.second=index;
          } 
          if(count==3){
          document.querySelectorAll(".inner")[cardset.first].classList.remove("rotate-front");
          document.querySelectorAll(".inner")[cardset.second].classList.remove("rotate-front");
          count=0;
          console.log(document.querySelectorAll(".inner")[index])
          if((document.querySelectorAll(".inner")[cardset.first].children[1].children[0].outerHTML===document.querySelectorAll(".inner")[cardset.second].children[1].children[0].outerHTML)){
            document.querySelectorAll(".inner")[cardset.first].classList.add("match-card")
            document.querySelectorAll(".inner")[cardset.second].classList.add("match-card")
        }
         
        }
       
        
    })
}) 

let timeleft=moves[0].innerHTML;
setInterval(()=>{
    if(timeleft<=0){
        alert("game over")
        timeleft=102;
        console.log(timeleft);
        location.reload();
    }
    moves[0].innerHTML=timeleft-1;
    timeleft--;
    console.log(timeleft);
},1000)


