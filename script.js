let mainus = document.querySelector(".mainus")
let count = document.querySelector(".count")
let plus = document.querySelector(".plus") 

let number = 1;

mainus.addEventListener("click", function(){
      if(number > 1){
        number--;
         count.innerHTML = number
      }
    
})
plus.addEventListener("click", function(){
     if(number < 10){
        number ++;
        count.innerHTML = number
     }
    
})