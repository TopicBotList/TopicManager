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
        name: "approve",
        category: 'list',
        disabled: false,
        args: false,
        staff: true,
        aliases: ['accept'],
        description: `View a list of Bots in Queue.`,
        cooldown: '3',
        usage: [``]
    },
    async run(client, message, args) {
        message.reply("hi")
    }
}