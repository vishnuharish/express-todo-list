const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.json({message: "Todos app is working fine"})
})

module.exports = router;