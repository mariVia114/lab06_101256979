const bodyParser = require('body-parser');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/',function(req,res, next){
  console.log(`First name: ${req.body.fname}`)
  console.log(`Last name: ${req.body.lname}`);
  res.send('POST received')

});

router.use(bodyParser.urlencoded({extended: true}));


module.exports = router;
