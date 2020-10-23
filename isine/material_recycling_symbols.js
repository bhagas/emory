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


router.get('/', cek_login, function(req, res) {
 connection.query("SELECT * from material where deleted=0", function(err, rows, fields) {
          if (err) throw err;
          numRows = rows.length;
          console.log(rows);
           res.render('content-backoffice/material_recycling_symbols/list',{data : rows});
        })
});

router.get('/insert', cek_login, function(req, res) {

  res.render('content-backoffice/material_recycling_symbols/insert');
});

router.get('/edit/:id', cek_login, function(req, res) {
connection.query("select * from material where id='"+req.params.id+"'", function(err, rows, fields) {
    if (err) throw err;
    res.render('content-backoffice/material_recycling_symbols/edit', {data : rows});
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


router.get('/delete/:id', cek_login, function(req, res) {
  // senjata
  // console.log(req.params.id)
  connection.query("update material SET deleted=1 WHERE id='"+req.params.id+"' ", function(err, rows, fields) {
    if (err) throw err;
    numRows = rows.affectedRows;
  })
  res.redirect('/material_recycling_symbols');
});

router.post('/submit_insert', upload.single('foto'), function(req, res){
   var oke = "";
  if(req.file){
    var oke = req.file.filename;
  }
  // baca name-namenya dari form
  // req.body.nameopo
  // senjata
  //console.log(req.body)
  connection.query("insert into material (symbol_name, deskripsi, properties, packaging, foto) VALUES ('"+req.body.symbol_name+"', '"+req.body.deskripsi+"', '"+req.body.properties+"', '"+req.body.packaging+"', '"+oke+"')", function(err, rows, fields) {
    if (err) throw err;
    numRows = rows.affectedRows;
  })
  res.redirect('/material_recycling_symbols');
})


router.post('/submit_edit', upload.single('foto'),  function(req, res){
  var oke = "";
  if(req.file){
    var oke = ",foto='"+req.file.filename+"'";
  }
  // baca name-namenya dari form
  // req.body.nameopo
  // senjata
  //console.log(req.body)
  connection.query("update material SET symbol_name='"+req.body.symbol_name+"', deskripsi='"+req.body.deskripsi+"', properties='"+req.body.properties+"', packaging='"+req.body.packaging+"' "+oke+" WHERE id='"+req.body.id+"' ", function(err, rows, fields) {
    if (err) throw err;
    numRows = rows.affectedRows;
  })
  res.redirect('/material_recycling_symbols');
})

   
module.exports = router;
