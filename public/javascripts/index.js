const form = document.getElementById("form")
const inputMsg = document.getElementById("inputMsg")
const chat = document.getElementById("chat")
const fragment = document.createDocumentFragment()
const btnDown =document.getElementById("btnDown")

const user = sessionStorage.getItem("user")
const myColor =sessionStorage.getItem("color")

const myHeader = new Headers()
myHeader.append("user", user)
const goDown=()=>{
    chat.scrollTop=chat.scrollHeight
}
const checkPageFocus=()=>{
    // console.log (`${chat.scrollTop} ${chat.scrollHeight}`)
    if ((chat.scrollTop) > (chat.scrollHeight-575)){
        btnDown.style.display="none"      
           
       goDown()
    }
    else{
        btnDown.style.display="block"
    }
}
    
    
    
setInterval(checkPageFocus, 500);
var msgs = []
var act = 0
const getMsgs = () => {
    fetch(`/chat/${act}`, {
        method: "GET",
        headers: myHeader
    }).then(res => res.json())
        .then(newMsgs => {

            if (newMsgs.err) {
                console.log(newMsgs.err)
                window.location.assign("/login")
            } else {

                act = act + newMsgs.length
                // console.log(msgs)
                render(newMsgs)
            }

        })
}
setInterval("getMsgs()", 1000)
inputMsg.onkeypress = (e) => { if (e.key == "Enter") { sendMSG() } }
const sendMSG=() => {


    
    let msg = inputMsg.value
    inputMsg.value = ""
    let date = new Date()
    
    fetch(`/chat`, {
        method: "POST",
        body: new URLSearchParams({
            "from": user,
            "msg": msg,
            "color":myColor,
            "date":date
        }),
        headers: myHeader
    }).then(res => res.json())
        .then(dato => {
            // console.log(dato)

        })
}
function render(msgs) {
    for (ms of msgs) {
        let row = document.createElement("div")
        let { from, msg ,color, date } = ms
        let f = document.createElement("small")
        let m = document.createElement("p")
        let hour=document.createElement("small")
        let d =new Date(date).toLocaleTimeString()
        hour.textContent=d
        f.style.color=color
        f.textContent=from
        m.textContent = msg 
        
        if (from==user){
        
            row.style.textAlign="right"
        }
        
        row.classList.add("msg")
        row.appendChild(f)
        row.appendChild(m)
        row.appendChild(hour)
        fragment.appendChild(row)
        
    }
    chat.appendChild(fragment)
}