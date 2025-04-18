const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'voidcook',
  description: 'Cook Stats for Diov YOLO',
  category: 'Epic Rpg',
  execute: async (message) => {
    const embed = new EmbedBuilder()
      .setTitle('YOLO cook')
      .setColor('Random')
      .addFields(
        { name: "__VOID AREAS COOKING GUIDE__", value: "What to cook in each area", inline: false }
    )
    .addFields(
        { name: "🔹 D16 Requirements", value: 
            "**Fruit Salad:** 17,405 (Level 1500)\n" +
            "**Apple Juice:** 375 (Level 1500)",
            inline: false }
    )
    .addFields(
        { name: "🔹 D17 One-shot Needs", value: 
            "**Fruit Salad:** 35,000 until success\n" +
            "**Apple Juice:** 4,625 until success",
            inline: false }
    )
    .addFields(
        { name: "🔹 D18 One-shot Needs", value: 
            "**Fruit Salad:** 240,000 (if fail → 300,000)\n" +
            "**Apple Juice:** 18,000 (if fail → 23,750)",
            inline: false }
    )
    .addFields(
        { name: "🔹 D19 One-shot Needs", value: 
            "**Fruit Salad:** 1.15 million\n" +
            "**Apple Juice:** 103,750\n\n" +
            "**If failed:** Cook 50% of last cooked amount",
            inline: false }
    )
    .addFields(
        { name: "🔹 D20 Requirements", value: 
            "**Fruit Salad:** 5.2 million (base)\n" +
            "**Apple Juice:** 425,000 (base)\n\n",
            inline: false }
    );

    await message.channel.send({ embeds: [embed] });
  },
};

