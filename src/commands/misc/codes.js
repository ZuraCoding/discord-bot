const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'codes',
  description: 'Reedemable code',
  category: 'General',
  execute: async (message) => {
    const embed = new EmbedBuilder()
      .setTitle('Codes')
      .setColor('Random')
      .addFields(
        { name: " Epic RPG Active Codes", value: 
            "```\n" +
            "rpg\n" +
            "code\n" +
            "veryepic\n" +
            "uwu\n" +
            "eternal\n" +
            "cave1\n" +
            "buried12\n" +
            "volcano29\n" +
            "water58\n" +
            "miner\n" +
            "ggegg\n" +
            "khds0a9\n" +
            "al3kd9s\n" +
            "gk69sl3\n" +
            "ro3ks9s\n" +
            "```",
            inline: true }
    )
    .addFields(
        { name: " Idle Farm Active Codes", value: 
            "```\n" +
            "ggegg\n" +
            "```",
            inline: true }
    )
    .addFields(
        { name: "How to Redeem", value: 
            "Epic RPG: `rpg code <code>`\n" +
            "Idle Farm: `idle code <code>`",
            inline: false }
    )
    .setFooter({ text: "Last updated: " + new Date().toLocaleDateString() });
        
    

    await message.channel.send({ embeds: [embed] });
  },
};
