const {
    EmbedBuilder,
    SelectMenuBuilder,
    ButtonBuilder,
    ActionRowBuilder,
    ButtonStyle,
    Colors
} = require('discord.js');
const {
    readdirSync
} = require("fs")

module.exports = {
    help: {
        name: "reportbug",
        category: 'bot',
        disabled: false,
        args: false,
        aliases: ['bugreport'],
        description: `Report a bug.`,
        cooldown: '3',
        usage: [`<bug>`]
    },
    async run(client, message, args) {
        const bug = args.join(' ').slice(0);
        if (!bug) {
            const notAdmin = new EmbedBuilder()
                .setDescription(`Please provide a bug.`)
                .setColor(Colors.Red)
                .setFooter({
                    text: client.footer
                });
            return message.reply({
                embeds: [notAdmin]
            });
        }
        let bugsChannel = client.channels.cache.find((c) => c.id === "1007645646200786996");
        if (!bugsChannel) {
            const notAdmin = new EmbedBuilder()
                .setDescription(`Invaild bug channel, Please provide the correct channel id.`)
                .setColor(Colors.Red)
                .setFooter({
                    text: client.footer
                });
            return message.reply({
                embeds: [notAdmin]
            });
        }
        if (bugsChannel) {
            const bugSubmitted = new EmbedBuilder()
                .setAuthor({
                    name: `Bug Submitted.`,
                    iconURL: client.logo
                })
                .setDescription(`You're bug has been submitted.`)
                .setColor(client.color)
                .setTimestamp()
                .setFooter({
                    text: client.footer
                });
            message.reply({
                embeds: [bugSubmitted]
            });
            //
            const newBug = new EmbedBuilder()
                .setAuthor({
                    name: `New Bug.`,
                    iconURL: client.logo
                })
                .setDescription(`${bug}`)
                .addFields({
                    name: `Submitted By:`,
                    value: `${message.author}`
                })
                .setColor(client.color)
                .setTimestamp()
                .setFooter({
                    text: client.footer
                });
            return bugsChannel.send({
                embeds: [newBug]
            }).then(async (msg) => {
                await msg.react('✅');
                await msg.react('❌');
            });;
        }
    }
}