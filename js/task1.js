// - при кліку на add створюється ще одне поле під останнім

// - при кліку на remove видаляється поточне поле
let addBtn = document.querySelector(".btn.btn-light")
let form0 = document.querySelector(".block-inputs")
let form = document.querySelector("form")
let removeBtn = document.querySelector(".btn.btn-outline-secondary")
// addBtn.addEventListener("click",function(ev){
//     console.log(ev)
//     let newInput = document.createElement("input")
//     newInput.classList.add("form-control","col-12","mb-3")
//     newInput.setAttribute("placeholder","info")
//     form0.append(newInput)
// })
form.addEventListener("click",function(event){
    console.log(event)

    let newInput = document.createElement("input")
    newInput.classList.add("form-control","col-12","mb-3")
    newInput.setAttribute("placeholder","info")

    let inputArr = document.querySelectorAll(".form-control")
    let lastInput = inputArr[inputArr.length-1]
    
    if(event.target.textContent ==="Add"){
        form0.append(newInput)
    }
    else if(event.target.textContent ==="Remove" && inputArr.length-1!==0){
        lastInput.remove()
    }
    
})
// form.addEventListener("click",function(event){
//     console.log(event)
    // let inputArr = document.querySelectorAll(".form-control")
    // let lastInput = inputArr[inputArr.length-1]
    // if(event.target.textContent ==="Remove" && inputArr.length-1!==0){
    //     lastInput.remove()
    // }
// })