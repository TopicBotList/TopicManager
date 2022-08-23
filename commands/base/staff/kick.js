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
        name: "kick",
        category: 'staff',
        disabled: false,
        args: false,
        staff: true,
        permission: [ "KICK_MEMBERS" ],
        aliases: ['None'],
        description: `View a list of Bots in Queue.`,
        cooldown: '3',
        usage: [``]
    },
    async run(client, message, args) {
        message.reply("hi")
    }
}