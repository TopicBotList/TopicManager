require('dotenv').config()
const express = require('express')
const { Client, Collection, GatewayIntentBits } = require("discord.js");

const client = new Client({
    fetchAllMembers: true,
    allowedMentions: {
        parse: ["roles", "users", "everyone"],
        repliedUser: false,
    },
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildBans,
        GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.GuildIntegrations,
        GatewayIntentBits.GuildWebhooks,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.DirectMessageTyping,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildScheduledEvents,
    ],
});

client.commands = new Collection();
client.slash = new Collection();
client.aliases = new Collection();
client.cooldowns = new Collection();

client.config = require("./config/config.js");
client.logger = require("./functions/logger");
client.errors = require("./functions/errors");

let date = new Date();
client.footer = `\u00a9 ${date.getFullYear()} • TopicBotList`;
client.logo = `https://cdn.topiclist.xyz/images/png/TopicList5.png`;
client.banner = `https://cdn.topiclist.xyz/images/jpg/banner.png`;
client.color = `#0000FF`;

const eventHandler = require("./functions/handlers");
eventHandler.loadEvents(client);
eventHandler.loadSlash(client);

//gclient.login(process.env.devtoken);
client.login(process.env.DISCORD_TOKEN);
//temp use only xD
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})