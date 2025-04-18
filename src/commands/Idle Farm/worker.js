const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'worker',
  description: 'Cara Cepat Menaikan Level Worker',
  category: 'Idle Farm',
  execute: async (message) => {
    const embed = new EmbedBuilder()
      .setTitle('Mini Event Cycle')
      .setColor('Random')
      .addFields(
        { name: "Goal", value: "```Tujuan akhir nya adalah agar mendapatkan banyak energy,\nenergy banyak = spam raid = more lootbox = strong worker```", inline: false }
    )
    .addFields(
        { name: "4 ME Cycle", value: 
            "**Cycle:** speedrunning week > none > worker rage > none > energy fest > none > lootbox hotsale > none >",
            inline: false }
    )
    .addFields(
        { name: "1. ME Speedrunning Week", value: 
            "> **Paling penting** yang menentukan hasil akhir\n" +
            "> - Beli time farm\n" +
            "> - Tempatkan worker event paling produktif\n" +
            "> - Claim setiap 12h (optimal untuk proc guru)\n" +
            "> - Wajib pakai boost: party popper, worger, valentine muffin/lootbox cake (muffin > cake)\n" +
            "> - Beli semua item ME shop kecuali unlimited token\n" +
            "> **NOTE:** JANGAN gunakan item time, timbun sampai ME Energy Fest",
            inline: false }
    )
    .addFields(
        { name: "2. ME Worker Rage", value: 
            "> Tbh ME paling sampah😹\n" +
            "> - Ga perlu action khusus\n" +
            "> - Beli farm (opsional)\n" +
            "> - Beli semua item ME shop kecuali unlimited token",
            inline: false }
    )
    .addFields(
        { name: "3. ME Energy Fest", value: 
            "> - Spam claim energy\n" +
            "> - Beli energy farm + worker produktif\n" +
            "> - Pakai boost claim bonus\n" +
            "> - Beli semua item ME shop\n" +
            "> **NOTE:** Habiskan semua time item, timbun energy item untuk Lootbox Hotsale",
            inline: false }
    )
    .addFields(
        { name: "4. ME Lootbox Hotsale", value: 
            "> - Bonus x4 lootbox drop\n" +
            "> - Pakai semua energy item\n" +
            "> - Pakai boost raid/lootbox drops\n" +
            "> - Beli semua item ME shop\n" +
            "> - Open semua lootbox hasil raid\n\n" +
            "**Testimoni:** Power naik dari 800 → 1500+",
            inline: false }
    )
    .addFields(
        { name: "Pro Tips", value: 
            "• Beli time speeder/compressor dari daily shop\n" +
            "• Manfaatkan boost event (valentine muffin, christmas bell, dll)\n" +
            "• Timbun boost untuk 1 tahun pemakaian\n\n" +
            "**Progress tergantung:**\n" +
            "• Jumlah guru proc saat Speedrunning Week\n" +
            "• Contoh: 1 guru proc/7 hari vs full 7 hari proc (mimpi basah)",
            inline: false }
    );

    await message.channel.send({ embeds: [embed] });
  },
};
