const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'idlons',
  description: 'Cara cepat kaya di Idle Farm',
  category: 'Idle Farm',
  execute: async (message) => {
    const embed = new EmbedBuilder()
      .setTitle('Cara tercepat mengumpulkan Idlons')
      .setColor('Random')
      .addFields(
        { name: "-----------------------------------------------------------------------------------", value: "```Kaya = Idlons banyak = Idluck saat PD melimpah = Good```", inline: false }
    )
    .addFields(
        { name: "1. Ikuti Market Manipulating", value: 
            "> Ini adalah cara tercepat dan bisa menggandakan Idlons dalam kurun waktu yang singkat.\n\n" +
            "> **Bagaimana cara kerjanya?**\n" +
            "> Player membeli item yang harganya -40% sebanyak banyaknya → tunggu beberapa hari hingga harga item tersebut +40% → jual product tersebut → Idlons bertambah berkali lipat\n\n" +
            "> **Cara tahu item mana yang sedang di push:**\n" +
            "> Pantau <#1026446438500155432> - item yang akan dimanipulasi akan diberitahu disitu",
            inline: false }
    )
    .addFields(
        { name: "2. Strategi Tambahan", value: 
            "• **Beli saat -40%**: Harga terendah untuk profit maksimal\n" +
            "• **Jual saat +40%**: Harga tertinggi untuk keuntungan besar\n" +
            "• **Sabar**: Butuh waktu beberapa hari untuk harga naik\n" +
            "• **Kolaborasi**: Ikuti arahan dari channel market",
            inline: false }
    )
    .addFields(
        { name: "3. Tips Penting", value: 
            "• Jangan panik jual sebelum harga +40%\n" +
            "• Diversifikasi investasi di beberapa item\n" +
            "• Selalu pantau update di channel market\n" +
            "• Siapkan modal awal yang cukup",
            inline: false }
    )
    .addFields(
        { name: "Support", value: "Untuk info market manipulation terupdate, kunjungi <#1026446438500155432>", inline: false }
    )

    await message.channel.send({ embeds: [embed] });
  },
};
