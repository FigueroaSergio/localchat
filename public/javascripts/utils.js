

const user = sessionStorage.getItem("user")
const myColor = sessionStorage.getItem("color")
const myHeader = new Headers()
myHeader.append("user", user)

function post(url,data) {
    fetch(url,
        {
            method: "POST",
            body:new URLSearchParams(data),
            headers:myHeader
        })
}
function get(url,cb){
    fetch(url,
        {
            method: "GET",
            headers:myHeader
        })
        .then(res=>res.json())
        .then(res=>
            res.err?
            console.log(res.err):
            cb(res))
}