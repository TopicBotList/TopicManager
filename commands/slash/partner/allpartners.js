const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const config = require("../../../config/config.js");

module.exports = {
  name: "all-partners",
  description: "Tells you about all our partners.",
  cooldown: "3",
  disabled: false,
  run: async (client, interaction, args) => {
    try {
      const response = await fetch(`https://api.topiclist.xyz/partners/@all`);
      const partners = await response.json();

      if (!Array.isArray(partners)) {
        throw new Error("Partners data is not in the expected format.");
      }

      const partnerEmbed = new MessageEmbed()
        .setTitle("Our Partners")
        .setColor(client.color)
        .setFooter(client.footer);

      partners.forEach((partner) => {
        partnerEmbed.addField(
          partner.title,
          `[${partner.text}](${partner.link})`
        );
      });

      return interaction.reply({
        embeds: [partnerEmbed],
      });
    } catch (error) {
      console.error("Error fetching partners:", error);
      if (error instanceof TypeError && error.message.startsWith("body used already")) {
        console.error("Response body already consumed.");
      } else {
        console.error("API Response:", await response.text());
      }
      return interaction.reply("Sorry, I couldn't fetch our partners at the moment.");
    }
  },
};
