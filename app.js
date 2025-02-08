
  var  istatus = document.querySelector("h5");

  var  btn = document.querySelector("#add");
 
  var flage = 0

   btn.addEventListener("click",function(){ 
    if(flage == 0 ){
        
    istatus.innerHTML = " Friends";
    istatus.style.color = "green"
    btn.innerHTML = " Remove Friend"
    flage = 1
    }
    else{

        istatus.innerHTML = " Stranger";
        istatus.style.color = "red"
    btn.innerHTML = " Add Friend"

        flage = 0
    }
  })

 