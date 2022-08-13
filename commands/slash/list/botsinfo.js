const {
    EmbedBuilder,
    Colors,
    ApplicationCommandOptionType
} = require('discord.js');

module.exports = {
    name: "botsinfo",
    description: "...",
    cooldown: "3",
    disabled: false,
    options: [{
        name: "bot",
        type: ApplicationCommandOptionType.String,
        required: true,
        description: "Please provide a bot.",
    }],
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