const express = require('express');
const nsfw = require('./nsfw/nsfw');
const port = process.env.PORT || 8080;
const app = express();

app.listen(port);
app.use(nsfw);
app.get('/',async(req,res) => {
  await res.send('<div align="center"><h1>Server telah berjalan</h1></div>');
});