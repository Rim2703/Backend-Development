let axios = require("axios")

let createMemes = async function (req, res) {
    try {
        let id = req.query.template_id
        let text1 = req.query.text0
        let text2 = req.query.text1
        let userName = req.query.username
        let password = req.query.password
        var options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${id}&text0=${text1}&text1=${text2}&username=${userName}&password=${password}`,
            
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

module.exports.createMemes = createMemes