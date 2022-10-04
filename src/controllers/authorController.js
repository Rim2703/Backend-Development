const authorModel = require("../models/authorModel");
const redis = require("redis");

const { promisify } = require("util");

//Connect to redis
const redisClient = redis.createClient(
  10976,
  "redis-10976.c301.ap-south-1-1.ec2.cloud.redislabs.com",
  { no_ready_check: true }
);
redisClient.auth("63Fkn6vvGYtfftugyWgr7LrK8Emyqedh", function (err) {
  if (err) throw err;
});

redisClient.on("connect", async function () {
  console.log("Connected to Redis..");
});


//1. connect to the server
//2. use the commands :

//Connection setup for redis

const SET_ASYNC = promisify(redisClient.SET).bind(redisClient);
const GET_ASYNC = promisify(redisClient.GET).bind(redisClient);


const createAuthor = async function (req, res) {
  let data = req.body;
  let authorCreated = await authorModel.create(data);
  res.send({ data: authorCreated });
};

const fetchAuthorProfile = async function (req, res) {
  let cachedProfileData = await GET_ASYNC(`${req.params.authorId}`)
  if(cachedProfileData) {
    res.send(JSON.parse(cachedProfileData))
  } else {
    let profile = await authorModel.findById(req.params.authorId);
    await SET_ASYNC(`${req.params.authorId}`, JSON.stringify(profile))
    res.send({ data: profile });
  }

};
``
module.exports.createAuthor = createAuthor;
module.exports.fetchAuthorProfile = fetchAuthorProfile;
