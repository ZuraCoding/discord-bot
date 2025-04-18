const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'av',
  description: 'Melihat avatar kamu atau orang lain.',
  category: 'General',

  execute: async (message, args) => {
    const target = message.mentions.users.first() || message.author;

    const embed = new EmbedBuilder()
      .setTitle(`Avatar dari ${target.username}`)
      .setImage(target.displayAvatarURL({ dynamic: true, size: 4096 }))
      .setColor('Random')
      .setFooter({ text: `Diminta oleh ${message.author.username}` });

    message.channel.send({ embeds: [embed] });
  },
};
