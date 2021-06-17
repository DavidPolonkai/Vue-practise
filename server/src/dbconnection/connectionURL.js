const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const url = "mongodb+srv://default-user:NCVlaxHz2v2bK0SP@cluster0.tv5xn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

exports.MongoClient = MongoClient;
exports.url = url;