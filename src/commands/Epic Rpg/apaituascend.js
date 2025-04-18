const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'ascend',
  description: 'Penjelasan tentang ascend',
  category: 'Epic Rpg',
  execute: async (message) => {
    const embed = new EmbedBuilder()
      .setTitle('Apa itu Ascend?')
      .setColor('Random')
      .setFields(
        { name: "-----------------------------------------------------------------------------------", value: "Ascend adalah salah satu fitur yang memungkinkan player untuk memakai command area tinggi di area rendah walaupun belum membuka areanya, Merupakan fitur yang sangat berguna yang membuat progress 100% lebih mudah dan cepat", inline: false },
        { name: "Bagaimana cara membukanya?", value: "Ascend bisa terbuka ketika 5 professions (pr) player mencapai level 100", inline: false },
        { name: "Cara Meningkatkan Professions:", value: "-----------------------------------------------------------------------------------"},
        { name: "Worker:", value: "- Cook banana pickaxe sebanyak yang dibutuhkan (bisa dihitung menggunaka @Epic RPG Guide)\n- Jangan lupa alchemy wood dan fish potion sebelum cook.", inline: true },
        { name: "Crafter:", value: "- Craft epic log lalu dismantle dan ulangi sampai level 100\n- Disarankan setelah worker level 100 (karena craft mega log otomatis naikkan crafter)", inline: true },
        { name: "Lootboxer:", value: "**Cara 1:**\n- Timbrun lootbox area 1-10, buka dengan wood+fish potion\n**Cara 2:**\n- Beli rare lootbox (bukan edgy) untuk cook filled lootbox di max area\n- Jangan lupa wood+fish potion sebelum cook", inline: true },
        { name: "Merchant:", value: "- Sell wooden log sampai level 100 (hitung pakai @Epic RPG Guide)\n- Pakai wood+fish potion sebelum sell", inline: true },
        { name: "Enchanter:", value: "- Spam transmute (unlock TT3)\nTips:\n- Pakai wood+fish potion sebelum enchant\n- Pakai inverted potion untuk mempercepat", inline: true }
    );
    await message.channel.send({ embeds: [embed] });
  },
};
