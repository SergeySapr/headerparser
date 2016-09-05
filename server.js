const express = require('express');

var app = express();
    
app.use(function(req,res){ 

var userInfo={};
userInfo.lang = req.headers['accept-language'].substr(0,5);
userInfo.IP= req.headers['x-forwarded-for'];

var userAgent= req.headers['user-agent'];
var arrAgent = userAgent.split(")");
userInfo.OS = arrAgent[0].match(/\((.+)/)[1];

 res.end(JSON.stringify(userInfo));
});
var port = +process.env.PORT||8080

app.listen(port, function () {console.log(process.env.PORT,process.env.IP);
  console.log('User-info app listening on port 8080!');
});