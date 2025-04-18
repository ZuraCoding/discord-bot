const fs = require('fs');
const path = require('path');

const getAllFiles = (dirPath, foldersOnly = false) => {
  let files = [];

  for (const file of fs.readdirSync(dirPath)) {
    const filePath = path.join(dirPath, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      if (foldersOnly) {
        files.push(filePath);
      } else {
        files = [...files, ...getAllFiles(filePath)];
      }
    } else if (!foldersOnly && file.endsWith('.js')) {
      files.push(filePath);
    }
  }

  return files;
};

module.exports = getAllFiles;


module.exports = (directory, foldersOnly = false) => {
  let fileNames = [];

  const files = fs.readdirSync(directory, { withFileTypes: true });

  for (const file of files) {
    const filePath = path.join(directory, file.name);

    if (foldersOnly) {
      if (file.isDirectory()) {
        fileNames.push(filePath);
      }
    } else {
      if (file.isFile()) {
        fileNames.push(filePath);
      }
    }
  }

  return fileNames;


};
