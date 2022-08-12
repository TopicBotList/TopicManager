const {
    EmbedBuilder,
    Colors
} = require('discord.js');

module.exports = {
    name: "eval",
    description: "Report a bug.",
    cooldown: "3",
    disabled: false,
    admins: true,
    run: async (client, interaction, args) => {
        const aboutUs = new EmbedBuilder()
            .setTitle('About Us')
            .setDescription(`This is something to tell you about us..`)
            .setColor(client.color)
            .setFooter({
                text: client.footer
            });
        return interaction.reply({
            embeds: [aboutUs]
        });
    }
}