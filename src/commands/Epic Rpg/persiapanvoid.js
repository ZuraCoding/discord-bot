const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'persiapanvoid',
  description: 'Guide Diov',
  category: 'Epic Rpg',
  execute: async (message) => {
    const embed = new EmbedBuilder()
      .setTitle('Persiapan Void')
      .setColor('Random')
      .addFields(
        { name: "Apa itu Void?", value: "Void adalah konten baru mid game yang bisa kalian akses setelah TT25", inline: false },
        { name: "Alasan ke Void", value: "1. Progress TT lebih cepat\n2. Card khusus Void\n3. VOIDog\n4. potion yang lebih mudah di craft jika berada di Void\n5. Void Lootbox", inline: false },
        { name: "Persyaratan ke Void", value: "1. Mengalahkan Epic Npc\n2. Memiliki 12b mats\n3. 60 super fish\n4. Void Enchantment\n5. Horse yang sesuai\n6. Quest ready (opsional)", inline: false }
    )
    .addFields(
        { name: "Detail Epic Npc Fight", value: "🔹 T9+ horse (T10 recommended)\n🔹 GODLY cookie\n🔹 No gear\n🔹 15m+ wooden logs\n🔹 3,000+ coolness\n🔹 1,000+ Life potion\n🔹 TT 25+\n\n**REQUIRED PETS:**\n🔹 4 T10+ basic pets\n1. 3 harus EPIC skill\n2. Maks 1 time traveler skill\n3. Jika ada TT skill harus EPIC\n🔹 No active pet adventures", inline: false }
    )
    .addFields(
        { name: "Fast method mendapat 12b Mats", value: "Setelah ascend (TT4-10):\n1. Timbrun mats pakai top hat sampai 50m-100m di A10\n2. Fokus rush TT sambil Timepotting\n3. Dipastikan mats akan >1b saat TT25+", inline: true },
        { name: "Void Armor", value: "Wajib untuk Void armor pertama ketika pertama kali void", inline: true },
        { name: "Horse Recommendation", value: "🔹 Epicness <45: Defender\n🔹 Epicness ≥45: Magic\n(khusus T9)", inline: true }
    )
    .addFields(
        { name: "Quest Strategy", value: "Biarkan quest ready sebelum ke A16:\n- Selesaikan di Void untuk mendapatkan banyak dark energy\n- Mempermudah craft Void armor", inline: false },
        { name: "Need Help?", value: "Jika ada pertanyaan tanyakan di <#1026446438500155432>", inline: false }
    );

    await message.channel.send({ embeds: [embed] });
  },
};
