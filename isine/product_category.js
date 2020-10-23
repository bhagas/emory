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
var asyncLoop = require('node-async-loop');
var cek_login = require('./login').cek_login;
var dbgeo = require("dbgeo");
var multer = require("multer");
var model_product_category = require("../model/model_product_category");

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
router.get('/test_json', function(req, res) {
       res.setHeader('Content-Type', 'application/json');
       var datane = [];
       var i = 0;
    model_product_category.ambil_kategori(function(data){
             asyncLoop(data, function (item, next)
             {
                  model_product_category.produk_by_kategori(item.id, function(data2){
                 data[i].produk = data2;
                  i=i+1;
                  next();
                })            
             }, function ()
             {
                 res.send(JSON.stringify(data));
             });
           });
});

router.get('/', cek_login, function(req, res) {
  connection.query("SELECT * from master_kategori where deleted=0", function(err, rows, fields) {
          if (err) throw err;
          numRows = rows.length;
          //console.log(rows);
           res.render('content-backoffice/product_category/list',{data : rows});

          //res.send(JSON.stringify(rows));
        })
});

router.get('/insert', cek_login, function(req, res) {

  res.render('content-backoffice/product_category/insert');
});

router.get('/edit/:id', cek_login, function(req, res) {
  connection.query("select * from master_kategori where id='"+req.params.id+"'", function(err, rows, fields) {
    if (err) throw err;
    res.render('content-backoffice/product_category/edit', {data : rows});
  })
});

router.get('/get_data', function(req, res) {
  if(req.query.id!=null){
    connection.query("SELECT * from master_kategori where id='"+req.query.id+"'", function(err, rows, fields) {
          if (err) throw err;
                res.setHeader('Content-Type', 'application/json');
          res.send(JSON.stringify(rows));
        })
  }else{
    connection.query("SELECT * from master_kategori where deleted=0", function(err, rows, fields) {
          if (err) throw err;
           res.setHeader('Content-Type', 'application/json');
          res.send(JSON.stringify(rows));
        })
  }
      
});

// router.get('/edit/:id', cek_login, function(req, res) {
//   connection.query("select * from user where id_user='"+req.params.id+"'", function(err, rows, fields) {
//     if (err) throw err;
//     res.render('content-backoffice/user/edit', {data : rows});
//   })
// });


router.get('/delete/:id', cek_login, function(req, res) {
  // senjata
  // console.log(req.params.id)
  connection.query("update master_kategori SET deleted=1 WHERE id='"+req.params.id+"' ", function(err, rows, fields) {
    if (err) throw err;
    numRows = rows.affectedRows;
  })
  res.redirect('/product_category');
});

router.post('/submit_insert', upload.array(), function(req, res){
  // baca name-namenya dari form
  // req.body.nameopo
  // senjata
  //console.log(req.body)
  connection.query("insert into master_kategori (kategori) VALUES ('"+req.body.kategori+"')", function(err, rows, fields) {
    if (err) throw err;
    numRows = rows.affectedRows;
  })
  res.redirect('/product_category');
})


router.post('/submit_edit', upload.array(),  function(req, res){
  // baca name-namenya dari form
  // req.body.nameopo
  // senjata
  //console.log(req.body)
  connection.query("update master_kategori SET kategori='"+req.body.kategori+"' WHERE id='"+req.body.id+"' ", function(err, rows, fields) {
    if (err) throw err;
    numRows = rows.affectedRows;
  })
  res.redirect('/product_category');
})

   
module.exports = router;
