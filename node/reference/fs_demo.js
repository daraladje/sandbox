const fs = require('fs');
const path = require('path');

// Create Folder
// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
//   if (err) throw err;
//   console.log('Folder created...');
// });

// Create & Write to file
// fs.writeFile(
//   path.join(__dirname, '/test', 'hello.txt'),
//   'Hello World',
//   (err) => {
//     if (err) throw err;
//     console.log('File written...');
//     fs.appendFile(
//       path.join(__dirname, '/test', 'hello.txt'),
//       'I love NODE',
//       (err) => {
//         if (err) throw err;
//         console.log('File written...');
//       }
//     );
//   }
// );

// Read File
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Rename File
fs.rename(
  path.join(__dirname, '/test', 'hello.txt'),
  path.join(__dirname, '/test', 'helloworld.txt'),
  (err) => {
    if (err) throw err;
    console.log('File Renamed');
  }
);
