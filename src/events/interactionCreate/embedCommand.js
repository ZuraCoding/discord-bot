const { EmbedBuilder } = require('discord.js');

module.exports = async (client, interaction) => {
  if (!interaction || !interaction.isChatInputCommand()) return;

  if (interaction.user.bot) return;

  if (interaction.commandName === 'embed') {
    const embed = new EmbedBuilder()
      .setDescription(`
### Tips cepat ascend

Mulai time poting dari TT1 (TT0 lebih bagus kalo punya banyak TC). Saat TT3 spam transmute sampai PR Enchanter level 100, lalu time travel (tujuannya: klaim Omega Lootbox). Dapatkan Top Hat secepatnya. Setelah itu, disarankan camp di area 1–3 dan tunggu trade (log ↔ ruby) supaya lebih cepat progress time pot-nya. Camp Top Hat di TT3+ karena trade-nya lebih banyak.

**"Time Potion kan cuma refund 7.50%, ga worth 😩"**

> Walaupun cuma 7.50%, tapi kalau ikutin pola trade area 1–10, mats kamu bakal melebihi time travel sebelumnya.

**"Apa itu pola trade?"**

> Intinya kamu bisa gandakan mats lewat trade. (Setiap area punya nilai trade berbeda). Untuk lebih jelasnya ketik \`rpg p trade\` sebelum dungeon.

### Yang perlu diperhatikan:
1. Gausah buru-buru naikin PR kaya crafter (nanti naik bareng PR worker).
2. Trade semua mats ke wooden log sebelum TT (pastikan sudah alchemy Time Potion).
3. Manfaatkan fitur trade sebelum dungeon.
4. Kalau mau spend, minimal 30M wooden log (bisa berubah tergantung kebutuhan).
5. Sebelum naik PR, wajib alchemy Wood & Fish Potion (25% EXP PR sangat worth).
6. Buka semua Omega & Godly Lootbox di area 3.
7. World Boost reset seminggu sekali (optional, tapi lumayan buat PR mahal seperti worker).

---

Jika ingin lebih cepat dengan bantuan bot lain:

Mainkan Idle Bot, kumpulkan 50 achievement, lalu ketik \`idle crossrewards\` untuk klaim Godly Lootbox (bisa selesai dalam 1–2 minggu).


Jika ada pertanyaan tanyakan di https://discord.com/channels/1026445472245755977/1026446438500155432
`) // put your backticked string here
      .setColor('Random');

    await interaction.reply({ embeds: [embed] });
  }
};

