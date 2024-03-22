const { EmbedBuilder, InteractionType, Colors } = require("discord.js");

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
            text: client.footer,
          });
        return interaction.reply({
          embeds: [disabledCmds],
        });
      }
      if (
        cmd.permissions &&
        !message.member.permissions.has(cmd.permissions || [])
      ) {
        const disabledCmds = new EmbedBuilder()
          .setDescription(
            `You need \`${cmd.permissions.join(", ")}\` permissions to execute ${cmd.name}.`,
          )
          .setColor(Colors.Red)
          .setFooter({
            text: client.footer,
          });
        return interaction.reply({
          embeds: [disabledCmds],
        });
      }
      if (
        cmd.admins === true &&
        !client.config.admins.includes(interaction.member.id)
      ) {
        const notAdmin = new EmbedBuilder()
          .setDescription(`${cmd.name} is limited to admins only.`)
          .setColor(Colors.Red)
          .setFooter({
            text: client.footer,
          });
        return interaction.reply({
          embeds: [notAdmin],
        });
      }
      if (
        cmd.staff === true &&
        !client.config.staff.includes(interaction.member.id)
      ) {
        const notAdmin = new EmbedBuilder()
          .setDescription(`${cmd.name} is limited to staff only.`)
          .setColor(Colors.Red)
          .setFooter({
            text: client.footer,
          });
        return interaction.reply({
          embeds: [notAdmin],
        });
      }
      try {
        cmd.run(client, interaction, args);
      } catch (error) {
        return client.errors(client, error.stack, interaction);
      }
    } else {
    }
  }
};
