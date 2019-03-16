const fs = require('fs');
const PORT = process.env.PORT || 3000;
const app = require('./routes/routes.js');

//ROUTING

//LISTENING

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
