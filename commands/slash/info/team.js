const {
    EmbedBuilder,
    Colors
} = require('discord.js');

module.exports = {
    name: "team",
    description: "Display the staff team.",
    cooldown: "3",
    disabled: false,
    run: async (client, interaction, args) => {
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
        return interaction.reply({
            embeds: [team]
        });
    }
}