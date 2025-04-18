const fs = require('fs');
const path = require('path');
const { Collection } = require('discord.js');

function getAllCommandFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllCommandFiles(fullPath, arrayOfFiles);
    } else if (file.endsWith('.js')) {
      arrayOfFiles.push(fullPath);
    }
  }

  return arrayOfFiles;
}

module.exports = (client) => {
  client.commands = new Collection();

  const commandFiles = getAllCommandFiles(path.join(__dirname, '..', 'commands'));

  for (const file of commandFiles) {
    const command = require(file);
    if (command.name) {
      client.commands.set(command.name, command);
    }
  }
  
  console.log(`✅ Loaded ${client.commands.size} commands.`);
};