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

path.join(__dirname, '/public/foto')
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
    cb(null, 'public/foto/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+'-'+file.originalname)
  }
})

var upload = multer({ storage: storage })

//start-------------------------------------


// router.get('/', cek_login, function(req, res) {

//   res.render('content-backoffice/about_us_company_overview/list');
// });

// router.get('/insert', cek_login, function(req, res) {

//   res.render('content-backoffice/about_us_company_overview/insert');
// });

router.get('/edit', cek_login, function(req, res) {
connection.query("SELECT * from design where id='1'", function(err, rows, fields) {
          if (err) throw err;
         // jmbt.concat(rows);
          res.render('content-backoffice/design_our_service/edit',{data : rows});
        })
});

// router.get('/', function(req, res) {
//       connection.query("SELECT * from user where deleted=0", function(err, rows, fields) {
//           if (err) throw err;
//           numRows = rows.length;
//           console.log(rows);
//            res.render('content-backoffice/user/list',{data : rows});
//         })
// });

// router.get('/edit/:id', cek_login, function(req, res) {
//   connection.query("select * from user where id_user='"+req.params.id+"'", function(err, rows, fields) {
//     if (err) throw err;
//     res.render('content-backoffice/user/edit', {data : rows});
//   })
// });


// router.get('/delete/:id', cek_login, function(req, res) {
//   // senjata
//   // console.log(req.params.id)
//   connection.query("update user SET deleted=1 WHERE id_user='"+req.params.id+"' ", function(err, rows, fields) {
//     if (err) throw err;
//     numRows = rows.affectedRows;
//   })
//   res.redirect('/user');
// });

// router.post('/submit_insert', upload.array(), function(req, res){
//   // baca name-namenya dari form
//   // req.body.nameopo
//   // senjata
//   //console.log(req.body)
//   connection.query("insert into user (username, pwd, fullname, NIP, email, telp) VALUES ('"+req.body.username+"', '"+sha1(req.body.pwd)+"', '"+req.body.fullname+"', '"+req.body.NIP+"', '"+req.body.email+"', '"+req.body.telp+"')", function(err, rows, fields) {
//     if (err) throw err;
//     numRows = rows.affectedRows;
//   })
//   res.redirect('/user');
// })


router.post('/submit_edit', upload.single('our_service'),  function(req, res){
  var oke = "";
  if(req.file){
     oke = "our_service='"+req.file.filename+"'";
  }
  // baca name-namenya dari form
  // req.body.nameopo
  // senjata
  //console.log(req.body)
  connection.query("update design SET "+oke+" WHERE id='"+req.body.id+"' ", function(err, rows, fields) {
    if (err) throw err;
    numRows = rows.affectedRows;
  })
  res.redirect('/design_our_service/edit');
})

   
module.exports = router;
