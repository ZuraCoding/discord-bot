const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder,
    ComponentType,
    ApplicationCommandOptionType,
  } = require('discord.js');
  
  module.exports = {
    name: 'rps',
    description: 'Challenge another user to Rock Paper Scissors!',
    category: 'General',
    options: [
      {
        name: 'user',
        description: 'The user to challenge',
        type: ApplicationCommandOptionType.User,
        required: true,
      },
    ],
  
    // Slash command handler
    callback: async (client, interaction) => {
      const challenger = interaction.user;
      const opponent = interaction.options.getUser('user');
      await handleGame(interaction, challenger, opponent);
    },
  
    // Prefix command handler
    execute: async (message, args, client) => {
      const challenger = message.author;
      const opponent = message.mentions.users.first();
  
      if (!opponent || opponent.bot || opponent.id === challenger.id) {
        return message.reply('Please mention a valid user to challenge (not yourself or a bot).');
      }
  
      await handleGame(message, challenger, opponent);
    }
  };
  
  async function handleGame(context, challenger, opponent) {
    const isSlash = !!context.isCommand;
    const channel = context.channel;
  
    const reply = (msg) => {
      return isSlash
        ? context.reply(msg)
        : channel.send(msg);
    };
  
    const editReply = (msg) => {
      return isSlash
        ? context.editReply(msg)
        : null;
    };
  
    await reply(`<@${opponent.id}>, you have been challenged by <@${challenger.id}> to Rock Paper Scissors!`);
  
    const choices = ['rock', 'paper', 'scissors'];
    const buttons = choices.map(choice =>
      new ButtonBuilder()
        .setCustomId(choice)
        .setLabel(choice[0].toUpperCase() + choice.slice(1))
        .setStyle(ButtonStyle.Primary)
    );
  
    const row = new ActionRowBuilder().addComponents(buttons);
  
    const collectorData = new Map();
  
    const promptEmbed = (user) =>
      new EmbedBuilder()
        .setTitle('Rock Paper Scissors')
        .setDescription(`Choose your move, <@${user.id}>:`)
        .setColor('Random');
  
    const promptMsg1 = await channel.send({ content: `<@${challenger.id}>`, embeds: [promptEmbed(challenger)], components: [row] });
    const promptMsg2 = await channel.send({ content: `<@${opponent.id}>`, embeds: [promptEmbed(opponent)], components: [row] });
  
    const collector = channel.createMessageComponentCollector({
      componentType: ComponentType.Button,
      time: 30000,
    });
  
    collector.on('collect', async i => {
      if (![challenger.id, opponent.id].includes(i.user.id)) {
        return i.reply({ content: 'You are not part of this game.', ephemeral: true });
      }
  
      if (collectorData.has(i.user.id)) {
        return i.reply({ content: 'You already picked!', ephemeral: true });
      }
  
      collectorData.set(i.user.id, i.customId);
      await i.reply({ content: `You chose **${i.customId}**!`, ephemeral: true });
  
      if (collectorData.size === 2) {
        collector.stop();
        const cChoice = collectorData.get(challenger.id);
        const oChoice = collectorData.get(opponent.id);
  
        const result = determineWinner(cChoice, oChoice);
  
        channel.send({
          embeds: [
            new EmbedBuilder()
              .setTitle('Result')
              .setDescription(
                `🧍 <@${challenger.id}> chose **${cChoice}**\n👤 <@${opponent.id}> chose **${oChoice}**\n\n➡️ **${resultMessage(result, challenger, opponent)}**`
              )
              .setColor('Green'),
          ],
        });
      }
    });
  
    collector.on('end', () => {
      if (collectorData.size < 2) {
        channel.send('⏰ Game ended due to inactivity.');
      }
    });
  }
  
  function determineWinner(c, o) {
    if (c === o) return 'draw';
    if (
      (c === 'rock' && o === 'scissors') ||
      (c === 'paper' && o === 'rock') ||
      (c === 'scissors' && o === 'paper')
    ) return 'challenger';
    return 'opponent';
  }
  
  function resultMessage(result, challenger, opponent) {
    if (result === 'draw') return "It's a draw!";
    if (result === 'challenger') return `<@${challenger.id}> wins!`;
    return `<@${opponent.id}> wins!`;
  }
  