express = require('express');

let app = express();
app.use(express.static('content'));

const port = 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
})
