const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'farm',
  description: 'Cara setting farm',
  category: 'Idle Farm',
  execute: async (message) => {
    const embed = new EmbedBuilder()
      .setTitle('Farm Guide')
      .setColor('Random')
      .addFields(
        { name: "-----------------------------------------------------------------------------------", value: "```Hal-hal yang membuat farm menjadi lebih efesien```", inline: false }
    )
    .addFields(
        { name: "1. Penempatan Farm", value: 
            "> Penting agar farm kalian tidak hancur dengan mudah dan mencegah terjadinya penurunan rank. Jika farm diraid, yang akan diserang terlebih dahulu adalah farm dengan level tertinggi atau jika farm memiliki level yang sama maka yang akan diserang terlebih dahulu adalah farm yang urutanya paling atas.\n\n" +
            "**Contoh:**\n" +
            "wirefactory1\n" +
            "wirefactory2\n" +
            "wirefactory3\n\n" +
            "Jika ketiga farm memiliki level yang sama, maka yang akan diserang terlebih dahulu adalah wirefactory1.\n\n" +
            "Jadi untuk mengantisipasi hal tersebut tempatkan 4 worker terkuat kalian di farm yang sekiranya akan diserang pertama (Bisa dilihat menggunakan `molly wo` untuk cepatnya).\n\n" +
            "> **Note:** Farm event tidak bisa diserang jadi bisa tempatkan worker lemah namun produksi tinggi seperti event worker.",
            inline: false }
    )
    .addFields(
        { name: "2. Best workers for ME event farms", value: 
            "> Saat ini ada 3 worker yang terkuat dan masing masing memiliki jumlah produksi yang sama, yaitu:\n" +
            "> - Spookylvl2\n" +
            "> - Snowylvl2\n" +
            "> - Jumpylvl1\n\n" +
            "Di level satu Jumpy yang paling bagus, namun jika kalian tidak punya maka gunakan spookylvl1 atau snowy lvl1. untuk lovely dan festive lebih jelek dari ketiga tadi namun lebih bagus untuk produktif dari pada regular worker seperti guru,masterful,dll.",
            inline: false }
    )
    .addFields(
        { name: "3. Farm mana yang paling worth untuk dibeli?", value: 
            "> Tergantung budget, Yang termahal tentu paling worth, namun jika kalian kekurangan budget maka belilah farm yang harga productnya selalu di +40%.\n" +
            "> atau beli farm yang product nya selalu di manipulasi, kalian bisa jual product tsb saat +40%. Untuk market manipulasi bisa dilihat di <#1026446438500155432>.\n\n" +
            "> Untuk saat ini farm paling worth itu Soda dan Microwave.",
            inline: false }
    )
    .addFields(
        { name: "Need help?", value: "Jika ada pertanyaan tanyakan di <#1026446438500155432>", inline: false }
    )

    await message.channel.send({ embeds: [embed] });
  },
};
