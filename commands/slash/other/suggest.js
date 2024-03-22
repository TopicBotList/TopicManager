const {
  EmbedBuilder,
  Colors,
  ApplicationCommandOptionType,
} = require("discord.js");

module.exports = {
  name: "suggest",
  description: "Sends a suggestion.",
  cooldown: "3",
  disabled: false,
  options: [
    {
      name: "suggestion",
      type: ApplicationCommandOptionType.String,
      required: true,
      description: "Please provide a suggestion.",
    },
  ],
  run: async (client, interaction, args) => {
    let suggestion = interaction.options.getString("suggestion");
    if (!suggestion) {
      const notAdmin = new EmbedBuilder()
        .setDescription(`Please provide a suggestion.`)
        .setColor(Colors.Red)
        .setFooter({
          text: client.footer,
        });
      return interaction.reply({
        embeds: [notAdmin],
      });
    }
    let sugChannel = client.channels.cache.find(
      (c) => c.id === "1007645618145071125",
    );
    if (!sugChannel) {
      const notAdmin = new EmbedBuilder()
        .setDescription(
          `Invaild suggestion channel, Please provide the correct channel id.`,
        )
        .setColor(Colors.Red)
        .setFooter({
          text: client.footer,
        });
      return interaction.reply({
        embeds: [notAdmin],
      });
    }
    if (sugChannel) {
      const suggestionSubmitted = new EmbedBuilder()
        .setAuthor({
          name: `Suggestion Submitted.`,
          iconURL: client.logo,
        })
        .setDescription(`You're suggestion has been submitted.`)
        .setColor(client.color)
        .setTimestamp()
        .setFooter({
          text: client.footer,
        });
      interaction.reply({
        embeds: [suggestionSubmitted],
      });
      //
      const newSuggestion = new EmbedBuilder()
        .setAuthor({
          name: `New Suggestion.`,
          iconURL: client.logo,
        })
        .setDescription(`${suggestion}`)
        .addFields({
          name: `Submitted By:`,
          value: `${interaction.member}`,
        })
        .setColor(client.color)
        .setTimestamp()
        .setFooter({
          text: client.footer,
        });
      return sugChannel
        .send({
          embeds: [newSuggestion],
        })
        .then(async (msg) => {
          await msg.react("✅");
          await msg.react("❌");
        });
    }
  },
};
