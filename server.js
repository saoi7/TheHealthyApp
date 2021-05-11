var express = require('express');
var cors = require('cors')
var app = express()
app.use(cors())
var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

var con = mysql.createConnection({
 
    host:'mysql1.it.nuigalway.ie',
    port:'3306 ',
    user:'mydb6157os',
    password:'cy9dil', 
    database: 'mydb6157'

});

var server = app.listen(1348, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("start");
  
  });

con.connect(function(error){
    if(error) console.log(error);
    else console.log("connected");
  });

app.get('/user', function(req, res){
  con.query('select * from moodjournal', function(error, rows, fields){
        if(error) console.log(error);

        else{
            console.log(rows);
            res.send(rows);

        }

  });
});

app.post('/input', function(req, res){
    var sql = "INSERT INTO moodjournal (uid, entry) VALUES ('"+req.body.uid+"', '"+req.body.entry+"')"
    con.query(sql, function(error, result){
          if(error) console.log(error);
  
          else{
              console.log("Success");
              
  
          }
  
    });
  });


  app.get('/login/:email&:password', function(req, res){
      console.log ("login");
      var sql = "select * from users where email = '" + req.params.email+"' and password = '"+ req.params.password+"'";
      console.log(sql);
    con.query(sql , function(error, rows, fields){
          if(error) console.log(error);
  
          else{
              console.log(rows)
              if (rows.length > 0){
                  console.log (true);
                  res.send(true);
              } else{ res.send(false); 
            console.log(false)}
              

  
          }
  
    });
  });