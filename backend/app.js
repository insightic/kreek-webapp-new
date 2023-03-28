var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var cors = require("cors");
const jwt = require("jsonwebtoken");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var getAllRouter = require("./routes/getAll");
var getProjectDetailsRouter = require("./routes/getProjectDetails");
const axios = require('axios');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/getAll", getAllRouter);
app.use("/getProjectDetails", getProjectDetailsRouter);

const withAuth = require('./middleware');

// Handling post request
app.post("/signin", async (req, res, next) => {
  let { email, password } = req.body;
 
  let existingUser;
  // try {
  //   existingUser = await User.findOne({ email: email });
  // } catch {
  //   const error = new Error("Error! Something went wrong.");
  //   return next(error);
  // }
  // if (!existingUser || existingUser.password != password) {
  //   const error = Error("Wrong details please check at once");
  //   return next(error);
  // }

  let userList = await axios({
    method: 'post',
    url: 'http://ec2-18-176-37-212.ap-northeast-1.compute.amazonaws.com:8080/getAll',
    headers: {}, 
  }).then(function (response) {
    // handle success
    console.log(response['data']);
    return response['data']
  })

  userList = userList['users'].map((user) => {return {"email": user['userEmail'], "password": user['userPassword']}})

  let token;
  console.log({"email": email, "password": password})
  console.log(userList)
  console.log(userList.filter((user) => {return user.email == email && user.password == password}))
  if (userList.filter((user) => {return user.email == email && user.password == password}).length == 1) {
    try {
      //Creating jwt token
      token = jwt.sign(
        // { userId: existingUser.id, email: existingUser.email },
        { userId: "testId", email: email },
        "secretkeyappearshere",
        { expiresIn: "1h" }
      );

      res.status(200).json({
        success: true,
        data: {
          userId: "testId", //existingUser.id,
          email: email,//existingUser.email,
          token: token,
        },
      });

    } catch (err) {
      console.log(err);
      const error = new Error("Error! Something went wrong.");
      return next(error);
    }
  } else {
    res.status(401).json({
      success: false,
    });
  }
 

});
 
// Handling post request
app.post("/signup", async (req, res, next) => {
  const { name, email, password } = req.body;
  const newUser = User({
    name,
    email,
    password,
  });
 
  try {
    await newUser.save();
  } catch {
    const error = new Error("Error! Something went wrong.");
    return next(error);
  }
  let token;
  try {
    token = jwt.sign(
      { userId: newUser.id, email: newUser.email },
      "secretkeyappearshere",
      { expiresIn: "1h" }
    );
  } catch (err) {
    const error = new Error("Error! Something went wrong.");
    return next(error);
  }
  res
    .status(201)
    .json({
      success: true,
      data: { userId: newUser.id,
          email: newUser.email, token: token },
    });
});

app.put("/logout", function (req, res) {
  const authHeader = req.headers["authorization"];
  token = jwt.sign(authHeader, "", { expiresIn: 1 } , (logout, err) => {
  if (logout) {
  res.send({msg : 'You have been Logged Out' });
  } else {
  res.send({msg:'Error'});
  }
  });
  });

app.get('/accessResource', (req, res)=>{  
  const token = req.headers.authorization
  //Authorization: 'Bearer TOKEN'
  if(!token)
  {
      res.status(200).json({success:false, message: "Error! Token was not provided."});
  }
  //Decoding the token
  const decodedToken = jwt.verify(token,"secretkeyappearshere" );
  res.status(200).json({success:true, data:{userId:decodedToken.userId, email:decodedToken.email}});   
})

function verifyToken(req, res, next) {
  const token = req.headers['authorization']
  console.log("authh" + token)
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, "secretkeyappearshere", (err, user) => {
    console.log(err)

    if (err) return res.sendStatus(403)

    req.user = user

    next()
  })
}

app.post('/status' , verifyToken , (req,res) => {
  res.send('You are Authorized!')
  })

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
