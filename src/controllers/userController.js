const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
try {
  let data = req.body
  console.log(data)
  if ( Object.keys(data).length != 0) {
      let savedData = await userModel.create(data)
      res.status(201).send({ msg: savedData })
  }
  else res.status(400).send({ msg: "BAD REQUEST"})
}
catch (err) {
  console.log("This is the error :", err.message)
  res.status(500).send({ msg: "Error", error: err.message })
}
}


const loginUser = async function (req, res) {
  try{
  let userName = req.body.emailId;
  let password = req.body.password;
  if ( Object.keys({userName,password}).length != 0) {
  let user = await userModel.findOne({ emailId: userName, password: password });
  
  if (!user)
    return res.status(404).send({ status: false, msg: "username or the password is not corerct"});
   

  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "Plutonium",
      organisation: "FunctionUp",
    },
    "Functionup-Plutonium-July"
      );
  
  res.setHeader("x-auth-token", token);
  res.status(200).send({ status: true, data: token });
  }
   else res.status(400).send({ msg: "BAD REQUEST"})  
}
  catch (err) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }
};

const getUserData = async function (req, res) {
  try{
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  res.status(200).send({ status: true, data: userDetails });
  }
  catch(err){
    return res.status(500).send({msg: "Error", error: err.message})
  }
};

const updateUser = async function (req, res) {
  try{
  let userId = req.params.userId;
  let userData = req.body;
  if ( Object.keys(userData).length != 0) {
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, {new: true});
  res.status(200).send({ status: true, data: updatedUser });
}
else res.status(400).send({ msg: "Empty body: BAD REQUEST"}) 
  }
catch(err){
  return res.status(500).send({msg: "Error", error: err.message})
}
};

const deleteUser = async function (req, res) {
  try{
  let userId = req.params.userId;
  let updatedUser = await userModel.findByIdAndUpdate({ _id: userId }, {isDeleted: true}, {new: true});
  res.status(200).send({ status: true, data: updatedUser });
}
catch(err){
  return res.status(500).send({msg: "Error", error: err.message})
}
};

const postMessage = async function (req, res) {
  try{  
  let message = req.body.message
  // console.log(message)
  if ( Object.keys(message).length != 0) {
    let user = await userModel.findById(req.params.userId)
     
    let updatedPosts = user.posts
    //add the message to user's posts
    updatedPosts.push(message)
    let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})
    return res.status(200).send({status: true, data: updatedUser})
  }
  else res.status(400).send({ msg: "Empty body: BAD REQUEST"}) 
}
  catch(err){
    return res.status(500).send({ msg: "Error", error: err.message })
  }
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser
module.exports.postMessage = postMessage