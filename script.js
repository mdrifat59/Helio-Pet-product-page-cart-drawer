let mainus = document.querySelector(".mainus")
let count = document.querySelector("#count")
let counts = document.querySelector("#counts")
let plus = document.querySelector(".plus")
let reguler = document.querySelector("#reguler")
let discount = document.querySelector("#discount")
let btn = document.querySelector("#add_btn")  
let drawer = document.querySelector("#cartDrawer");
let closeDrawer = document.querySelector("#closeDrawer");

let regprice = 396
let disprice = 249
let number = 1;
let storage = localStorage.getItem("count")
 counts.innerHTML = storage


if (localStorage.getItem("count") && localStorage.getItem("reguler") && localStorage.getItem("discount")) {
    number = parseInt(localStorage.getItem("count")) || "1";
    reguler.innerHTML = localStorage.getItem("reguler") || (regprice).toFixed(2);
    discount.innerHTML = localStorage.getItem("discount") || (disprice).toFixed(2);
    count.innerHTML = number;
} else {
    updateStorage(); 
}

function updateStorage(){ 
    reguler.innerHTML = (regprice * number).toFixed(2);
    discount.innerHTML = (disprice * number).toFixed(2);
    count.innerHTML = number;

    localStorage.setItem("count", number);
    localStorage.setItem("reguler", (regprice * number).toFixed(2));
    localStorage.setItem("discount", (disprice * number).toFixed(2));
} 

// // Save updated values to localStorage
// function updateStorage() {
//   localStorage.setItem("count", number);
//   localStorage.setItem("reguler", (regprice * number).toFixed(2));
//   localStorage.setItem("discount", (disprice * number).toFixed(2));
// }

// // Apply values to all matching class elements
// function updateUI() {
//   const countValue = localStorage.getItem("count") || "1";
//   const regulerValue = localStorage.getItem("reguler") || (regprice).toFixed(2);
//   const discountValue = localStorage.getItem("discount") || (disprice).toFixed(2);

//   document.querySelectorAll(".count").forEach(el => el.innerText = countValue);
//   document.querySelectorAll(".reguler").forEach(el => el.innerText = regulerValue);
//   document.querySelectorAll(".discount").forEach(el => el.innerText = discountValue);
// }

plus.addEventListener("click", function () {
    if (number < 10) {
        number++; 
        updateStorage()
        // updateUI()
    } 

})
mainus.addEventListener("click", function () {
    if (number > 1) {
        number--; 
        updateStorage()
        // updateUI()
    }

})  

// Your existing button
btn.addEventListener("click", function(){
    drawer.classList.add("open");
});

// Close button logic
closeDrawer.addEventListener("click", function(){
    drawer.classList.remove("open");
});
