const fs = require('fs');

/**
 * LOAD THE CLIENT EVENTS
 */
const loadEvents = async function (client) {
    const eventFolders = fs.readdirSync("./events");
    for (const folder of eventFolders) {
        const eventFiles = fs.readdirSync(`./events/${folder}`).filter((file) => file.endsWith(".js"));
        for (const file of eventFiles) {
            const event = require(`../events/${folder}/${file}`);
            let eventname = file.replace('.js', '') || null
            if (eventname) {
                client.on(eventname, event.run.bind(null, client))
                //Logger.sendLogs(`Loaded ${file} from ${folder}.`, 'event');
            }
        }
    }
}

/**
 * LOAD THE CLIENT COMMANDS
 */
const loadCommands = async function (client) {
    fs.readdirSync('./commands/base').forEach((dir) => {
        const commandFiles = fs.readdirSync(`./commands/base/${dir}`).filter((f) => f.endsWith('.js'));
        for (const file of commandFiles) {
            const command = require(`../commands/base/${dir}/${file}`);
            if (command) {
                client.commands.set(command.help.name, command);
                command.help.aliases.forEach(alias => {
                    client.aliases.set(alias, command.help.name);
                });
                // Logger.sendLogs(
                //     `Loading Command: ${command.help.name} from Category: ${command.help.category} with Aliases: ${command.help.aliases}`,
                //     'cmd',
                // );
            }
        }
    });
}

/**
 * LOAD THE slash COMMANDS
 */
 const loadSlash = async function (client) {
    // fs.readdirSync('./base/commands').forEach((dir) => {
    //     const commandFiles = fs.readdirSync(`./base/commands/${dir}`).filter((f) => f.endsWith('.js'));
    //     for (const file of commandFiles) {
    //         const command = require(`../base/commands/${dir}/${file}`);
    //         if (command) {
    //             client.commands.set(command.help.name, command);
    //             command.help.aliases.forEach(alias => {
    //                 client.aliases.set(alias, command.help.name);
    //             });
    //             Logger.sendLogs(
    //                 `Loading Command: ${command.help.name} from Category: ${command.help.category} with Aliases: ${command.help.aliases}`,
    //                 'cmd',
    //             );
    //         }
    //     }
    // });
}

module.exports = {
    loadEvents,
    loadCommands,
    loadSlash
};