const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'coolness',
  description: 'Penjelasan tentang coolness',
  category: 'Epic Rpg',
  execute: async (message) => {
    const embed = new EmbedBuilder()
      .setTitle('Apa itu coolness dan bagaimana cara mendapatkanya serta apa benefit yang diberikan?')
      .setColor('Random')
    .addFields(
    { name: "**Coolness**", value: "Item di RPG yang cukup penting dan dibutuhkan di mid game, tepatnya saat ingin melawan EPIC NPC.", inline: false }
)
.addFields(
    { name: "**Cara Mendapatkan Coolness**", value: 
        "1. Membuka lootbox tier diatas edgy (omega, godly, dst)\n" +
        "2. Mendapatkan loot langka di working command (hyper log, ultra log, dll)\n" +
        "3. **Ultr (Ultraining)** - Cara paling efesien sebelum mengalahkan EPIC NPC:\n" +
        "> - Lakukan setelah semua trade selesai\n" +
        "> - Cook apple juice sesuai stat yang dibutuhkan\n" +
        "> - Cek stat requirements dengan <@770199669141536768> `/ultraining stats calculator`\n" +
        "> **Note:** Jangan cook apple juice sama persis dengan stats yang dibutuhkan (ada enchantment gear yang bisa tambah stats hingga 300%)\n" +
        "4. Sell dragon scale dalam jumlah besar (cepat tapi hanya worth untuk end game player)",
        inline: false }
)
.addFields(
    { name: "**Benefit Coolness**", value: 
        "1. **Coolrency**: Untuk beli item di `ultr shop` (reset tiap tanggal 1, jumlah = coolness, tidak bisa ditimbun)\n" +
        "2. **Damage D15.2**: 1% dari total coolness (rekomendasi 2500+, one hit dengan 50000 coolness)\n" +
        "3. **EPIC NPC**: Semakin banyak coolness = semakin besar chance menang saat last punch\n",
        inline: false }
)
        .setImage('https://media.discordapp.net/attachments/1034761938892238848/1304966804640239709/image-32.png');
await message.channel.send({ embeds: [embed] });
  },
};