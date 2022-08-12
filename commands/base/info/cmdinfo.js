const {
    EmbedBuilder,
    SelectMenuBuilder,
    ButtonBuilder,
    ActionRowBuilder,
    ButtonStyle
} = require('discord.js');
const {
    readdirSync
} = require("fs")

module.exports = {
    help: {
        name: "cmdinfo",
        category: 'info',
        disabled: false,
        args: false,
        aliases: ['aboutus'],
        description: `Tells you a little bit about the bot.`,
        cooldown: '3',
        usage: [``]
    },
    async run(client, message, args) {
        const aboutUs = new EmbedBuilder()
            .setTitle('About Us')
            .setDescription(`This is something to tell you about us..`)
            .setColor(client.color)
            .setFooter({
                text: client.footer
            });
        return message.reply({
            embeds: [aboutUs]
        });

    }
}