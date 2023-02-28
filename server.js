const express = require("express");

const app = express();


app.use("/", (req, res) => {

res.send("hello from the server")

})

app.listen(3000, (req, res) => {
	console.log("app is running on port 3000")
})
