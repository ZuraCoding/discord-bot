const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'upgrade',
  description: 'Idle Upgrade Advice',
  category: 'Idle Farm',
  execute: async (message) => {
    const embed = new EmbedBuilder()
      .setTitle('Priority Upgrade In Idle Farm')
      .setColor('Random')
      .addFields(
        { name: "-----------------------------------------------------------------------------------", value: "by defaultscott", inline: false }
    )
    .addFields(
        { name: "1. Farm Slots", value: 
            "- **Important!**\n" +
            "- Buy until you have 1 more than your current worker count\n" +
            "- Example: If you have 12 workers, buy 13 farm slots",
            inline: true }
    )
    .addFields(
        { name: "2. Energy Regeneration", value: 
            "- **Important!**\n" +
            "- Upgrade this evenly with ???\n" +
            "- Affects OHMMM events (Oasis server good for ohmmmms)",
            inline: true }
    )
    .addFields(
        { name: "3. Worker Efficiency", value: 
            "- **Important!**\n" +
            "- Controls farm production (including event farms)\n" +
            "- Upgrade evenly with ?\n" +
            "- **Always focus on this**",
            inline: true }
    )
    .addFields(
        { name: "4. Max Energy", value: 
            "- **Important!**\n" +
            "- Upgrade evenly with ?\n" +
            "- Affects Vote energy regen amount",
            inline: true }
    )
    .addFields(
        { name: "5. Payday Rewards", value: 
            "- **Important!**\n" +
            "- Upgrade evenly with ?\n" +
            "- **Always focus on this**",
            inline: true }
    )
    .addFields(
        { name: "6. Payday Keep", value: 
            "- **BAD**\n" +
            "- Don't upgrade\n" +
            "<:anm_angry_dog:1215469537579892746> <:bonk:1191592547462688768>",
            inline: true }
    )
    .addFields(
        { name: "7. Team Farm Life (TFL)", value: 
            "- Only needed if top 12 guild power (check via `Molly guild`)\n" +
            "- If top 12: upgrade to TFL 3\n" +
            "- Otherwise: ignore",
            inline: true }
    )
    .addFields(
        { name: "8. Farm Bundle", value: 
            "- **Important!**\n" +
            "- Buy as soon as able\n" +
            "- Save idlucks for next league bundle\n" +
            "- Check leagues via `idle league rewards`",
            inline: true }
    )
    .addFields(
        { name: "9. Quality of Life", value: 
            "- **Important!**\n" +
            "- Makes idle gameplay easier",
            inline: true }
    )
    .addFields(
        { name: "10. Roll Luck", value: 
            "- Somewhat important\n" +
            "- Raid > Roll currently\n" +
            "- Will be buffed eventually",
            inline: true }
    )
    .addFields(
        { name: "11. Activity Discount", value: 
            "- **Important!**\n" +
            "- Crucial for event markets\n" +
            "- Upgrade evenly with ?",
            inline: true }
    )
    .addFields(
        { name: "12. Claim Time", value: 
            "- Good for increased production\n" +
            "- Upgrade somewhat evenly with others",
            inline: true }
    )
    .addFields(
        { name: "Upgrade Priorities", value: 
            "**Upgrade evenly:** 2, 3, 4, 5, 11, 12\n" +
            "**As available:** 1, 8, 9\n" +
            "**Never:** 6\n\n" +
            "**Playstyle Focus:**\n" +
            "- Active players: Focus on 2\n" +
            "- Casual players: Focus on 4 and 11\n" +
            "- Everyone: Always focus on 3 and 5",
            inline: false }
    )

    await message.channel.send({ embeds: [embed] });
  },
};
