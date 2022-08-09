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
        category: 'staff',
        disabled: false,
        args: false,
        aliases: ['e'],
        description: `Test`,
        cooldown: '3',
        usage: [``]
    },
    async run(client, message, args) {

    }
}