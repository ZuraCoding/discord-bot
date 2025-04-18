const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'eternal',
  description: 'Eternal Guide',
  category: 'Epic Rpg',
  execute: async (message) => {
    const embed = new EmbedBuilder()
      .setTitle('Eternal')
      .setColor('Random')
      .addFields(
        { name: " **Baca ini setelah unlock eternal system.**", value: "", inline: false }
    )
    .addFields(
        { name: "1. **__Penting!!__**, persiapan sebelum unseal pertama kali.", value: 
            "> cari flame sekitar 500, 50 buat unseal sisanya > untuk enchant.\n" +
            "> punya time cookie yang cukup, sekitar 3500 tc.\n" +
            "> punya material buat bikin void pot yang cukup buat 7 hari.\n" +
            "> unseal saat event (optional tapi disarankan).",
            inline: false }
    )
    .addFields(
        { name: "2. **enchant & gameplay**", value: 
            "> __eternality__ ``1-1100`` hanya fokus untuk bite.\n" +
            "> __eternality ``1-100``__ enchant sword pakai flame sisa di awal setelah unseal sampai t2, bisa dapat t3 kalau hoki.\n" +
            "> __eternality__ ``100-300`` enchant sword sampai t3, jika masih ada sisa bisa enchant armor sampai t2 untuk mengunlock tier bonus II.\n" +
            "> __eternality__ ``300-550`` enchant sword sampai t4, dan jika masih ada sisa flame enchant armor sampai t4 untuk mengunlock tier bonus IV.\n" +
            "> __eternality__ ``550-1100`` fokus untuk enchant sword sampai t7.\n" +
            "> __eternality__ ``1100`` adalah maksimal eternality untuk sword t7 dengan bite, e1200± harus mulai cook eternally hot sauce dan enchant armor untuk bisa bite beberapa kali dalam 1x dung.\n" +
            "``#NOTE`` enchant sword/armor jangan sampai flame habis, karena untuk unseal selanjutnya. jumlah flame yang di butuhin buat next unseal bisa dihitung dengan cara **eternality x 25**.",
            inline: false }
    )
    .addFields(
        { name: "3. **epicness**", value: 
            "> menaikkan ``epicness`` agar drop lootbox lebih bagus dengan cara breeding saat spam tc, atau beli omega horse token dari ring yang di dapat dari eternal lootbox.",
            inline: false }
    )
    .addFields(
        { name: "4. **card**", value: 
            "> selesaikan alchemy card, karena bisa dapat flask puluhan saat tc spam, dan card lainnya seperti working card, pet, lootbox.",
            inline: false }
    )
    .addFields(
        { name: "**RINGKASAN**", value: 
            "•punya tc dan ada event saat sebelum unseal.\n" +
            "•FULL boost potion & consumable untuk. memaksimalkan lootbox drop.\n" +
            "•fokus bite dan naikin sword ke t7.\n" +
            "•selesaikan card deck.\n" +
            '[Spreadsheet Eternal Calculator](https://docs.google.com/spreadsheets/d/15WtW-Ns-CCNnAauGS1Wk0G18sWdu3_tbXRFHrBhKenQ/edit?usp=sharing)\n\n' +
            "Setelah e1200 kalian akan mengerti sendiri bagaimana gameplay nya.\n" +
            "Selebihnya ping <@920696302705193020> kalau ada pertanyaan.",
            inline: false }
    );

    await message.channel.send({ embeds: [embed] });
  },
};
