const express = require("express");

const raceRoutes = require("./races/raceRoutes");
const villainRoutes = require("./villains/villainRoutes");

const server = express();

server.use("/races", raceRoutes);
server.use("/villains", villainRoutes);

server.use("/", (req, res) => res.send("API up and running"));

server.listen(9000, () => console.log("Up on port 9000"));
