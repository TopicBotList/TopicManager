const {
    EmbedBuilder,
    SelectMenuBuilder,
    ButtonBuilder,
    ActionRowBuilder,
    ButtonStyle
} = require('discord.js');
const {
    readdirSync
} = require("fs")

module.exports = {
    help: {
        name: "cmdinfo",
        category: 'info',
        disabled: false,
        args: false,
        aliases: ['cmdsinfo'],
        description: `Gives you information of a command.`,
        cooldown: '3',
        usage: [``]
    },
    async run(client, message, args) {
        let command = args[0];
        let cmd = await client.commands.get(`${command}`) || null;
        if (cmd !== null) {
            const aboutUs = new EmbedBuilder()
                .setTitle(`Info » ${cmd.help.name}`)
                .addFields({
                    name: `Description:`,
                    value: `${cmd.help.description ? `\`${cmd.help.description}\`` : `\`No Description\``}`
                }, {
                    name: `Permissions:`,
                    value: `${cmd.help.permissions ? `\`${cmd.help.permissions.join(", ")}\`` : '\`None\`'}`
                }, 
                {
                    name: `Aliases:`,
                    value: `${cmd.help.aliases ? `\`${cmd.help.aliases.join(" | ")}\`` : '\`None\`'}`
                },
                {
                    name: `Usage:`,
                    value: `${cmd.help.usage ? `\`${cmd.help.usage}\`` : '\`None\`'}`
                },
                {
                    name: `Cooldowns:`,
                    value: `${cmd.help.cooldown ? `\`${cmd.help.cooldown} second(s)\`` : "\`No Cooldown\`"}`
                }, 
                {
                    name: `Disabled:`,
                    value: `${cmd.help.disabled ? '\`Yes\`' : '\`No\`'}`
                }, 
                {
                    name: `Staff:`,
                    value: `${cmd.help.staff ? '\`Yes\`' : '\`No\`'}`
                }, {
                    name: `Admin:`,
                    value: `${cmd.help.admins ? '\`Yes\`' : '\`No\`'}`
                })
                .setColor(client.color)
                .setThumbnail(client.logo)
                .setFooter({
                    text: client.footer
                });
            return message.reply({
                embeds: [aboutUs]
            });
        }
    }
}