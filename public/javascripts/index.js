const inputMsg = document.getElementById("inputMsg")
const chat = document.getElementById("chat")
const fragment = document.createDocumentFragment()
const btnDown =document.getElementById("btnDown")
const total = document.getElementById("totla")

var act = 0


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

setInterval("getMsgs()", 1000)
setInterval(checkPageFocus, 500);

const goDown=()=>{ chat.scrollTop=chat.scrollHeight}

inputMsg.onkeypress = (e) => { if (e.key == "Enter") { sendMSG() } }

const sendMSG=() => {


    
    let msg = inputMsg.value
    inputMsg.value = ""
    let date = new Date()
    let data={
            "from": user,
            "msg": msg,
            "color":myColor,
            "date":date
        }
    post("/chat",data)
    
}
const getMsgs = () => {
    get(`/chat/${act}`,
    (data)=>{
        act=act+data.length
        render(data)
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