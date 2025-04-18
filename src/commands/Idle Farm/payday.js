const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'payday',
  description: 'Payday Guide',
  category: 'Idle Farm',
  execute: async (message) => {
    const embed = new EmbedBuilder()
      .setTitle('Payday Guide')
      .setColor('Random')
      .addFields(
        { name: "-----------------------------------------------------------------------------------", value: "Best way to power drain (PD):", inline: false }
    )
    .addFields(
        { name: "1. Optimal Boosts", value: 
            "• Wait for **TAX COLLECTOR VICTORY** boost (+30% PD)\n" +
            "• Wait for highest guild market tax reduction buff\n" +
            "• *Pro tip*: During Halloween with Spooker boost + Energy Clover 3/4 (+55% PD possible)",
            inline: false }
    )
    .addFields(
        { name: "2. Market Strategy", value: 
            "**Sell thresholds:**\n" +
            "• Sell anything above -17% (-17% → +40% = SELL)\n" +
            "• Hold anything -40% → -18% (KEEP)\n" +
            "• *Important*: If we're market manipulating, coordinate sales to avoid disrupting pushes",
            inline: false }
    )
    .addFields(
        { name: "3. Asset Management", value: 
            "• Sell all investment stonks\n" +
            "• Sell all farms\n" +
            "• *Protection tip*: Buy free forests temporarily to avoid raids during transactions",
            inline: false }
    )
    .addFields(
        { name: "4. Power Drain Execution", value: 
            "1. Buy -40% items until 0 idlons\n" +
            "2. Buy ALL debts\n" +
            "3. Execute PD",
            inline: false }
    )
    .addFields(
        { name: "5. Post-PD Strategy (30m Grace Period)", value: 
            "• Reacquire farms and assign workers\n" +
            "• Conduct raids for quick resources\n" +
            "• Sell raid loot\n" +
            "• Purchase best available farms before grace period ends",
            inline: false }
    )
    .addFields(
        { name: "Notes", value: 
            "• 30-minute raid protection after PD\n" +
            "• Prioritize rebuilding farm defenses first\n" +
            "• Coordinate with guild for market manipulations",
            inline: false }
    );

    await message.channel.send({ embeds: [embed] });
  },
};
