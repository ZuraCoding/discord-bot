const translate = require('google-translate-api-x');
const { EmbedBuilder, AttachmentBuilder } = require('discord.js');

module.exports = {
  name: 'translate',
  description: 'Translates a replied message between English and Indonesian',
  category: 'General',

  execute: async (message) => {
    const reply = message.reference?.messageId
      ? await message.channel.messages.fetch(message.reference.messageId)
      : null;

    if (!reply) {
      return message.reply('❌ Please reply to a message you want to translate.');
    }

    try {
      const result = await translate(reply.content, { to: 'id' });

      const fromLang = result.from.language.iso;
      const isIndonesian = fromLang === 'id';

      const final = isIndonesian
        ? await translate(reply.content, { to: 'en' })
        : result;

      const originalText = reply.content;
      const translatedText = final.text;

      // If either original or translated is too long
      if (originalText.length > 1024 || translatedText.length > 1024) {
        const fullText = `🌐 Terjemahan / Translation\n\n` +
                         `${isIndonesian ? '🇮🇩 Original (Indonesian)' : '🇺🇸 Original (English)'}:\n${originalText}\n\n` +
                         `${isIndonesian ? '🇺🇸 Translated (English)' : '🇮🇩 Translated (Indonesian)'}:\n${translatedText}`;

        const file = new AttachmentBuilder(Buffer.from(fullText, 'utf-8'), { name: 'translation.txt' });
        return message.reply({ content: '📄 The translation is too long for an embed. See the file below:', files: [file] });
      }

      // Safe to embed
      const embed = new EmbedBuilder()
        .setColor('Random')
        .setTitle('🌐 Terjemahan / Translation')
        .addFields(
          {
            name: isIndonesian ? '🇮🇩 Original (Indonesian)' : '🇺🇸 Original (English)',
            value: originalText,
          },
          {
            name: isIndonesian ? '🇺🇸 Translated (English)' : '🇮🇩 Translated (Indonesian)',
            value: translatedText,
          }
        )
        .setFooter({ text: `Requested by ${message.author.tag}`, iconURL: message.author.displayAvatarURL() })
        .setTimestamp();

      message.reply({ embeds: [embed] });

    } catch (err) {
      console.error(err);
      message.reply('❌ Failed to translate the message.');
    }
  },
};
