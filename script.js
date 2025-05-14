let mainus = document.querySelector(".mainus")
let count = document.querySelector(".count")
let plus = document.querySelector(".plus")
let reguler = document.querySelector(".reguler")
let discount = document.querySelector(".discount")

let regprice = 396
let disprice = 249
let number = 1;

reguler.innerHTML = regprice.toFixed(2)
discount.innerHTML = disprice.toFixed(2)
count.innerHTML = number

plus.addEventListener("click", function () {
    if (number < 10) {
        number++;
        reguler.innerHTML = (regprice * number).toFixed(2)
        discount.innerHTML = (disprice * number).toFixed(2)
        count.innerHTML = number
    } 

})
mainus.addEventListener("click", function () {
    if (number > 1) {
        number--;
        reguler.innerHTML = (reguler.innerHTML - regprice).toFixed(2)
        discount.innerHTML = (discount.innerHTML - disprice).toFixed(2)
        count.innerHTML = number
    }

})