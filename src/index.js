require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');
const mongoose = require('mongoose');
const eventHandler = require('./handlers/eventHandler');
const commandHandler = require('./handlers/commandHandler');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.GuildPresences,
    IntentsBitField.Flags.MessageContent,
  ],
});

// Store last voidcheck messages per channel
client.voidCheckData = new Map();

(async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to DB.');

    // Initialize handlers
    commandHandler(client);
    eventHandler(client);


    await client.login(process.env.TOKEN);
  } catch (error) {
    console.log(`❌ Error: ${error}`);
  }
  
  process.on('unhandledRejection', (err) => {
    console.error('Unhandled promise rejection:', err);
  });
  
  process.on('uncaughtException', (err) => {
    console.error('Uncaught exception:', err);
  });
})();