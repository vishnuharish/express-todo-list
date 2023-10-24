const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const db  = require("./models");

const app = express();
const todos = require("./routes/todos");
const PORT = process.env.PORT || 5000
const corsOptions = {
    origin: "*"
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

db.sequelize.sync({force: true}).then(() => {
    console.log("Drop and re-sync db.")
})
app.use(express.json());

app.use("/todos", todos);

app.get("/", (req, res) => {
    res.json({message: "Express is working fine"})
});


app.listen(PORT, () => {
    console.log("APP is listening to the PORT " + PORT)
});

