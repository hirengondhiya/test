const express = require("express");
const path = require("path");
const app = express();

const getResult = require("./getResult");

// sendFile will go here
app.use("/", express.static(path.join(__dirname, "public")));
app.get("/api", async (_, res) => {
  try {
    const result = await getResult();
    res.status(200);
    res.send(result);
  } catch (error) {
    console.log({ error });
    res.status(500);
    res.send({
      error: new Error("error in getting result"),
    });
  }
});
const port = process.env.PORT || 9999;

app.listen(port, () => console.log(`listening on port ${port}!`));
