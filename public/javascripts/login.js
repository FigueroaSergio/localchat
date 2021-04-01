

const inputUser = document.getElementById("inputUser")
const color = document.getElementById("color")
const loginForm = document.getElementById("login")
loginForm.addEventListener("submit",e=>{
//se puede llamar y utilizar variables de otro js 
            // que este por encima de donde se cargo este
          
            
            let user = inputUser.value
            let micolor = color.value
            
            sessionStorage.setItem  ("user",user)
            sessionStorage.setItem  ("color",micolor)
            
})

