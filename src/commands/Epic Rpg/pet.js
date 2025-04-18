const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'pet',
  description: 'I hate pet',
  category: 'Epic Rpg',
  execute: async (message) => {
    const embed = new EmbedBuilder()
      .setTitle('Imagine touch pet eww')
      .setColor('Random')
      .addFields(
        { name: "Alasan Kelola Pet Sejak Dini", value: "1. Butuh 3 Pet basic T5 untuk dungeon TT25+\n2. Syarat lawan epic npc: 4 TX pet (3 skill epic)\n3. Ascend pet\n4. Tier lebih tinggi = chance DE lebih besar\n5. Part Pocket Watch butuh banyak epic", inline: false }
    )
    .addFields(
        { name: "1. Persyaratan 3 Pet Basic T5", value: "Cukup fusion sampai T5 untuk setiap jenis pet (cat, dog, dragon)", inline: true },
        { name: "2. Syarat 4 TX Pet untuk Epic NPC", value: "Bisa kombinasi apapun (contoh: dog,dog,dog,dog)\n3 dari 4 harus punya skill epic\n**Cara efisien dapatkan TX:**", inline: false }
    )
    .addFields(
        { name: "Metode 1: Fusion", value: "🔹 Tunggu sampai TT30+ untuk chance bagus\n🔹 Fusion beberapa agar slot tidak penuh\n🔹 Cek chance pakai <@902703931275247637> (tpfc)", inline: true },
        { name: "Metode 2: Beli dengan Coolness", value: "🔹 Lanjutkan Ultr run sampai 6000 coolness, tidak berhenti di 3000\n🔹 Beli TX pet di ultr shop (6000 coolrency)\n🔹 Free 1 Pet TX, Reset tiap tanggal 1\n🔹 Butuh banyak TC dan waktu", inline: true }
    )
    .addFields(
        { name: "Pengaruh Horse Tier", value: "🔹 Horse TX di TT20: Mudah dapat TX pet jadi bisa hiraukan metode ke 2\n🔹 Horse >TX: Disarankan pakai Metode 2", inline: false }
    )
    .addFields(
        { name: "3. Ascend Pet", value: "🔹 Butuh 7 skill di 1 pet\n🔹 [Baca guide lengkap](https://discord.com/channels/713541415099170836/1233303625565212796)", inline: true },
        { name: "4. Dragon Essence Chance", value: "🔹 TX: 25% base\n🔹 +7.5% per rank up\n🔹 Max 85%", inline: true },
        { name: "5. Part Pocket Watch", value: "🔹 Chance meningkat berdasarkan:\n- Jumlah epic pet\n- Jumlah TT\n", inline: true }
    )
    .addFields(
        { name: "Need Help?", value: "Jika ada pertanyaan tanyakan di <#1026446438500155432>", inline: false }
    );

    await message.channel.send({ embeds: [embed] });
  },
};
