const { MessageEmbed, ApplicationCommandOptionType } = require("discord.js");

module.exports = {
  name: "eval",
  description: "Evaluate JavaScript code.",
  disabled: false,
  options: [
    {
      name: "code",
      type: ApplicationCommandOptionType.String,
      required: true,
      description: "Please provide the JavaScript code to evaluate.",
    },
  ],
  run: async (client, interaction, args) => {
    const code = interaction.options.getString("code");

    try {
      let result = eval(code);
      result = result instanceof Promise ? await result : result;

      const evalEmbed = new MessageEmbed()
        .setColor(client.color)
        .setFooter({
          text: client.footer,
        })
        .setTitle("Evaluation Result")
        .addField("Input", `\`\`\`js\n${code}\n\`\`\``)
        .addField("Output", `\`\`\`js\n${result}\n\`\`\``);

      interaction.reply({ embeds: [evalEmbed] });
    } catch (error) {
      const errorEmbed = new MessageEmbed()
        .setColor("#FF0000")
        .setFooter({
          text: client.footer,
        })
        .setTitle("Error Occurred")
        .setDescription(`\`\`\`js\n${error}\n\`\`\``);

      interaction.reply({ embeds: [errorEmbed] });
    }
  },
};
