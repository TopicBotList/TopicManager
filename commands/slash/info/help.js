const {
  EmbedBuilder,
  SelectMenuBuilder,
  ButtonBuilder,
  ActionRowBuilder,
  ButtonStyle,
} = require("discord.js");
const { readdirSync } = require("fs");

module.exports = {
  help: {
    name: "help",
    category: "info",
    disabled: false,
    args: false,
    description: "Sends you a detailed list of my commands.",
    cooldown: 3,
  },
  async run(client, interaction) {
    try {
      const categories = readdirSync("./commands/slash");
      const options = categories.map((cat) => ({
        label: cat[0].toUpperCase() + cat.slice(1),
        value: cat,
        description: `Click to see commands for: ${cat}`,
      }));

      const selectMenu = new SelectMenuBuilder()
        .setCustomId("help-menu")
        .setPlaceholder("Click to see command categories")
        .addOptions(options);

      const homeButton = new ButtonBuilder()
        .setCustomId("home")
        .setLabel("Home")
        .setStyle(ButtonStyle.PRIMARY);

      const row = new ActionRowBuilder()
        .addComponents(selectMenu)
        .addComponents(homeButton);

      const embed = new EmbedBuilder()
        .setAuthor(`${client.user.username} - Help Menu`)
        .setColor("#7289da")
        .setDescription(
          "My prefix is `/`. Use the menu to view commands based on their category!",
        );

      await interaction.reply({
        embeds: [embed],
        components: [row],
        ephemeral: true,
      });
    } catch (error) {
      console.error("Error in help command:", error);
    }
  },
};
