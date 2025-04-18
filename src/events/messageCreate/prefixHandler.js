module.exports = async (client, message) => {
  const prefix = '?';

  if (!message || !message.content || message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command = client.commands.get(commandName);
  if (!command) return;
  
  if (command.disabled) {
    console.log(`⛔ Skipped disabled command: ${command.name}`);
    return;
  }
  

  try {
    await command.execute(message, args, client); // ✅ client is passed
  } catch (error) {
    console.error(error);
    message.reply('❌ Terjadi kesalahan saat menjalankan perintah.');
  }
};


  