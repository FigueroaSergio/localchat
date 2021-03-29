var express = require('express');
var router = express.Router();
var msgs=[]

router.get("/", (req,res)=>{
  res.json(msgs) 
})
router.post('/', function(req, res, next) {
  console.log(req.body)
  let msg ={"from":"sergio", "msg":req.body.msg}
  msgs.push(msg)
  console.log(msg)
  res.json(msg)
 
});



module.exports = router;
