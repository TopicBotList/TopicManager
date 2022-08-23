const {
    EmbedBuilder
} = require('discord.js');

module.exports.run = async (client, member, args) => {
    try {
        if (!client.config.guilds.main.includes(member.guild.id)) return;
        const systemChannel = member.guild.channels.cache.get(client.channelsList.systemChannel);
        if (client.config.guilds.main.includes(member.guild.id)) {
            if (!member.user.bot) {
                const userJoin = new EmbedBuilder()
                    .setColor(client.color)
                    .setTitle("__**User Joined**__")
                    .setDescription(`Welcome ${member.user.tag} to ${member.guild.name}. Please make sure you check out the <#${client.channelsList.rulesChannel}> and get some roles here <#${client.channelsList.rolesChannel}>!`)
                    .setThumbnail(member.user.displayAvatarURL())
                    .setFooter({
                        text: client.footer
                    })
                    .setTimestamp();
                systemChannel.send({
                    embeds: [userJoin]
                });
                member.roles.add(client.rolesList.Member);
            }
            if (member.user.bot) {
                const botJoin = new EmbedBuilder()
                    .setColor(client.color)
                    .setTitle("__**Bot Joined**__")
                    .setDescription(`${member.user.tag} has joined.`)
                    .setThumbnail(member.user.displayAvatarURL())
                    .setFooter({
                        text: client.footer
                    })
                    .setTimestamp();
                systemChannel.send({
                    embeds: [botJoin]
                });
                member.roles.add(client.rolesList.AwaitingVerification);
            }
        }
    } catch (error) {
        console.error(error)
    }
}