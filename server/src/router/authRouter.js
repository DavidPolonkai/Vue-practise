const authRouter = require("express").Router();
const MongoClient = require("../dbconnection/connectionURL").MongoClient;
const url = require("../dbconnection/connectionURL").url;
const jwt = require("jsonwebtoken");
const config = require("../JWT/config");

let client;

    var mongoClient = new MongoClient(url, {
        reconnectTries:
            Number.MAX_VALUE, autoReconnect: true, useNewUrlParser: true
    })
    
    mongoClient.connect((err, db) => {
        if (err != null) {
            console.log("Error during connection: \n" + err);
            return
        }
        console.log("successful connection");
        client = db;
    })

authRouter.post('/login', (req, res) => {
    const collection = client.db('test').collection('user')
    let user = req.body;
    collection.findOne({ email: user.email, password: user.password }, function (err, data) {
        if (!data) return res.sendStatus(401);
        let token = jwt.sign({ userID: data._id }, config.getPublicKey, { expiresIn: config.timeout + 's' });
        res.send({
            token: token,
            timeout: config.timeout
        });
    })
})

module.exports = authRouter;