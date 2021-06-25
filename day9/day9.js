var seat=document.querySelectorAll('.seats');
var booked=document.querySelector('#bs').innerHTML;
var remain=document.querySelector('#rs').innerHTML;
var theme=document.querySelector('.theme');
var body=document.querySelector('.body');
seat.forEach((seats,index)=>{
    seats.innerHTML="Available";
    seats.addEventListener('click',()=>{
            if(seats.classList.contains("after")){
                seats.classList.remove("after");
                seats.innerHTML="Available";
                document.querySelector('#bs').innerHTML=--booked;
                document.querySelector('#rs').innerHTML=++remain;
            }
            else{
                seats.classList.add("after");
                document.querySelector('#bs').innerHTML=++booked;
                document.querySelector('#rs').innerHTML=--remain;
                seats.innerHTML="Booked";
            }
    })
})
theme.addEventListener('click',()=>{
    let i=0;
    if(seat[0].classList.contains("seats2")){
        while(i<36){
            seat[i].classList.remove("seats2");
            i++;
        }
        body.classList.remove("body1");  
    }
    else{
        while(i<36){
            seat[i].classList.add("seats2");
            i++;
        }
        body.classList.add("body1");
        
    }
  
})