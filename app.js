const express = require('express');
const app = express();

app.use((req,res,
         next) => {
  console.log("[NEXT] -> In the other Middleware");
  res.send('<h1>Hello world my name is Ivo Nunes!</h1>');
});

app.listen(3000);
