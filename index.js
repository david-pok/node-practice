const express = require("express");

const server = express();

server.use(express.json());

let hobbits = [
  {
    id: 1,
    name: "Bilbo Baggins",
    age: 111,
  },
  {
    id: 2,
    name: "Frodo Baggins",
    age: 33,
  },
];
let nextId = 3;

server.get("/", (req, res) => {
  res.send("Hello World");
});

server.get("/hobbits", (req, res) => {
  // query string parameters get added to req.query
  const sortField = req.query.sortby || "id";

  // apply the sorting
  const response = hobbits.sort((a, b) =>
    a[sortField] < b[sortField] ? -1 : 1
  );

  res.status(200).json(response);
});

server.get("/hobbits/:id", (req, res) => {
  const hobbit = hobbits.find((h) => h.id == req.params.id);

  if (!hobbit) {
    res.status(404).json({ message: "Hobbit does not exist" });
  } else {
    res.status(200).json(hobbit);
  }
});

server.post("/hobbits", (req, res) => {
  const hobbit = req.body;
  hobbit.id = nextId++;

  hobbits.push(hobbit);

  res.status(201).json(hobbits);
});

server.put("/hobbits/:id", (req, res) => {
  const hobbit = hobbits.find((h) => h.id == req.params.id);

  if (!hobbit) {
    res.status(404).json({ message: "Hobbit does not exist" });
  } else {
    // modify the existing hobbit
    Object.assign(hobbit, req.body);

    res.status(200).json(hobbit);
  }
});

server.delete("/hobbits/:id", (req, res) => {
  const id = req.params.id;
  // or we could destructure it like so: const { id } = req.params;
  res.status(200).json({
    url: `/hobbits/${id}`,
    operation: `DELETE for hobbit with id ${id}`,
  });
});

server.listen(8000, () => console.log("API running on port 8000"));
