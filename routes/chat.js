var express = require('express');
var router = express.Router();
var msgs = []
var size = 0
const verifyuser=(req,res,next)=>{
  let user=req.headers.user
  if(user=="null" || user==""){
    res.json({ err: "you are unauthorize" })
  }else{
    next()
  }
  
}
router.use(verifyuser)
router.get("/", (req, res) => {
  res.json(msgs)
  console.log(size)
})

router.post('/',function (req, res, next) {
  // console.log(req.headers)
  let msg = req.body
  msgs.push(msg)

  size++
  // console.log(size)
  res.json(msg)


});
router.get("/:msg", (req, res) => {
  let act = req.params.msg
  // console.log(act)
  let user = req.headers.user
 
    let news = msgs.slice(act, size)
    // console.log(news)
    res.json(news)
  
})


module.exports = router;
