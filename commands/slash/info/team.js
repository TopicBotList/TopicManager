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
                value: `2`
            }, {
                name: `Co-Founders:`, 
                value: `1`
            }, {
                name: `Community Managers:`, 
                value: `1`
            }, {
                name: `Head Developers:`, 
                value: `2`
            },
            {
                name: `Website Moderators:`, 
                value: `3`
            }, {
                name: `Site Developers:`, 
                value: `2`
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