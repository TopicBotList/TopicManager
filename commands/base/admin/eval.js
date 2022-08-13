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
        name: "eval",
        category: 'admin',
        disabled: false,
        admins: true,
        args: false,
        aliases: ['e'],
        description: `Evaluate some Code.`,
        cooldown: '3',
        usage: [`<code>`]
    },
    async run(client, message, args) {

    }
}