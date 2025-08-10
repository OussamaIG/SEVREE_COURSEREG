const btn = document.querySelector(".readall")
const hiddenclasses = document.getElementsByClassName("hidden")

console.log(hiddenclasses)


btn.addEventListener("click", ()=>{
    Array.from(hiddenclasses).forEach(element => {
        element.classList.remove("hidden")
        element.classList.add("row")
    });
})
