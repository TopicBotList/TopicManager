const {
    EmbedBuilder,
    SelectMenuBuilder,
    ButtonBuilder,
    ActionRowBuilder,
    ButtonStyle,
    Colors
} = require('discord.js');
const {
    readdirSync
} = require("fs")

module.exports = {
    help: {
        name: "tickets",
        category: 'admin',
        disabled: false,
        admins: true,
        args: false,
        aliases: ['None'],
        description: `Sends the ticket embed to the tickets channel.`,
        cooldown: '3',
        usage: [``]
    },
    async run(client, message, args) {
        let channel = message.guild.channels.cache.find(ch => ch.id === client.channelsList.ticketsChannel) || null;
        if (!channel) {
            const notAdmin = new EmbedBuilder()
                .setDescription(`Invaild tickets channel, Please provide the correct channel id.`)
                .setColor(Colors.Red)
                .setFooter({
                    text: client.footer
                });
            return message.reply({
                embeds: [notAdmin]
            });
        }
        if (channel !== null) {
            const ticketsPanel = new EmbedBuilder()
                .setColor(client.color)
                .setFooter({
                    text: client.footer
                })
                .setThumbnail(client.logo)
                .setTitle(`Tickets`)
            return channel.send({
                embeds: [ticketsPanel]
            })
        }
    }
}