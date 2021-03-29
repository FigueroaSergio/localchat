const form= document.getElementById("form")
const inputMsg = document.getElementById("inputMsg")
form.addEventListener("submit",event=>{
    
    
    event.preventDefault()
    let msg = inputMsg.value
    fetch("/chat",{
        method:"POST",
        body:new URLSearchParams({
            "msg":msg
        })
    }).then(res=>res.json())
    .then(dato=>console.log(dato))
})
