const form = document.getElementById("form")
const inputMsg = document.getElementById("inputMsg")
const chat = document.getElementById("chat")
const fragment = document.createDocumentFragment()
var msgs = []
var act = 0
const getMsgs = () => {
    fetch(`/chat/${act}`, {
        method: "GET"
    }).then(res => res.json())
        .then(newMsgs => {
            
              act = act + newMsgs.length  
            
            // console.log(msgs)
            
            render(newMsgs)
        })
}
setInterval("getMsgs()", 1000)
form.addEventListener("submit", event => {


    event.preventDefault()
    let msg = inputMsg.value
    inputMsg.value=""
    fetch(`/chat`, {
        method: "POST",
        body: new URLSearchParams({
            "msg": msg
        })
    }).then(res => res.json())
        .then(dato => {
            console.log(dato)
            
        })
})
function render(msgs) {
    for (ms of msgs) {
        let { from, msg } = ms
        let view = document.createElement("p")
        view.textContent = from + ": " + msg
        fragment.appendChild(view)
    }
    chat.appendChild(fragment)
}