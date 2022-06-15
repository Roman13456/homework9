// - при кліку на add створюється ще одне поле під останнім

// - при кліку на remove видаляється поточне поле
let addBtn = document.querySelector(".addBtn")
let insideFormContainer = document.querySelector(".block-inputs")
let form = document.querySelector("form")
let removeBtn = document.querySelector("removeBtn")
// addBtn.addEventListener("click",function(ev){
//     console.log(ev)
//     let newInput = document.createElement("input")
//     newInput.classList.add("form-control","col-12","mb-3")
//     newInput.setAttribute("placeholder","info")
//     form0.append(newInput)
// })
form.addEventListener("click",function(event){ 
    let inputContainer = document.createElement("div")
    inputContainer.classList.add("input-group","mb-3")
    inputContainer.innerHTML = '<input type="text" class="form-control" placeholder="Info"><div class="input-group-append"><button class="btn btn-outline-secondary removeBtn" type="button" >Remove</button></div>'
    // let newInput = document.createElement("input")
    // newInput.classList.add("form-control","col-12")
    // newInput.setAttribute("placeholder","info")
    // inputContainer.append(newInput)

    // let removeBtnContainer = document.createElement("div") 
    // removeBtnContainer.classList.add("input-group-append")
    // inputContainer.append(removeBtnContainer)

    // let newRemoveBtn = document.createElement("button")
    // newRemoveBtn.classList.add("btn","btn-outline-secondary")
    // newRemoveBtn.setAttribute("type","button")
    // newRemoveBtn.innerHTML = "Remove"
    // removeBtnContainer.append(newRemoveBtn)
    // let inputArr = document.querySelectorAll(".form-control")
    // let lastInput = inputArr[inputArr.length-1]

    // if(event.target.classList.contains("btn","btn-light") ){
    //     insideFormContainer.append(inputContainer)
    // }


    
    // if(event.target.classList.contains("btn"&&"btn-light")){
    //     console.log(event.target)
    //     insideFormContainer.append(inputContainer)
    // }
    if(event.target.classList.contains("addBtn")){
        console.log(event.target)
        insideFormContainer.append(inputContainer)
    }
    else if(event.target.classList.contains("removeBtn")){
        event.target.closest(".input-group.mb-3").remove()
        
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