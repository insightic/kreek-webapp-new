var express = require("express");
var router = express.Router();
var request=require('request');
const axios = require('axios');

router.get("/", function(req, res, next) {
    axios({
        method: 'post',
        url: 'http://ec2-18-176-37-212.ap-northeast-1.compute.amazonaws.com:8080/getAll',
        headers: {}, 
      }).then(function (response) {
        // handle success
        console.log(response['data']);
        res.send(response['data'])
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        res.send({'data':'Error'});
      })
});

module.exports = router;