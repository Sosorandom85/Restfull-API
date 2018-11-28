const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const models = require("./models");
const cors = require('cors')

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get("/api/info", (req, res) => models.students.findAll({})
.then(infos => res.json(infos)
));
app.post("/api/modif",(req,res) =>{
    const newStudent = new models.students({
        name: req.body.name,
        lastname: req.body.lastname
    })
    newStudent.save()
})

models.sequelize.sync().then(()=>{
    app.listen(process.env.PORT || 4242)
})