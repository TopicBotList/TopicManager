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
    aliases: ["commands", "cmds"],
    description: `Sends you a detailed list of my commands.`,
    cooldown: "3",
    usage: [``],
  },
  async run(client, message, args) {
    try {
      const categories = readdirSync(`${__dirname}/../../../commands/slash`);
      let embed = new EmbedBuilder()
        .setAuthor({
          name: `${client.user.username} - Help Menu`,
        })
        .setColor(client.color)
        .setDescription(
          `>>> My prefix is / Use the menu to view a list of commands based on their category!`,
        )
        .setImage(client.banner)
        .setThumbnail(client.logo)
        .setFooter({
          text: client.footer,
        });
      let select = new SelectMenuBuilder()
        .setCustomId("help-menu")
        .setPlaceholder("Click to see my command categories");
      await categories.map((cat) => {
        if (cat) {
          select.addOptions({
            label: `${cat[0].toUpperCase() + cat.slice(1)}`,
            value: `${cat}`,
            description: `Click to See Commands for: ${cat}`,
          });
        }
      });

      let btn = new ButtonBuilder()
        .setCustomId("home")
        .setLabel("Home")
        .setStyle(ButtonStyle.Primary);
      let ButtonsRow = new ActionRowBuilder().addComponents(btn);
      message
        .reply({
          embeds: [embed],
          components: [
            {
              type: 1,
              components: [select],
            },
            ButtonsRow,
          ],
        })
        .then(async (msg) => {
          let filter = (i) => i.user.id === message.author.id;
          let colector = await msg.createMessageComponentCollector({
            filter: filter,
          });
          colector.on("collect", async (i) => {
            if (i.isButton()) {
              if (i.customId === "home") {
                await i.deferUpdate().catch((e) => {});
                msg
                  .edit({
                    embeds: [embed],
                  })
                  .catch((e) => {});
              }
            }
            if (i.isSelectMenu()) {
              a;
              if (i.customId === "help-menu") {
                await i.deferUpdate().catch((e) => {});
                let [directory] = i.values;
                let aa = new EmbedBuilder()
                  .setTitle(`Commands for: ${directory}`)
                  .setColor(client.color)
                  .setDescription(
                    `${client.commands
                      .filter((cmd) => cmd.help.category === directory)
                      .map((cmd) => {
                        return [`\`/cmd.help.name}\``].join(" ");
                      })
                      .join("\n")}`,
                  )
                  .setFooter({
                    text: client.footer,
                  });
                msg.edit({
                  embeds: [aa],
                });
              }
            }
          });
        });
    } catch (e) {
      // error logger here
    }
  },
};
