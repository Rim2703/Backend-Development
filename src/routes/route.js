const express = require('express');
const router = express.Router();

router.get('/students/:name', function (req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random", function (req, res) {
    res.send("hi there")
})


router.get("/test-api", function (req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2", function (req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3", function (req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4", function (req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5", function (req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6", function (req, res) {
    res.send({ a: 56, b: 45 })
})

router.post("/test-post", function (req, res) {
    res.send([23, 45, 6])
})


router.post("/test-post-2", function (req, res) {
    res.send({ msg: "hi", status: true })
})

router.post("/test-post-3", function (req, res) {
    // let id = req.body.user
    // let pwd= req.body.password
    // console.log( id , pwd)
    
    console.log(req.body)
    res.send({ msg: "hi", status: true })
})



router.post("/test-post-4", function (req, res) {
    let arr = [12, "functionup"]
    let ele = req.body.element
    arr.push(ele)
    res.send({ msg: arr, status: true })
})

let players =
    [
        {
            "name": "manish",
            "dob": "1/1/1995",
            "gender": "male",
            "city": "jalandhar",
            "sports": [
                "swimming"
            ]
        },
        {
            "name": "gopal",
            "dob": "1/09/1995",
            "gender": "male",
            "city": "delhi",
            "sports": [
                "soccer"
            ],
        },
        {
            "name": "lokesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": [
                "soccer"
            ],
        },

        {
            "bookingNumber": 1,
             "sportId": "",
             "centerId": "",
            "type": "private",
            "slot": '16286598000000',
           "bookedOn": '31/08/2021',
            "bookedFor": '01/09/2021'
           }
           
    ]

router.post('/players', function (req, res) {

    //LOGIC WILL COME HERE
    let newPlayer = req.body
    for (let i = 0; i < players.length; i++) {
        const alreadyExisting = players[i]
        if (alreadyExisting.name == newPlayer.name) {
            res.send("This Player is already exist")
        }
    }
    players.push(newPlayer)
    res.send({ data: players, status: true })
});

router.post('/players/:playerName/bookings/:bookingId',function(req,res){    
    // let playersName = req.body 
    let player = req.params.playerName 
    // let bookingId = req.params.bookingId 

    for (let i = 0; i < players.length; i++) {
        let playersName = players[i]
        if (playersName.name == player) {
          return  res.send(playersName)
        }
    }
    res.send("player not being found.")

    res.send({ data: players, status: true })
});

router.post("/filter-post",function(req,res){
    let myArr = [12,3434,1234,887,9,0,5,6,34,788]
    let input = req.query.input
    let finalArr = myArr.filter(ele => ele>input)

    res.send({data : finalArr, status: true})
})

router.post("/marks-post",function(req,res){
    let marks = req.query.marks
    let result = marks>50 ? "pass": "fail"
    res.send({data : result, status : true})
})

router.get("/query-api",function(req,res){
    let data = req.query
    let var1 = data.myPassword
    let var2 = data.name
    console.log(data)
    res.send({info : data})
})

let persons = [
    {
        name : "PK",
        age : 10,
        votingStatus : false 
    },
    {
        name : "SK",
        age : 20,
        votingStatus : false 
    },
    {
        name : "AA",
        age : 70,
        votingStatus : false 
    },
    {
        name : "SC",
        age : 5,
        votingStatus : false 
    },
    {
        name : "HO",
        age : 40,
        votingStatus : false 
    }
]
router.post("/persons",function(req,res){
    let input = req.query.votingAge
    let arr = []
    for(i=0;i<persons.length;i++){
        let personDetails = persons[i]
        if(personDetails.age > input){
            personDetails.votingStatus=true;
            arr.push(personDetails)
        }
    }
    res.send({info:arr})
})
module.exports = router;