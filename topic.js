const {
    Client,
    Collection,
    GatewayIntentBits
} = require('discord.js');

const client = new Client({
    fetchAllMembers: true,
    allowedMentions: {
        parse: ["roles", "users", "everyone"],
        repliedUser: false
    },
    partials: [
        'MESSAGE',
        'CHANNEL',
        'REACTION',
    ],
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
        GatewayIntentBits.GuildScheduledEvents
    ],
});

client.commands = new Collection();
client.slash = new Collection();
client.aliases = new Collection();
client.cooldowns = new Collection();

client.config = require("./settings/config.json");
client.rolesList = require("./settings/roles.json");
client.channelsList = require("./settings/channels.json");
client.database = require("./database");
client.logger = require("./functions/logger");
client.errors = require("./functions/errors");

let date = new Date();
client.footer = `\u00a9 ${date.getFullYear()} • TopicBotList`
client.logo = `https://i.imgur.com/D8Idxtb.png`
client.banner = `https://i.imgur.com/r4VLX29.png`
client.color = `#0000FF`

const eventHandler = require('./functions/handlers');
eventHandler.loadEvents(client);
eventHandler.loadCommands(client);
eventHandler.loadSlash(client);

client.login(client.config.bot.token);