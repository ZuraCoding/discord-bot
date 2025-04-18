const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'ascendtips',
  description: 'Tips untuk cepat ascend',
  category: 'Epic Rpg',
  execute: async (message) => {
    const embed = new EmbedBuilder()
      .setTitle('Tips cepat ascend')
      .setColor('Random')
      .addFields(
        { name: "-----------------------------------------------------------------------------------", value: "Mulai time poting dri TT1 (tt0 lebih bagus kalo punya banyak tc). Saat TT3 spam transmute sampai pr enchanter level 100 setelah itu time travel (tujuannya agar bisa claim omega lootbox).", inline: false },
        { name: "Top Hat Strategy", value: "Dapatkan top hat secepatnya, setelah mendapatkan artifact top hat disarankan untuk nge camp di area 1-3 dan menunggu trade (log to ruby, ruby to log) supaya lebih cepat progress time pot nya. Disarankan camp top hat di TT 3+ (max trade g lebih banyak).", inline: false },
        { name: "Time Potion Efficiency", value: "Walaupun cuma 7.50% Tapi kalo ikutin patern trade area 1-10 mats mu bakal melebihi time travel sebelumnya", inline: false },
        { name: "Apa itu Patern Trade?", value: "Singkatnya kamu bisa menggandakan mats dengan cara trade (Setiap area memiliki nilai trade yang berbeda) untuk lebih mudahnya ketik \"rpg p trade\" sebelum dungeon", inline: false }
    )
    .addFields(
        { name: "Yang Perlu Diperhatikan", value: "1. Gausah buru-buru naikin pr kaya crafter\n2. Trade semua mats ke wooden log sebelum TT\n3. Manfaatkan fitur trade sebelum dungeon\n4. Minimal 30m wooden log\n5. Wajib alchemy wood+fish potion sebelum naikin pr\n6. Buka omega/godly lootbox di area 3\n7. Manfaatkan world boost", inline: false }
    )
    .addFields(
        { name: "Bonus Tips (Idle Bot And Claim Code)", value: "1. Main idle bot kumpulkan 50 achievement, lalu ketik \"idle crossrewards\" untuk claim Godly lootbox (50 ach mudah didapat dalam 1-2 minggu).\n2. Terkadang ada code yang di dalamnya berisi omega/godly lootbox, Sangat membantu untuk progress ascend (Note: Claim di a1-3).", inline: false },
        { name: "Need Help?", value: "Jika ada pertanyaan tanyakan di <#1026446438500155432>", inline: false }
    )
    await message.channel.send({ embeds: [embed] });
  },
};

