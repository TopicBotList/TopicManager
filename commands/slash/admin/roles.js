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
    name: "roles",
    description: "Sends the roles embed to the roles channel.",
    cooldown: "3",
    disabled: false,
    admins: true,
    run: async (client, interaction, args) => {
        let channel = interaction.guild.channels.cache.find(ch => ch.id === client.channelsList.rolesChannel) || null;
        if (!channel) {
            const notAdmin = new EmbedBuilder()
                .setDescription(`Invaild roles channel, Please provide the correct channel id.`)
                .setColor(Colors.Red)
                .setFooter({
                    text: client.footer
                });
            return interaction.reply({
                embeds: [notAdmin]
            });
        }
        if (channel !== null) {
            const newsRolesEmbed = new EmbedBuilder()
                .setColor(client.color)
                .setFooter({
                    text: client.footer
                })
                .setTitle(`News Roles`)
            //.setDescription(`${bot.settings.emojis.updates} <@&${bot.settings.roles.updates}>\n${bot.settings.emojis.websitestatus} <@&${bot.settings.roles.websitestatus}>\n${bot.settings.emojis.changelogs} <@&${bot.settings.roles.changelogs}>`)
            const eventRolesEmbed = new EmbedBuilder()
                .setColor(client.color)
                .setFooter({
                    text: client.footer
                })
                .setTitle(`Event Roles`)
            //.setDescription(`📅 <@&${bot.settings.roles.events}>\n🎉 <@&${bot.settings.roles.giveaways}>\n🗳 <@&${bot.settings.roles.voteping}>\n❔ <@&${bot.settings.roles.supportping}>\n📣 <@&${bot.settings.roles.adslotping}>`)
            const newsRolesRow = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                    .setCustomId('updates')
                    .setStyle(ButtonStyle.Secondary)
                    .setLabel('Updates'),
                    //.setEmoji(`${bot.settings.emojis.updates}`),
                    new ButtonBuilder()
                    .setCustomId('websitestatus')
                    .setStyle(ButtonStyle.Secondary)
                    .setLabel('Website Status Updates'),
                    //.setEmoji(`${bot.settings.emojis.websitestatus}`),
                    new ButtonBuilder()
                    .setCustomId('changelogs')
                    .setStyle(ButtonStyle.Secondary)
                    .setLabel('Changelogs'))
            //.setEmoji(`${bot.settings.emojis.changelogs}`))
            channel.send({
                embeds: [newsRolesEmbed],
                components: [newsRolesRow]
            })
            const eventRolesRow = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                    .setCustomId('events')
                    .setStyle(ButtonStyle.Secondary)
                    .setLabel('Events'),
                    //.setEmoji(`${bot.settings.emojis.updates}`),
                    new ButtonBuilder()
                    .setCustomId('giveaways')
                    .setStyle(ButtonStyle.Secondary)
                    .setLabel('Giveaways'),
                    //.setEmoji(`${bot.settings.emojis.websitestatus}`),
                    new ButtonBuilder()
                    .setCustomId('voteping')
                    .setStyle(ButtonStyle.Secondary)
                    .setLabel('Vote Ping'),
                    new ButtonBuilder()
                    .setCustomId('supportping')
                    .setStyle(ButtonStyle.Secondary)
                    .setLabel('Support Ping'),
                    new ButtonBuilder()
                    .setCustomId('adslotping')
                    .setStyle(ButtonStyle.Secondary)
                    .setLabel('Ad Slot Ping'))
            //.setEmoji(`${bot.settings.emojis.changelogs}`))
            channel.send({
                embeds: [eventRolesEmbed],
                components: [eventRolesRow]
            })
            //
            interaction.reply({
                content: `Successfuly sent the roles embed to ${channel}`,
                ephemeral: true
            })
        }
    }
}