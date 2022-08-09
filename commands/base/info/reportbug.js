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
        name: "reportbug",
        category: 'info',
        disabled: false,
        args: false,
        aliases: ['bugreport'],
        description: `Report a bug.`,
        cooldown: '3',
        usage: [``]
    },
    async run(client, message, args) {

    }
}