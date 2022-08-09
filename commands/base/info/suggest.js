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
        name: "suggest",
        category: 'info',
        disabled: false,
        args: false,
        aliases: ['suggestion'],
        description: `Sends a suggestion.`,
        cooldown: '3',
        usage: [``]
    },
    async run(client, message, args) {

    }
}