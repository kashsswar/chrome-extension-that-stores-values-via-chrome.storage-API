const levelup = require('levelup');
const leveldown = require('leveldown');
const path = require('path');

// Replace with your actual Chrome extension ID
const extensionId = 'ddkglaphihilehngnfhkbpnnadonding';

const levelDBPath = path.join(
  process.env.HOME || process.env.USERPROFILE,
  'AppData', 'Local', 'Google', 'Chrome', 'User Data', 'Default', 'Local Extension Settings', extensionId
);

// Open the LevelDB database
const db = levelup(leveldown(levelDBPath));

db.createReadStream()
  .on('data', function (data) {
    console.log(`${data.key} = ${data.value}`);
  })
  .on('error', function (err) {
    console.error('Error reading data:', err);
  })
  .on('close', function () {
    console.log('Stream closed');
  })
  .on('end', function () {
    console.log('Stream ended');
  });
