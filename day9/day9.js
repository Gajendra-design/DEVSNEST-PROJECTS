var seat=document.querySelectorAll('.seats');
var booked=document.querySelector('#bs').innerHTML;
var remain=document.querySelector('#rs').innerHTML;

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