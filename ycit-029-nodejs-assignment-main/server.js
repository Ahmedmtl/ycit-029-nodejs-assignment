const { Router } = require("express");
const express = require("express");

const app = express();

const data = [
  {
    id: 1,
    name: "John Doe",
    age: 32,
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 30,
  },
  {
    id: 3,
    name: "John Smith",
    age: 25,
  },
];

// This route gets *ALL* the users
app.get("/api/users", (req, res) => {
  res.json(data);
});

// Add a new route to get a *SINGLE* user (you can use either path param or query param)
// /api/users/1      <-- path param (req.params.id)
Router.get("/api/users/1", async (req, res) => {
  const userId = req.param.id;
  try {
    const user = await data.findById(userId).exec();
    res.json(data);
  }  catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});
// /api/users?id=1   <-- query param (req.query.id) If you go with query param, just modify the existing endpoint above instead of creating a new endpoint

// BONUS QUESTION - Add routes to implement all the CRUD operations (POST, PUT, DELETE)

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
