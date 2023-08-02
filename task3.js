// Task 3: Asynchronous File Handling
// Create a Node.js script that reads a text file named "data.txt" and counts the number of words in it. 
// The script should print the total word count to the console.

import fs from 'fs'

function countWordsInFile(fileName) {
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err.message);
    } else {
      const wordCount = data.trim().split(/\s+/).length;
      console.log('Total word count:', wordCount);
    }
  });
}

const fileName = 'data.txt';
countWordsInFile(fileName);
