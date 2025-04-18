const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'void',
  description: 'Diov',
  category: 'Epic Rpg',
  execute: async (message) => {
    const embed = new EmbedBuilder()
      .setTitle('VOID')
      .setColor('Random')
      .addFields(
        {
          name: 'Setelah EPIC NPC: Apa Selanjutnya?',
          value: '```Setelah mengalahkan EPIC NPC, kamu bisa lanjut ke Area 16. Tapi tiap area punya debuff unik, jadi penting untuk persiapkan cook sebelum lanjut ke area berikutnya.```'
        },
        {
          name: 'Area 16',
          value:
            '> 🔹 Langsung cook stats yang dibutuhkan\n' +
            '> 🔹 Selesaikan quest dan buat Void Armor\n' +
            '> 🔹 Bisa survive dengan 1 HP, Beli life boost C sebelum dungeon\n' +
            '> 🔹 Sebelum ke A17, siapkan bahan cook untuk menghindari debuff failed di A17'
        },
        {
          name: 'Area 17',
          value:
            '> 🔹 Cook stats segera\n' +
            '> 🔹 Debuff menyebabkan craft/dismantle/cook bisa gagal\n' +
            '> 🔹 Cook ulang sebelum D17 karena debuff mengurangi level dan stats setiap command'
        },
        {
          name: 'Area 18',
          value:
            '> 🔹 Cook stats segera\n' +
            '> 🔹 Debuff dapat menyebabkan cook gagal dan mengurangi stats\n' +
            '> 🔹 Bisa menyebabkan stats minus, perlu cook berulang'
        },
        {
          name: 'Area 19',
          value:
            '> 🔹 Cook stats segera\n' +
            '> 🔹 Debuff bisa menghapus item dari inventory\n' +
            '> 🔹 Horse tidak aktif, jadi kehilangan buff horse'
        },
        {
          name: 'Area 20',
          value:
            '> 🔹 Cook stats segera\n' +
            '> 🔹 Debuff A20:\n' +
            '    1. Kemungkinan kehilangan TT\n' +
            '    2. Setiap command mengonsumsi EXP PR\n' +
            '    3. Random cooldown\n' +
            '    4. Kemungkinan kehilangan Pet'
        },
        {
          name: '📢 NOTE',
          value:
            '**Debuffs yang disebutkan diatas belum semuanya, hanya debuffs yang perlu diperhatikan.**\n' +
            'Cek `rpg void debuffs` untuk info lengkap.\n' +
            'A20 tidak bisa melakukan Time Travel. Jadi kamu harus kembali ke A19 terlebih dahulu.\n' +
            'Pastikan punya bahan cukup untuk D20. Setiap selesai dungeon kamu akan mendapat *Time Jump* yang digunakan untuk pindah ke area lain (lebih tinggi/rendah).'
        },
        {
          name: '🔧 Tips',
          value:
            '*Jika belum punya 3 Voidog, dungeon berulang sampai dapat (semakin tinggi area, semakin besar chance).* ' +
            'Ada Voidog ke-4 tapi chance sangat kecil (lebih kecil dari TX horse), jadi tidak disarankan farming yang ke-4.\n\n' +
            '**Cara mengetahui jumlah cook stats tiap area:**\n' +
            '1. Ketik `!voidcook` di server Army\n' +
            '2. Gunakan bot <@833707580593143841> ➜ `rpg p` saat di area void\n' +
            '3. Cek chart ini: [Void Cook Chart](https://cdn.discordapp.com/attachments/1034761938892238848/1289527620224155698/voidcraft-2.png)'
        },
        {
          name: '⏫ Time Travel Bonus',
          value:
            '> **Tier I:** +1 TT / 5x TT → Unlocked after D16\n' +
            '> **Tier II:** +1 TT / 4x TT → Unlocked after D17\n' +
            '> **Tier III:** +1 TT / 3x TT → Unlocked after D18\n' +
            '> **Tier IV:** +1 TT / 2x TT → Unlocked after D19\n' +
            '> **Tier V:** +1 TT / 1x TT → Unlocked after D20 _(double TT)_\n\n' +
            '*Bonus ini bersifat permanen. Cukup clear D20 sekali untuk unlock Tier V selamanya.*\n\n' +
            '- Tambahan: Kamu juga bisa alchemy jumpy potion, grind VOID aura, dan menggunakannya untuk alchemy void potion lainnya.'
        }
      )
      .setFooter({ text: 'Need Help? feel free ping zur44_' });
      
    await message.channel.send({ embeds: [embed] });
  },
};
