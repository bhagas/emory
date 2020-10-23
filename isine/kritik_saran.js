var connection = require('../database').connection;
var express = require('express');
var router = express.Router();
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy
  , static = require('serve-static')
  , bodyParser = require('body-parser')
  , session = require('express-session')
  , cookieParser = require('cookie-parser')
  , path = require('path')
  ,  sha1 = require('sha1');

 var cek_login = require('./login').cek_login;
var dbgeo = require("dbgeo");
var multer = require("multer");
var validator = require('express-validator');

path.join(__dirname, '/foto')
  router.use(bodyParser.json());
  router.use(bodyParser.urlencoded({ extended: true }));

  router.use(cookieParser() );
  router.use(session({ secret: 'bhagasitukeren', cookie: { maxAge : 1200000 },saveUninitialized: true, resave: true }));
  router.use(passport.initialize());
  router.use(passport.session());
  router.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'foto/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+'-'+file.originalname)
  }
})

var upload = multer({ storage: storage })

//start-------------------------------------
router.get('/', cek_login, function(req, res) {
  connection.query("SELECT * from kritik_saran where deleted=0", function(err, rows, fields) {    
      
        res.render('content-backoffice/kritik_saran/list',{data : rows});
      });
  
});

router.post('/submit_insert', function(req, res){
  // baca name-namenya dari form
  // req.body.nameopo
  // senjata
  console.log(req.body)
  var data=false;
        connection.query("insert into kritik_saran (nama, email, telp, msg) VALUES ('"+req.body.nama+"', '"+req.body.email+"', '"+req.body.telp+"', '"+req.body.msg+"')", function(err, rows, fields) {
        if (err){
          throw err;
        }else{
          data=true;
          res.setHeader('Content-Type', 'application/json');
           res.send(JSON.stringify(data));
        }         
        numRows = rows.affectedRows;
      })
      // res.redirect('/contact_front');
    
  })

router.get('/json/:id', cek_login, function(req, res) {
  connection.query("SELECT * from kritik_saran where id='"+req.params.id+"'", function(err, rows, fields) {    
      
        res.setHeader('Content-Type', 'application/json');
           res.send(JSON.stringify(rows));

      });
  
});

router.get('/delete/:id', cek_login, function(req, res) {
  // senjata
  // console.log(req.params.id)
  connection.query("update kritik_saran SET deleted=1 WHERE id='"+req.params.id+"' ", function(err, rows, fields) {
    if (err) throw err;
    numRows = rows.affectedRows;
  })
  res.redirect('/kritik_saran');
});
// router.post('/submit_insert', upload.array(), function(req, res){
//   // baca name-namenya dari form
//   // req.body.nameopo
//   // senjata
//   //console.log(req.body)
//   req.checkBody("email", "Enter a valid email address.").isEmail();

//   var errors = req.validationErrors();
//     if (errors) {
//       var datane=[];
//       connection.query("SELECT * from contact ", function(err, rowss, fields) {
//           if (err) throw err;
//           datane=rowss;
//         //  kntl.push.apply(kntl, rowss);
//           //  res.send(JSON.stringify(kntl))
//            //res.render('content/contact',{data : rowss});
      
//           })
//       res.render('content/contact', { errors: errors , data : datane});
//       return;
//     } else {
//         connection.query("insert kritik_saran (name, email, telp, msg) VALUES ('"+req.body.name+"', '"+req.body.email+"', '"+req.body.telp+"', '"+req.body.msg+"')", function(err, rows, fields) {
//         if (err) throw err;
//         numRows = rows.affectedRows;
//       })
//       res.redirect('contact_front');
//     }
//   })

// router.get('/insert', cek_login, function(req, res) {
//   res.render('content-backoffice/kritik_saran/insert');
// });

// router.get('/edit', cek_login, function(req, res) {
//   res.render('content-backoffice/kritik_saran/edit');
// });
   
module.exports = router;
