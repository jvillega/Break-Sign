var express = require('express');
var router = express.Router();

// Return the home page
router.get('/', function(req, res){
    res.sendFile('index.html', {root: './public'});
});

module.exports = router;

