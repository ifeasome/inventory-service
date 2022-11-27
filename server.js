const express = require('express');
const routes = require('./controllers');
const jwt = require('./utils/jwt');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  if (req.headers['authorization']) {
    const bearer = req.headers['authorization'].split(' ')[1];

    if (jwt.verify(bearer)) {
      return next();
    }
  }

  res.status(401).end();
});


app.use(routes);

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});