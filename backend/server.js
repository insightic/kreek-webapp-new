const express = require('express');
const auth = require('basic-auth')
const axios = require('axios');
var cors = require("cors");
const jwt = require("jsonwebtoken");

// Constants
const PORT = 9000;
const HOST = 'localhost';

// App
const app = express();
app.use(express.json())
app.use(express.urlencoded())
var cookieParser = require('cookie-parser');

// view engine setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

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
      url: 'http://ec2-18-176-37-212.ap-northeast-1.compute.amazonaws.com:8080/getProjectByProjectId',
      headers: {}, 
      data: {"projectId": 1}
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
  
  // Handling Sign Up request
  app.post("/signup", async (req, res, next) => {
    let { email, password } = req.body;
  
    let userList = await axios({
      method: 'post',
      url: 'http://ec2-18-176-37-212.ap-northeast-1.compute.amazonaws.com:8080/newUser',
      headers: {}, 
      data: {
        userId: 1, 
        userEmail:email,
        userPassword:password,
        projects: []
      }
    }).then(function (response) {
      // handle success
      console.log(response);
    })
  
    res.status(200).json({
      success: true,
      data: {
        userId: 1, //existingUser.id,
        email: email,//existingUser.email,
        token: token,
      },
    });
  });
  
  // Get All Projects request
  app.post("/getAllProjects", async (req, res, next) => {
    let { email, password } = req.body;
  
    let projectList = await axios({
      method: 'post',
      url: 'http://ec2-18-176-37-212.ap-northeast-1.compute.amazonaws.com:8080/getAllProjects',
      headers: {}, 
      data: {
        userEmail:email,
        userPassword:password,
      }
    }).then(function (response) {
      // handle success
      console.log(response['data']);
      return response['data']
    })
  
    res.status(200).json({
      success: true,
      data: projectList
    });
  });
  
  // Create Project
  app.post("/createProject", async (req, res, next) => {
    let { email, password, projectId, projectName, smartContracts } = req.body;
  
    await axios({
      method: 'post',
      url: 'http://ec2-18-176-37-212.ap-northeast-1.compute.amazonaws.com:8080/newProject',
      headers: {}, 
      data: {
        userEmail:email,
        userPassword:password,
        projectId: projectId,
        projectName: projectName,
        projectType: "Unspecified",
        smartContracts: smartContracts,
        overallCodeQuality: "NA",
        explanation: "NA",
        securityAnalysis: "NA"
      }
    }).then(function (response) {
      // handle success
      return response
    })
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
  
  // app.post('/status' , verifyToken , (req,res) => {
  //   res.send('You are Authorized!')
  //   })
  
  app.get('/test' , (req,res) => {
    res.send({msg: 'Hello World!'})
    })

app.get('/' , (req,res) => {
    res.send('Hello From homepage!')
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
  

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});

// Export the Express API
module.exports = app;