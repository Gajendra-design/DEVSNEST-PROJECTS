let totalseats=document.querySelectorAll('.seat');
let bookedseats=document.querySelector('#bs').innerHTML;
let remainingseats=document.querySelector('#rs').innerHTML;
let toggle=document.querySelector('.theme');
let body=document.querySelector('.body');
let check=true;
totalseats.forEach((seat,index)=>{
    seat.innerHTML="Available";
    seat.addEventListener('click',()=>{
        if(seat.classList.contains("afterclicked1")||seat.classList.contains("afterclicked2")){
            if(check){
                seat.classList.toggle("afterclicked1");
            }
            else{
                seat.classList.toggle("afterclicked2");
            }
               
                seat.innerHTML="Available";
                document.querySelector('#bs').innerHTML=--bookedseats;
                document.querySelector('#rs').innerHTML=++remainingseats;
            }
            else{
                if(check){
                    seat.classList.toggle("afterclicked1");
                }
                else{
                    seat.classList.toggle("afterclicked2");
                }
                document.querySelector('#bs').innerHTML=++bookedseats;
                document.querySelector('#rs').innerHTML=--remainingseats;
                seat.innerHTML="Booked";
            }
    })
})
toggle.addEventListener('click',()=>{
    check=!check;
    for(let i=0;i<36;i++){
        totalseats[i].classList.toggle("seat");
        totalseats[i].classList.toggle("seataftertoggle");
        if(totalseats[i].classList.contains("afterclicked1")||totalseats[i].classList.contains("afterclicked2")){
            totalseats[i].classList.toggle("afterclicked1");
            totalseats[i].classList.toggle("afterclicked2");
        }
    }
    body.classList.toggle("body");
    body.classList.toggle("bodyaftertoggle");

    
})
