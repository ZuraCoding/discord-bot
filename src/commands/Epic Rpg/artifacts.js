const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'artifacts',
  description: 'Menampilkan chart artifact Epic RPG.',
  category: 'Epic Rpg',

  execute: async (message, args, client) => {
    const embed = new EmbedBuilder()
      .setTitle(' Artifact Chart')
      .setDescription('Berikut artifact di Epic Rpg dan cara mendapatkanya:')
      .setImage('https://cdn.discordapp.com/attachments/1174705423018901564/1284866959686762516/artifactchart.png?ex=67fdb4da&is=67fc635a&hm=8e2c492207d9c72986b09a004306a6263f08ea12e91e122505dcff90a3211b1c')
      .setColor('Random');

    await message.reply({ embeds: [embed] });
  }
};
