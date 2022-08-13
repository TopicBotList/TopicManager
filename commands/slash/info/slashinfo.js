const {
    EmbedBuilder,
    ApplicationCommandOptionType
} = require('discord.js');

module.exports = {
    name: "slashinfo",
    description: "Gives you information of a command.",
    cooldown: "3",
    disabled: false,
    options: [{
        name: "command",
        type: ApplicationCommandOptionType.String,
        required: true,
        description: "Please provide a slash command.",
    }],
    run: async (client, interaction, args) => {
        let command = interaction.options.getString("command");
        let cmd = await client.slash.get(`${command}`) || null;
        if (cmd !== null) {
            const aboutUs = new EmbedBuilder()
                .setTitle(`Info » ${cmd.name}`)
                .addFields({
                    name: `Description:`,
                    value: `${cmd.description ? `\`${cmd.description}\`` : `\`No Description\``}`
                }, {
                    name: `Permissions:`,
                    value: `${cmd.permissions ? `\`${cmd.permissions.join(", ")}\`` : '\`None\`'}`
                }, {
                    name: `Cooldowns:`,
                    value: `${cmd.cooldown ? `\`${cmd.cooldown} second(s)\`` : "\`No Cooldown\`"}`
                }, 
                {
                    name: `Disabled:`,
                    value: `${cmd.disabled ? '\`Yes\`' : '\`No\`'}`
                }, 
                {
                    name: `Staff:`,
                    value: `${cmd.staff ? '\`Yes\`' : '\`No\`'}`
                }, {
                    name: `Admin:`,
                    value: `${cmd.admins ? '\`Yes\`' : '\`No\`'}`
                })
                .setColor(client.color)
                .setThumbnail(client.logo)
                .setFooter({
                    text: client.footer
                });
            return interaction.reply({
                embeds: [aboutUs]
            });
        }
    }
}