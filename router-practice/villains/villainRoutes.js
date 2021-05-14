const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const villains = ["Sarumon", "Sauron", "Nazghul"];

  res.status(200).json(villains);
});

module.exports = router;
