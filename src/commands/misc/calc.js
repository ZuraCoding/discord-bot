module.exports = {
    name: 'calc',
    description: 'Evaluate a math expression.',
    category: 'General', // Or 'Misc' if you're listing it that way in your help embed
    async execute(message, args) {
      if (!args.length) {
        return message.reply('❌ Berikan ekspresi matematika. Contoh: `?calc 6*6`');
      }
  
      const input = args.join(' ');
  
      try {
        // Simple and powerful, but use carefully!
        const result = eval(input);
        message.reply(`${result}`);
      } catch (err) {
        message.reply('❌ Ekspresi matematika tidak valid.');
      }
    },
  };
  