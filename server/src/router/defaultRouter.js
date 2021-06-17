const defaultRouter = require("express").Router();


defaultRouter.get('/todo', (req, res) => {
    res.send([
        'A',
        'B'
    ])
})



module.exports = defaultRouter;