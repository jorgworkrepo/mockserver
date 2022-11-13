const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

// DOCKER
// const DB = process.env.DATABASE_DEV
//     .replace("<USER>", process.env.DATABASE_USERNAME)
//     .replace("<PASSWORD>", process.env.DATABASE_PASSWORD)

// MONGODB ATLAS
const DB = process.env.DATABASE_DEV.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD,
);

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('DB connection successful!');
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(DB)
  console.log(`App running on port ${port}`);
});
