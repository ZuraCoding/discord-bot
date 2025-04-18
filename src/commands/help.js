const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'help',
  description: 'Menampilkan semua perintah yang tersedia.',
  category: 'General',

  execute: async (message, args, client) => {
    const categories = {};
    const excludedCommands = [
      'auto',
      'kick',
      'ban',
      'ping',
      'autorole-configure',
      'autorole-disable',
    ];

    // Group commands into categories
    client.commands.forEach(cmd => {
      if (excludedCommands.includes(cmd.name)) return;

      const category = cmd.category || 'Other Commands';
      if (!categories[category]) categories[category] = [];
      categories[category].push(cmd);
    });

    const embed = new EmbedBuilder()
      .setTitle('📚 Command List 📚')
      .setColor('Random')
      .setFooter({ text: 'Gunakan ? untuk menjalankan perintah. Contoh: "?voidcook"' });

    const orderedFields = [];

    const pushCategory = (catName) => {
      if (categories[catName]) {
        orderedFields.push({
          name: catName,
          value: categories[catName]
            .map(c => `\`${c.name}\` - ${c.description}`)
            .join('\n'),
        });
        delete categories[catName];
      }
    };

    // Push categories in custom order
    pushCategory('Epic Rpg');
    pushCategory('Idle Farm');
    pushCategory('General');

    // ❌ Skip Economy
    delete categories['Economy'];

    // Push remaining ones (except "Other Commands" for now)
    Object.keys(categories)
      .filter(cat => cat !== 'Other Commands')
      .sort()
      .forEach(cat => pushCategory(cat));

    // Push uncategorized last
    pushCategory('Other Commands');

    embed.addFields(orderedFields);

    await message.channel.send({ embeds: [embed] });
  }
};
