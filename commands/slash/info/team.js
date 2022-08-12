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
        const aboutUs = new EmbedBuilder()
            .setTitle('Our Staff Team')
            .setDescription(`Here will list you everyone that is part of our team.`)
            .setColor(client.color)
            .setFooter({
                text: client.footer
            });
        return interaction.reply({
            embeds: [aboutUs]
        });
    }
}