const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './.env' });

mongoose.connect(process.env.DATABASE_STRING, () => {
  console.log('Database connected');
});

app.listen(process.env.PORT, () => {
  console.log(`Server is listening to PORT: ${process.env.PORT}`);
});
