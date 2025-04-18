module.exports.reply = async (interactionOrMessage, content, ephemeral = false) => {
    if (interactionOrMessage.reply) {
        return interactionOrMessage.reply({ content, ephemeral });
    } else if (interactionOrMessage.channel) {
        return interactionOrMessage.channel.send(content);
    } else {
        console.error(" Cannot reply: Invalid interaction or message.");
    }
};
