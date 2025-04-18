const { REST, Routes, SlashCommandBuilder } = require('discord.js');
require('dotenv').config(); // Optional, if using .env for the token

const commands = [
  new SlashCommandBuilder()
    .setName('embed')
    .setDescription('Sends a nice embed')
].map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN || 'YOUR_BOT_TOKEN');

// Use your own client ID and guild ID (if testing in one server)
const CLIENT_ID = '1358962099564318802';
const GUILD_ID = '1358963257641275394'; // Optional for guild-only commands

(async () => {
  try {
    console.log('Registering slash commands...');

    await rest.put(
      Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), // For guild commands (faster)
      // Routes.applicationCommands(CLIENT_ID), // For global commands (can take 1+ hour to update)
      { body: commands }
    );

    console.log('✅ Slash commands registered!');
  } catch (error) {
    console.error('❌ Failed to register commands:', error);
  }
})();
