const inputUser = document.getElementById("inputUser")
const color = document.getElementById("color")
        function saveUser(){
            let user = inputUser.value
            let micolor = color.value
            sessionStorage.setItem  ("color",micolor)
            sessionStorage.setItem  ("user",user)
            window.location.assign("/")
        }
        inputUser.onkeypress = (e) => { if (e.key == "Enter") { saveUser() } }