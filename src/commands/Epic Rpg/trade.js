const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'trade',
  description: 'Basic Trade Guide',
  category: 'Epic Rpg',
  execute: async (message) => {
    const embed = new EmbedBuilder()
      .setTitle('TRADE GUIDE')
      .setColor('Random')
      .addFields(
        { name: "-----------------------------------------------------------------------------------", value: "Fungsi trade seperti menimbun barang - timbun di area bawah lalu bawa ke area atas untuk dilipatgandakan.", inline: false }
    )
    .addFields(
        { name: "Area 1-3", value: "🔹 Trade semua mats → fish", inline: false },
        { name: "Area 4-5", value: "🔹 Trade semua mats → apple", inline: false },
        { name: "Area 6-7", value: "🔹 Pastikan tidak ada mats di apple, trade semua mats → ruby (karena nilai trade apple akan turun)", inline: false }
    )
    .addFields(
        { name: "Area 8", value: "🔹 Trade semua mats → apple", inline: false },
        { name: "Area 9", value: "🔹 Trade semua mats → fish", inline: false },
        { name: "Area 10-15", value: "🔹 Konsisten di log saja (tidak ada penggandaan)", inline: false }
    )
    .addFields(
        { name: "Tips", value: "Gunakan <@902703931275247637> dengan command `rpg p trade` untuk panduan real-time", inline: false },
        { name: "Need Help?", value: "Tanya di <#1026446438500155432>", inline: false }
    );

    await message.channel.send({ embeds: [embed] });
  },
};

