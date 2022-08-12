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
        name: "team",
        category: 'info',
        disabled: false,
        args: false,
        aliases: ['staff', 'steam', 'staffteam'],
        description: `Display the staff team.`,
        cooldown: '3',
        usage: [``]
    },
    async run(client, message, args) {
        const aboutUs = new EmbedBuilder()
            .setTitle('Our Staff Team')
            .setDescription(`Here will list you everyone that is part of our team.`)
            .setColor(client.color)
            .setFooter({
                text: client.footer
            });
        return message.reply({
            embeds: [aboutUs]
        });
    }
}