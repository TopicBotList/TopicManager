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
                    .setTitle("__**User Left**__")
                    .setDescription(`Goodbye ${member.user.tag}, Sad to see you go!`)
                    .setThumbnail(member.user.displayAvatarURL())
                    .setFooter({
                        text: client.footer
                    })
                    .setTimestamp();
                systemChannel.send({
                    embeds: [userJoin]
                });
            }
            if (member.user.bot) {
                const botJoin = new EmbedBuilder()
                    .setColor(client.color)
                    .setTitle("__**Bot Left**__")
                    .setDescription(`${member.user.tag} has left.`)
                    .setThumbnail(member.user.displayAvatarURL())
                    .setFooter({
                        text: client.footer
                    })
                    .setTimestamp();
                systemChannel.send({
                    embeds: [botJoin]
                });
            }
        }
    } catch (error) {
        console.error(error)
    }
}