const mongoRouter = require("express").Router();
const MongoClient = require("../dbconnection/connectionURL").MongoClient;
const url = require("../dbconnection/connectionURL").url;

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


    mongoRouter.get('/todo', (req, res) => {
        const collection = client.db("test").collection("todo")
        collection.find().toArray(function (err, results) {
          if (err) {
            console.log(err)
            res.send([])
            return
          }
          
          res.send(results)
        })
    })
      
    mongoRouter.post('/addTodo', (req, res) => {
        const collection = client.db('test').collection('todo')
        var todo = req.body
        collection.insertOne({title: todo.title, body: todo.body}, function (err, results) {
          if (err) {
            console.log(err)
            res.send('')
            return
          }
          res.send(results.ops[0]) 
        })
    })
      
mongoRouter.delete('/deleteTodo/:id', (req, res) => {
    const collection = client.db('test').collection('todo')
    var id = req.params.id;
    collection.deleteOne({ _id: id }), function (err, results) {
        if (err) {
            console.log(err)
            res.send('')
            return
        }
        res.send(results.ops[0]);
    }
    })





module.exports = mongoRouter;