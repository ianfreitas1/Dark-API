const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Load models
const Character = require('./models/Character');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// Read json files
const characters = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/characters.json`, 'utf-8')
);

// Import into DB
const importData = async () => {
  try {
    await Character.create(characters);
    console.log('Data imported...');
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

// Delete data
const deleteData = async () => {
  try {
    await Character.deleteMany();
    console.log('Data destroyed...');
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] == '-d') {
  deleteData();
}
