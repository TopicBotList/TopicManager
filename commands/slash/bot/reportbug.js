const {
  EmbedBuilder,
  Colors,
  ApplicationCommandOptionType,
} = require("discord.js");

module.exports = {
  name: "reportbug",
  description: "Report a bug.",
  cooldown: "3",
  disabled: false,
  options: [
    {
      name: "bug",
      type: ApplicationCommandOptionType.String,
      required: true,
      description: "Please provide a bug.",
    },
  ],
  run: async (client, interaction, args) => {
    let bug = interaction.options.getString("bug");
    if (!bug) {
      const notAdmin = new EmbedBuilder()
        .setDescription(`Please provide a bug.`)
        .setColor(Colors.Red)
        .setFooter({
          text: client.footer,
        });
      return interaction.reply({
        embeds: [notAdmin],
      });
    }
    let bugsChannel = client.channels.cache.find(
      (c) => c.id === "1092756515594698772",
    );
    if (!bugsChannel) {
      const notAdmin = new EmbedBuilder()
        .setDescription(
          `Invaild bug channel, Please provide the correct channel id.`,
        )
        .setColor(Colors.Red)
        .setFooter({
          text: client.footer,
        });
      return interaction.reply({
        embeds: [notAdmin],
      });
    }
    if (bugsChannel) {
      const bugSubmitted = new EmbedBuilder()
        .setAuthor({
          name: `Bug Submitted.`,
          iconURL: client.logo,
        })
        .setDescription(`You're bug has been submitted.`)
        .setColor(client.color)
        .setTimestamp()
        .setFooter({
          text: client.footer,
        });
      interaction.reply({
        embeds: [bugSubmitted],
      });
      //
      const newBug = new EmbedBuilder()
        .setAuthor({
          name: `New Bug.`,
          iconURL: client.logo,
        })
        .setDescription(`${bug}`)
        .addFields({
          name: `Submitted By:`,
          value: `${interaction.member}`,
        })
        .setColor(client.color)
        .setTimestamp()
        .setFooter({
          text: client.footer,
        });
      return bugsChannel
        .send({
          embeds: [newBug],
        })
        .then(async (msg) => {
          await msg.react("✅");
          await msg.react("❌");
        });
    }
  },
};
