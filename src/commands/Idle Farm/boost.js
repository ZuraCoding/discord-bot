const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'boost',
  description: 'Benefit dari semua boost',
  category: 'Idle Farm',
  execute: async (message) => {
    const embed = new EmbedBuilder()
  .setTitle('📘 Boost Guide 📘')
  .setColor('Random')
  .addFields(
    {
      name: '1. MEGA Boost (30 days)',
      value: `Raid loot: +15%\nRaid drops: +15%\nClaim rewards: +20%\nInvestment cap: +40%\n> Beli lah lumayan 1 bulan.`
    },
    {
      name: '2. Mini Boost (4h)',
      value: `Raid loot: +10%\nRaid drops: +10%\nClaim rewards: +10%\nPacking XP: +10%\n> Pakai saat speedrunning Week, Energy Fest, Lootbox Hotsale.`
    },
    {
      name: '3. Christmas Bell (4h)',
      value: `Raid loot: +30%\nRaid drops: +60%\n> GOAT saat spam di ME Lootbox Hotsale, wajib stock untuk setahun`
    },
    {
      name: '4. Party Popper - 1h',
      value:
        'Raid loot: `+50%`\n' +
        'Claim rewards: `+30%`\n' +
        'Roll luck: `+0.20`\n' +
        '> Cukup pakai saat claim di ME speedruning / Energy Fest,\n' +
        '> dan saat spam raid di Lootbox Hotsale.'
    },
    {
      name: '5. Easter Lily - Fragrance - 24h',
      value:
        'Claim rewards: `+25%`\n' +
        'Packing XP: `+25%`\n' +
        '> Pakai saat claim di ME speedrunning / Energy Fest\n' +
        '> dan saat ingin pack menghabiskan worker token.\n' +
        '> Wajib stock.'
    },
    {
      name: '6. Worger - 4h',
      value:
        'Raid loot: `+75%`\n' +
        'Claim rewards: `+25%`\n' +
        'Roll luck: `+0.10`\n' +
        '> Karena jumlahnya yang terbatas,\n' +
        '> gunakan secukupnya saja saat claim di ME Speedrunning & Energy Fest.\n' +
        '> Sisakan untuk raid di Lootbox Hotsale.'
    },
    {
      name: '7. Energy Tank - 3d',
      value:
        'Max energy: `+10000`\n' +
        '> Use langsung, gabisa di-keep.'
    },
    {
      name: '8. Lootbox Cake - Hilang saat di-use',
      value:
        'Claim rewards: `+80%`\n' +
        '> Boost yang bagus namun jumlahnya terbatas.\n' +
        '> Wajib pakai saat Speedrunning Week atau Energy Fest jika masih ada.'
    },
    {
      name: '9. Valentine Muffin - Hilang saat di-use',
      value:
        'Claim rewards: `+100%`\n' +
        '> GOATTT, lebih bagus dari Lootbox Cake.\n' +
        '> Bisa di-stock & digunakan setiap hari.\n' +
        '> Kalau punya 3k+ muffin, pakai setiap claim!\n' +
        '> Kalau terbatas, simpan untuk ME saja.'
    },
    {
      name: '10. Erngy Clover #1 (6h)',
      value:
        'Raid loot: `+25%`\n' +
        'Raid drops: `+10%`\n' +
        'Claim rewards: `+5%`\n' +
        'Roll luck: `+0.10`'
    },
    {
      name: '11. Erngy Clover #2 (8h)',
      value:
        'Raid loot: `+30%`\n' +
        'Raid drops: `+15%`\n' +
        'Claim rewards: `+10%`\n' +
        'Roll luck: `+0.20`'
    },
    {
      name: '12. Erngy Clover #3 (10h)',
      value:
        'Payday idlucks: `+5%`\n' +
        'Raid loot: `+35%`\n' +
        'Raid drops: `+20%`\n' +
        'Claim rewards: `+15%`\n' +
        'Roll luck: `+0.30`'
    },
    {
      name: '13. Erngy Clover #4 (12h)',
      value:
        'Payday idlucks: `+10%`\n' +
        'Raid loot: `+40%`\n' +
        'Raid drops: `+25%`\n' +
        'Claim rewards: `+20%`\n' +
        'Market tax: `-1.50%`\n' +
        'Roll luck: `+0.40`\n' +
        '> Another GOAT namun jumlahnya sangat terbatas dan harus gacha untuk mendapatkan boost yang diinginkan.\n' +
        '> Boost ini bisa di-stack jika beda tier.\n' +
        '> Mendapatkan tier 1, 2, 3 sudah beruntung — tier 4? **mitos**.\n' +
        '> Gunakan item ini di Lootbox Hotsale saat spam raid.'
    },
     

  );


    await message.channel.send({ embeds: [embed] });
  },
};

