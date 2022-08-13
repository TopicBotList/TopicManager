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
        const team = new EmbedBuilder()
            .setTitle('Our Staff Team')
            .setDescription(`Here will list you everyone that is part of our team.`)
            .addFields({
                name: `Founders:`, 
                value: `0`
            }, {
                name: `Co-Founders:`, 
                value: `0`
            }, {
                name: `Community Managers:`, 
                value: `0`
            }, {
                name: `Head Developers:`, 
                value: `0`
            }, {
                name: `Website Administrators:`, 
                value: `0`
            },
            {
                name: `Website Moderators:`, 
                value: `0`
            }, {
                name: `Site Developers:`, 
                value: `0`
            })
            .setColor(client.color)
            .setThumbnail(client.logo)
            .setFooter({
                text: client.footer
            });
        return message.reply({
            embeds: [team]
        });
    }
}