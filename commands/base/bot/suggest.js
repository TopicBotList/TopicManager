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
        name: "suggest",
        category: 'bot',
        disabled: false,
        args: false,
        aliases: ['suggestion'],
        description: `Sends a suggestion.`,
        cooldown: '3',
        usage: [`<suggestion>`]
    },
    async run(client, message, args) {
        const suggestion = args.join(' ').slice(0);
        if (!suggestion) {
            const notAdmin = new EmbedBuilder()
                .setDescription(`Please provide a suggestion.`)
                .setColor(Colors.Red)
                .setFooter({
                    text: client.footer
                });
            return message.reply({
                embeds: [notAdmin]
            });
        }
        let sugChannel = client.channels.cache.find((c) => c.id === "1007645618145071125");
        if (!sugChannel) {
            const notAdmin = new EmbedBuilder()
                .setDescription(`Invaild suggestion channel, Please provide the correct channel id.`)
                .setColor(Colors.Red)
                .setFooter({
                    text: client.footer
                });
            return message.reply({
                embeds: [notAdmin]
            });
        }
        if (sugChannel) {
            const suggestionSubmitted = new EmbedBuilder()
                .setAuthor({
                    name: `Suggestion Submitted.`,
                    iconURL: client.logo
                })
                .setDescription(`You're suggestion has been submitted.`)
                .setColor(client.color)
                .setTimestamp()
                .setFooter({
                    text: client.footer
                });
            message.reply({
                embeds: [suggestionSubmitted]
            });
            //
            const newSuggestion = new EmbedBuilder()
                .setAuthor({
                    name: `New Suggestion.`,
                    iconURL: client.logo
                })
                .setDescription(`${suggestion}`)
                .addFields({
                    name: `Submitted By:`,
                    value: `${message.author}`
                })
                .setColor(client.color)
                .setTimestamp()
                .setFooter({
                    text: client.footer
                });
            return sugChannel.send({
                embeds: [newSuggestion]
            }).then(async (msg) => {
                await msg.react('✅');
                await msg.react('❌');
            });;
        }
    }
}