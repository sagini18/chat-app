const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { default: axios } = require("axios");
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const user = await axios.put(
      "https://api.chatengine.io/users/",
      {
        username,
        secret: username,
        first_name: username,
      },
      { headers: { "private-key": "2c657029-c11f-4f92-a8d0-f0dd63d50c3d" } }
    );
    return res.status(user.status).json(user.data);
  } catch (err) {
    return res.status(err.response.status).json(err.response.data);
  }
});

app.listen(8080, () => {
  console.log("server is running on port 8080");
});
