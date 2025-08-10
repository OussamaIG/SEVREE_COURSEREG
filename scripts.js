const btn = document.querySelector(".readall")
const hiddenclasses = document.getElementsByClassName("hidden")

let myclose = false

btn.addEventListener("click", ()=>{
    if(myclose == false){
        Array.from(hiddenclasses).forEach(element => {
        element.classList.remove("hidden")
        element.classList.add("row2")
        btn.textContent = "Close"
        myclose = true
    });}
    else{
        console.log("hi")
        const deletedelms = document.getElementsByClassName("row2")
        Array.from(deletedelms).forEach(element => {
        element.classList.remove("row2")
        element.classList.add("hidden")
        btn.textContent = "Close"
        myclose = false
    });
    }      
})
