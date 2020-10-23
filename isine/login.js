var connection = require('../database').connection;
var express = require('express');
var router = express.Router();
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy
  , static = require('serve-static')
  , bodyParser = require('body-parser')
  , session = require('express-session')
  , cookieParser = require('cookie-parser')
  , flash=require("connect-flash")
  ,  sha1 = require('sha1');




  router.use(bodyParser.urlencoded({ extended: true }));
  router.use(bodyParser.json());
  router.use(cookieParser() );
  router.use(session({ secret: 'bhagasitukeren', cookie: { maxAge : 1200000 },saveUninitialized: true, resave: true }));
  router.use(passport.initialize());
  router.use(passport.session());
  router.use(flash());  
// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
passport.use(new LocalStrategy({
  passReqToCallback : true
},
  function(req, username, password, done) {
    connection.query("SELECT * from user WHERE username='"+username+"'", function(err, rows, fields) {
      if (err) throw err;
   
    //  console.log(rows)
    if(rows.length >0){
    	rows[0].tujuan = req.body.tujuan;
    	 if (rows[0].pwd != sha1(password)) {
    	      return done(null, false, req.flash('pesan','Password salah'), req.flash('tujuan',req.body.tujuan));
    	    }else{
    	    	return done(null, rows);
    	    }

    	}else{
    		return done(null, false, req.flash('pesan','Username tidak ditemukan'), req.flash('tujuan',req.body.tujuan));
    	}
            
    //res.end(JSON.stringify(rows))

      // MySQL query...
    //ambil geojson
     
    });
  }
    	
));
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
router.get('/', function(req, res) {
var tujuan = req.flash('tujuan');
var pesan = req.flash('pesan');
var menuju = "/backoffice";
	if(tujuan!=""){
		 menuju = tujuan;
	}
  else if(req.query.tujuan != undefined){
    menuju = req.query.tujuan;
  }
	res.render('login', { pesan: pesan, tujuan : menuju });
});
// define the home page route
router.post('/login',
  passport.authenticate('local', { 
                                   failureRedirect: '/autentifikasi',
                                   failureFlash: true }), function(req, res) {
    res.redirect(req.user[0].tujuan)}
);
// define the about route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/autentifikasi');
});

module.exports.router = router;
module.exports.cek_login = function(req, res, next) {
	if (req.isAuthenticated()){
        next();
	
    } else {
        res.redirect('/autentifikasi?tujuan='+encodeURIComponent(req.originalUrl));
    }
}