var express = require('express')
  , http = require('http')
  , path = require('path')
  , logger = require('morgan')
  , bodyParser = require('body-parser')
  , methodOverride = require('method-override')
  , static = require('serve-static')
  , errorHandler =require('errorhandler')
  , passport = require('passport')
  , session = require('express-session')
  , cookieParser = require('cookie-parser')
  , flash=require("connect-flash")
  , LocalStrategy = require('passport-local').Strategy;
  
var validator = require('express-validator');
var login = require('./isine/login').router;
var peta = require('./isine/topojson');
var upload = require('./isine/upload_file');
//var upload_shp = require('./isine/upload_shp');
var user = require('./isine/user');
var bantuan = require('./isine/bantuan');

// start managemet home
var home_slideshow_one = require('./isine/home_slideshow_one');
var home_slideshow_two = require('./isine/home_slideshow_two');
var home_slideshow_product = require('./isine/home_slideshow_product');
// end managemet home

// start managemet about us
var about_us_company_overview = require('./isine/about_us_company_overview');
var about_us_vision = require('./isine/about_us_vision');
var about_us_mission = require('./isine/about_us_mission');
var about_us_slideshow_product = require('./isine/about_us_slideshow_product');
// end managemet about us

// start product
var product_category = require('./isine/product_category');
var product = require('./isine/product');
// end management product

// start management design
var design_manufacturing = require('./isine/design_manufacturing');
var design_new_product_development = require('./isine/design_new_product_development');
var design_our_service = require('./isine/design_our_service');
// end management design

// start management recycling symbols
var material_recycling_symbols = require('./isine/material_recycling_symbols');
// end management recycling symbols

// start management contact
var contact = require('./isine/contact');
// end management contact

// start management kritik & saran
var kritik_saran = require('./isine/kritik_saran');
// end management kritik & saran

var fn = require('./isine/ckeditor-upload-image');
var cek_login = require('./isine/login').cek_login;
var app = express();
var connection = require('./database').connection;
//var mysql2geojson = require("mysql2geojson");
var router = express.Router();
var dbgeo = require("dbgeo");
var asyncLoop = require('node-async-loop');
app.set('views', __dirname + '/views');
//app.set('view engine', 'jade');
//app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


//end dbf dan shp
// all environments
app.set('port', process.env.PORT || 8800);

//app.use(express.favicon());
app.use(function (req, res, next) {

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
app.use(logger('dev'));
app.use(methodOverride());
app.use(static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser() );
app.use(session({ secret: 'bhagasitukeren', cookie: { maxAge : 1200000 },saveUninitialized: true,
               resave: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(validator());  
// Add headers

// development only
if ('development' == app.get('env')) {
  app.use(errorHandler());
}
 var server = http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));  
});
var io = require('socket.io').listen(server, { log: false });

//mulai apps ----------------------------------------------------------
app.use('/autentifikasi', login);
app.use('/peta', peta);
app.use('/upload', upload);
//app.use('/upload_shp', upload_shp);
app.use('/user', user);
app.use('/bantuan', bantuan);

// start management home
app.use('/home_slideshow_one', home_slideshow_one);
app.use('/home_slideshow_two', home_slideshow_two);
app.use('/home_slideshow_product', home_slideshow_product);
// end management home

// start management about us
app.use('/about_us_company_overview', about_us_company_overview);
app.use('/about_us_vision', about_us_vision);
app.use('/about_us_mission', about_us_mission);
app.use('/about_us_slideshow_product', about_us_slideshow_product);
// end management about us

// start management product
app.use('/product_category', product_category);
app.use('/product', product);
// end management product

// start management design
app.use('/design_manufacturing', design_manufacturing);
app.use('/design_new_product_development', design_new_product_development);
app.use('/design_our_service', design_our_service);
// end management design

// start management recycling symbols
app.use('/material_recycling_symbols', material_recycling_symbols);
// end management recycling symbols

// start management contact
app.use('/contact', contact);
// end management contact

// start management kritik & saran
app.use('/kritik_saran', kritik_saran);
// end management kritik & saran

app.use('/uploadckeditor', fn);

app.get('/', function (req, res) {
  connection.query("SELECT * from management_home where slideshow=1 AND deleted=0", function(err, rows, fields) {
          if (err) throw err;
          connection.query("SELECT * from management_home where slideshow=2 AND deleted=0", function(err, rowss, fields) {
          if (err) throw err;
          connection.query("SELECT * from management_home where slideshow=3 AND deleted=0", function(err, rowsss, fields) {
          if (err) throw err;
        //  kntl.push.apply(kntl, rowss);
          //  res.send(JSON.stringify(kntl))
          res.render('content/index',{slide1 : rows, slide2 : rowss, slide3 : rowsss});
          })
          })
        })
});

app.get('/about_us', function (req, res) {
  connection.query("SELECT * from about_us where id=1", function(err, rows, fields) {
          if (err) throw err;
        //  kntl.push.apply(kntl, rowss);
          //  res.send(JSON.stringify(kntl))
          
           connection.query("SELECT * from management_home where slideshow=3 AND deleted=0", function(err, rowss, fields) {
          if (err) throw err;
        //  kntl.push.apply(kntl, rowss);
          //  res.send(JSON.stringify(kntl))
          res.render('content/about_us',{data : rows, slide : rowss});
          })
          })
});

app.get('/products', function (req, res) {

 
   if(req.query.cat!=null){
    connection.query("SELECT master_produk.*, master_kategori.kategori from master_produk LEFT JOIN master_kategori ON master_produk.id_kategori=master_kategori.id where master_produk.id_kategori='"+req.query.cat+"' and master_produk.deleted=0 and master_kategori.deleted=0", function(err, rows, fields) {
          if (err) throw err;
          res.render('content/products',{data : rows});
            //  res.setHeader('Content-Type', 'application/json');
            // res.send(JSON.stringify(rows));
        })
  }else{
    //connection.connect()
    var i = 0;
    connection.query("SELECT * from master_kategori where deleted=0", function(err, rows, fields) {
          if (err) throw err;
      asyncLoop(rows, function (item, next)
             {
                  connection.query("SELECT master_produk.*, master_kategori.kategori from master_produk LEFT JOIN master_kategori ON master_produk.id_kategori=master_kategori.id where master_produk.id_kategori='"+item.id+"' and master_produk.deleted=0 and master_kategori.deleted=0", function(err, rowss, fields) {
                    if (err) throw err;
                    rows[i].produk = rowss;
                    i=i+1;
                    next();

                })            
             
             }, function ()
             {
              res.render('content/products',{data_full : rows});
                 //  res.setHeader('Content-Type', 'application/json');
                 // res.send(JSON.stringify(rows));
             }); 
        
                  

             
        });   
      }
    // connection.query("SELECT master_produk.*, master_kategori.kategori from master_produk LEFT JOIN master_kategori ON master_produk.id_kategori=master_kategori.id where master_produk.deleted=0 and master_kategori.deleted=0", function(err, rows, fields) {
    //       if (err) throw err;
    //        //res.render('content/products',{data : rows});
    //          res.setHeader('Content-Type', 'application/json');
    //         res.send(JSON.stringify(rows));
    //     })

  

  // console.log(req.user)
  // res.render('content/products');
});

app.get('/products/:id', function (req, res) {
  console.log(req.user)
  res.render('content/products');
});

app.get('/design', function (req, res) {
	
	
           connection.query("SELECT * from design", function(err, rowss, fields) {
          if (err) throw err;
        //  kntl.push.apply(kntl, rowss);
          //  res.send(JSON.stringify(kntl))
           res.render('content/design',{data : rowss});
		  
          })
          
		  
 // console.log(req.user)

});

app.get('/material', function (req, res) {
 // console.log(req.user)
    connection.query("SELECT * from material where deleted='0'", function(err, rowss, fields) {
          if (err) throw err;
        //  kntl.push.apply(kntl, rowss);
          //  res.send(JSON.stringify(kntl))
           res.render('content/material',{data : rowss});
		  
          })
});

app.get('/contact_front', function (req, res) {
  //console.log(req.user)
  // console.log(req.user)
    connection.query("SELECT * from contact ", function(err, rowss, fields) {
          if (err) throw err;
        //  kntl.push.apply(kntl, rowss);
          //  res.send(JSON.stringify(kntl))
           res.render('content/contact',{data : rowss});
		  
          })
		  
});


app.get('/backoffice', cek_login, function (req, res) {
  console.log(req.user)
  res.render('content-backoffice/index');
});


// app.listen(800, function () {
//   console.log('Example app listening on port 800!');
//admin
//mysql


  
<!-- start socketio connection -->

io.sockets.on('connection', function (socket) {	



});