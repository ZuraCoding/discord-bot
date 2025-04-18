const path = require('path');
const getAllFiles = require('../utils/getAllFiles');

module.exports = (client) => {
  const eventFolders = getAllFiles(path.join(__dirname, '..', 'events'), true);

  for (const folder of eventFolders) {
    const eventFiles = getAllFiles(folder);
    const eventName = folder.replace(/\\/g, '/').split('/').pop();

    console.log(`📦 Loading event: ${eventName}`);

    client.on(eventName, async (...args) => {
      for (const file of eventFiles) {
        const event = require(file);

        // ✅ Support both function and object with .execute
        if (typeof event === 'function') {
          console.log(`✅ Loaded handler (function): ${file}`);
          await event(client, ...args);
        } else if (event && typeof event.execute === 'function') {
          console.log(`✅ Loaded handler (object): ${file}`);
          await event.execute(...args);
        } else {
          console.warn(`⚠️ Skipped ${file} — not a valid event.`);
        }
      }
    });
  }
};
