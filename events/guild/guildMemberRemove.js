const {
    EmbedBuilder,
    ActivityType
} = require('discord.js');

module.exports.run = async (client, member, args) => {
    try {
        // if (!client.config.guilds.main.includes(member.guild.id)) return;
        // const systemChannel = member.guild.channels.cache.get(client.channelsList.systemChannel);
        // if (client.config.guilds.main.includes(member.guild.id)) {
        //     if (!member.user.bot) {
        //         const userJoin = new EmbedBuilder()
        //         .setColor(client.color)
        //             .setTitle("__**New User Joined:**__")
        //             .setDescription(`${member.user.tag} • [\`${member.user.id}\`] joined ${member.guild.name}.`)
        //             .setThumbnail(member.user.displayAvatarURL())
        //             .setFooter({
        //                 text: client.footer
        //             })
        //             .setTimestamp();
        //         systemChannel.send({
        //             embeds: [userJoin]
        //         });
        //     }
        //     if (member.user.bot) {
        //         const botJoin = new EmbedBuilder()
        //             .setColor(client.color)
        //             .setTitle("__**New Bot Joined:**__")
        //             .setDescription(`${member.user.tag} • [\`${member.user.id}\`] joined ${member.guild.name}.`)
        //             .setThumbnail(member.user.displayAvatarURL())
        //             .setFooter({
        //                 text: client.footer
        //             });
        //         systemChannel.send({
        //             embeds: [botJoin]
        //         });
        //     }
        // }
    } catch (error) {
        console.error(error)
    }
}