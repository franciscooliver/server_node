var express = require('express');
var router = express.Router();

router.get("/", function(req, res){
    res.send('Hello word'); 
})

router.get("/contato", function(req, res){
    res.send('<h1>Contato</h1>');
})

router.get("/about", function(req, res){
    res.send('<h1>About</h1>');
})

router.post("/post", function(req, res){
    res.send(req.body);
})

module.exports = router;