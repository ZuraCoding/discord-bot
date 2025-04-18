const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'advancedpr',
  description: 'Yapping about pr',
  category: 'Epic Rpg',
  execute: async (message) => {
    const embed = new EmbedBuilder()
    .setTitle(' Benefit Professions (PR) 100+')
    .setDescription('Penjelasan benefit PR level 100+ dan cara cepat menaikkannya seperti top global. Referensi cara naik: <#1315242897011904514>')
    .addFields(
      { name: "__Professions (pr) Level 100+ Guide__", value: "Post ini akan membahas tentang benefit Professions (pr) saat level pr kalian diatas level 100+ dan bagaimana cara cepat mencapai level pr tinggi seperti top global\n\nUntuk cara meningkatkan nya masih sama dengan post <#1315242897011904514> ini sudah yang paling efesien, Yang akan dibahas disini adalah benefit dan cara mengumpulkan materialnya.", inline: false }
  )
  .addFields(
      { name: "**Benefit pr yang lvl nya 100+**", value: "1. Professions Worker\n> Jika sudah level 100+, bisa mendapatkan resource lain pada saat melakukan work (contohnya ketika melakukan chainsaw, kita bisa mendapatkan ikan sebagai bonus). Untuk level 101-125 Terjadi peningkatan chance mendapatkan bonus yang membuat player saat mencapai level 125 maka chance untuk mendapatkan bonus ini adalah 100% dan untuk level 125+ terjadi peningkatan pada loot yang diperoleh (semakin bagus item yang didapat pada saat work, contoh: yang tadinya terus terusan mendapatkan wooden log jadi lebih sering mendapatkan epic log atau diatasnya).", inline: false }
  )
  .addFields(
      { name: "", value: "2. Professions Crafter\n> Meningkatkan persentase refund saat craft mats dan akan naik seiring bertambahnya level pr crafter.", inline: false }
  )
  .addFields(
      { name: "", value: "3. Professions Lootboxer\n> Jika Levelnya 100+ Bisa Memenuhi batas Level Tier Kuda sebanyak 1 level per 1 level lootboxer (Misal Level 101 lootboxer, Max Kuda T9 jadi Level 91 dst).", inline: false }
  )
  .addFields(
      { name: "", value: "4. Professions Merchant\n> Jika sudah level 100+ , Memungkinan untuk mendapatkan dragon scale ketika menjual mob drop yang lain (wolf skin, zombie eye,dll). Dan semakin tinggi level merchant semakin bagus pula rate mendapatkan dragon scalenya.\n> Note: Saat mencapai merchant lvl 134 rate penjualanya akan menjadi 1:1, Setiap menjual 1 monster drop akan mendapatkan 1 scale (no more farming scale).", inline: false }
  )
  .addFields(
      { name: "", value: "5. Professions Enchanter\n> Meningkatkan Kemungkinan mendapatkan kualitas bagus saat enchant.", inline: false }
  )
  .addFields(
      { name: "*Sekarang masuk ke pembahasan cara mengumpulkan material untuk meningkatkan pr diatas*", value: "Bahan yang dibutuhkan:\n1. time potion.\n\nYeah hanya satu, mungkin membutuhkan top hat saat diawal namun 95% time potion menggendong.", inline: false }
  )
  .addFields(
      { name: "", value: "> Cara mendapatkan banyak material secara cepat: Tepat setelah player ascend sekitar TT 4 sampai 10, player harus menimbun mats lagi menggunakan top hat sampai menyentuh 50m-100m mats pada a10, setelah itu fokus rush TT sembari Timepotting. maka niscahya mats mu akan melebihi 1b saat TT25+.", inline: false }
  )
  .addFields(
      { name: "", value: "*Note: Jika mats kalian sudah mencapai 25b+ yang merupakan cap inventory maka lebihan dari 25b tsb di craft ke item yang ada diatasnya, Contoh: Player memiliki 30b normie fish maka 5b nya di craft ke golden fish dan masih worth bahkan sampai epic fish (Untuk bantuan craft bisa menggunakan <@902703931275247637> dengan command \"rpg p trade\")*", inline: false }
  )
  .addFields(
      { name: "", value: "Tips: Saat kalian akan memasuki void dan material kalian masih berada di bawah 100b disarankan untuk hold dan jangan memasuki void sampai benefit dari time pot kalian mencapai 12b+ per TT, Supaya tidak perlu mengulang proses time pot dan membuat progress lebih lama untuk mencapai tujuan.", inline: false }
  )
  .addFields(
      { name: "", value: "**Teruslah Time pot, jangan gunakan materialmu hingga mencapai 5T-6T Log jika kalian sudah mencapai angka ini maka kalian bisa menggunakannya untuk leveling pr dan bisa menghabiskan 400b-600b log di setiap TT yang akan terus menerus terulang. Cek menggunakan <@902703931275247637> untuk angka pasti.**", inline: false }
  )
  .addFields(
      { name: "", value: "Jika ada pertanyaan tanyakan di ⁠<#1026446438500155432>", inline: false }
  );
    
  
  


    await message.channel.send({ embeds: [embed] });
  },
};
