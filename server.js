const env = require('./config/index');
const app = require('./app');

require('dotenv').config();
require('mongoose').connect(env.DATABASE_STRING);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is listening to PORT: ${PORT}`);
});
