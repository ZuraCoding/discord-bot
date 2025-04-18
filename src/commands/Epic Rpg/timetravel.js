const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'timetravel',
  description: 'TT = susu',
  category: 'Epic Rpg',
  execute: async (message) => {
    const embed = new EmbedBuilder()
      .setTitle('TIME TRAVEL GUIDE')
      .setColor('Random')
      .addFields(
        { name: "-----------------------------------------------------------------------------------", value: "Mereset karakter kamu ke level 1/area 1, namun membuka fitur baru dalam permainan dan meningkatkan peluang XP dan item drop.", inline: false },
        { name: "Cara Time Travel", value: "Gunakan `/time travel` jika kamu telah memenuhi syarat.\n\n**Penting!** Kamu akan kehilangan semua kecuali item tertentu. Pastikan kamu telah melakukan semua yang ingin kamu lakukan. Cek `/time travel bonuses` untuk info TT tujuanmu.", inline: false }
    )
    .addFields(
        { name: "SYARAT TIME TRAVEL", value: 
            "🔹 TT 0: Mengalahkan dungeon 10, mencapai area 11\n" +
            "🔹 TT 1-2: Mengalahkan dungeon 11, mencapai area 12\n" +
            "🔹 TT 3-4: Mengalahkan dungeon 12, mencapai area 13\n" +
            "🔹 TT 5-9: Mengalahkan dungeon 13, mencapai area 14\n" +
            "🔹 TT 10-24: Mengalahkan dungeon 14, mencapai area 15\n" +
            "🔹 TT 25+: Mengalahkan dungeon 15-1",
            inline: false }
    )
    .addFields(
        { name: "ITEM YANG TIDAK HILANG", value: 
            "🔹 Active boosts\n" +
            "🔹 Arena cookies\n" +
            "🔹 Coins (termasuk bank account)\n" +
            "🔹 Dragon essences\n" +
            "🔹 EPIC berries\n" +
            "🔹 EPIC coins\n" +
            "🔹 EPIC shop items\n" +
            "🔹 Event items (jika event aktif)\n" +
            "🔹 GODLY horse tokens\n" +
            "🔹 Guild rings\n" +
            "🔹 Legendary toothbrushes\n" +
            "🔹 Magic chairs\n" +
            "🔹 Profession levels\n" +
            "🔹 OMEGA horse tokens\n" +
            "🔹 Party poppers\n" +
            "🔹 TIME capsules\n" +
            "🔹 TIME cookies\n" +
            "🔹 TIME dragon essences\n" +
            "🔹 Your guild\n" +
            "🔹 Your horse\n" +
            "🔹 Your marriage partner\n" +
            "🔹 Your pets",
            inline: false }
    )
    .addFields(
        { name: "Need Help?", value: "Jika ada pertanyaan tanyakan di <#1026446438500155432>", inline: false }
    );

    await message.channel.send({ embeds: [embed] });
  },
};
