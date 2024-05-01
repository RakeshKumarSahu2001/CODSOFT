const values = document.querySelectorAll('button')
const show = document.querySelector("input")

// console.log(show)
values.forEach((value) => {
    value.addEventListener("click", () => {
        if (value.innerHTML == "AC") {
            show.value = " "
        } else if (value.innerHTML === "=") {
            console.log(show.value)
            show.value=eval(show.value)
        }else if(value.innerHTML === "del"){
            show.value = show.value.slice(0, -1);
        } else {
            show.value += value.innerHTML
        }
    })
})

