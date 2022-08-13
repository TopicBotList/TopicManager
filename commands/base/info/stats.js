const {
    EmbedBuilder,
    Colors,
    version
} = require('discord.js');
const mongoose = require('mongoose');
const {
    time
} = require('@discordjs/builders');

module.exports = {
    help: {
        name: "stats",
        category: 'info',
        disabled: false,
        args: false,
        aliases: ['bstats', 'botstats'],
        description: `Display the bot stats.`,
        cooldown: '3',
        usage: [``]
    },
    async run(client, message, args) {
        const botvalue = (Date.now() / 1000 - client.uptime / 1000).toFixed(0);
        const aboutUs = new EmbedBuilder()
            .setTitle('TopicManager - Stats')
            .addFields({
                name: `Developers:`,
                value: `Thunder#6666`
            }, {
                name: `Created On:`,
                value: `${time(client.user.createdAt, 'R')}`
            }, {
                name: `Bot Latency:`,
                value: `${client.ws.ping}ms`
            }, {
                name: `Bot Uptime:`,
                value: `<t:${botvalue}:R>`
            }, {
                name: `Mongoose:`,
                value: `v${mongoose.version}`
            }, {
                name: `Discord.js:`,
                value: `v${version}`
            }, {
                name: `Node:`,
                value: `v${process.versions.node}`
            })
            .setColor(client.color)
            .setThumbnail(client.logo)
            .setFooter({
                text: client.footer
            });
        return message.reply({
            embeds: [aboutUs]
        });
    }
}