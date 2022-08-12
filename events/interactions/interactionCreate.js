const {
    EmbedBuilder,
    InteractionType,
    Colors
} = require("discord.js")

module.exports.run = async (client, interaction, args) => {
    const user = interaction.user;
    if (interaction.type === InteractionType.ApplicationCommand && !user.bot) {
        var cmd = client.slash.get(interaction.commandName);
        if (cmd) {
            if (cmd.disabled === true) {
                const disabledCmds = new EmbedBuilder()
                    .setDescription(`${cmd.name} is currently disabled.`)
                    .setColor(Colors.Red)
                    .setFooter({
                        text: client.footer
                    });
                return interaction.reply({
                    embeds: [disabledCmds]
                });
            }
            if (cmd.permissions && !message.member.permissions.has(cmd.permissions || [])) {
                const disabledCmds = new EmbedBuilder()
                    .setDescription(`You need \`${cmd.permissions.join(', ')}\` permissions to execute ${cmd.name}.`)
                    .setColor(Colors.Red)
                    .setFooter({
                        text: client.footer
                    });
                return interaction.reply({
                    embeds: [disabledCmds]
                });
            }
            if (cmd.admins === true && !client.config.admins.includes(interaction.member.id)) {
                const notAdmin = new EmbedBuilder()
                    .setDescription(`${cmd.name} is limited to admins only.`)
                    .setColor(Colors.Red)
                    .setFooter({
                        text: client.footer
                    });
                return interaction.reply({
                    embeds: [notAdmin]
                });
            }
            if (cmd.staff === true && !client.config.staff.includes(interaction.member.id)) {
                const notAdmin = new EmbedBuilder()
                    .setDescription(`${cmd.name} is limited to staff only.`)
                    .setColor(Colors.Red)
                    .setFooter({
                        text: client.footer
                    });
                return interaction.reply({
                    embeds: [notAdmin]
                });
            }
            if (!client.config.staff.includes(interaction.member.id)) {
                if (!cooldowns.has(cmd.name)) {
                    cooldowns.set(cmd.name, new client.cooldowns);
                }
                const now = Date.now();
                const timestamps = client.cooldowns.get(cmd.name);
                const cooldownAmount = Math.floor(cmd.cooldown || 5) * 1000;
                if (!timestamps.has(interaction.member.id)) {
                    timestamps.set(interaction.member.id, now);
                    setTimeout(() => timestamps.delete(interaction.member.id), cooldownAmount);
                } else {
                    const expirationTime = timestamps.get(interaction.member.id) + cooldownAmount;
                    const timeLeft = (expirationTime - now) / 1000;
                    if (now < expirationTime && timeLeft > 0.9) {
                        const cooldown = new EmbedBuilder()
                            .setDescription(`Please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${cmd.name}\` command.`)
                            .setColor(Colors.Red)
                            .setFooter({
                                text: client.footer
                            })
                        return interaction.reply({
                            embeds: [cooldown]
                        });
                    }
                    timestamps.set(message.author.id, now);
                    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
                }
            }
            try {
                cmd.run(client, interaction, args)
            } catch (error) {
                //return client.errors(client, error.stack, interaction);
            }
        } else {

        }
    }
}