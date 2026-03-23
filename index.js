require("dotenv").config();

const express = require("express");
const path = require("path");
const axios = require("axios");

const app = express();
const PORT = 3000;

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.hubapi.com/crm/v3/objects/2-59561671?properties=name,rarity,price",
      {
        headers: {
          Authorization: `Bearer ${process.env.PRIVATE_APP_TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );

    const records = response.data.results;

    res.render("homepage", {
      title: "Homepage",
      records
    });

  } catch (error) {
    console.error(error.response?.data || error.message);
    res.send("Error fetching custom object records");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get("/update-cobj", (req, res) => {
  res.render("updates");
});

app.post("/update-cobj", async (req, res) => {
  try {
    const { name, rarity, price } = req.body;

    await axios.post(
      "https://api.hubapi.com/crm/v3/objects/2-59561671",
      {
        properties: {
          name,
          rarity,
          price
        }
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.PRIVATE_APP_TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );

    res.redirect("/");
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.send("Error creating record");
  }
});