const express =require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');


router.post("", async (req, res) => {
  try {
    const data = req.body; // Assuming the request body contains the person data

    // Create a new person document using the Mongoose model
    const newMenuItem = new MenuItem(data);

    // Save the new person to the database
    const response = await newMenuItem.save();
    console.log("Data saved");
    res.status(200).json(response);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});



router.get("/", (req, res) => {
  const customisedFood = {
    name: "kajukatli",
    size: "2 cm diameter",
    is_sweet: true,
    is_spicy: false,
  };
  res.send(customisedFood);
});


module.exports =router;
