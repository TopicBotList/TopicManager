const { MongoClient } = require('mongodb');
const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = 'tbl!';
const adminId = '787241442770419722';
const staffServerId = '927923512050597898';
const mongoUri = 'mongodb+srv://Admin:RanveerSoni11@topic.q8qcpfz.mongodb.net';

const mongoClient = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
  mongoClient.connect((err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Connected to MongoDB!');
  })
// we are using mongo here so we could save the staff name in the database for the staff remove command that will also fetch this from the db
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) {
    return;
  }
  if (interaction.commandName === 'whitelist') {
    if (interaction.user.id !== adminId) {
      await interaction.reply({ content: 'You are not authorized to use this command.', ephemeral: true });
      return;
    }
    const userId = interaction.options.getString('user-id');
    const userName = interaction.options.getString('user-name');
    if (!userId || !userName) {
      await interaction.reply({ content: 'Please provide both user ID and name.', ephemeral: true });
      return;
    }
    const staffServer = client.guilds.cache.get(staffServerId);
    if (!staffServer) {
      await interaction.reply({ content: 'Failed to retrieve staff server.', ephemeral: true });
      return;
    }
    const member = await staffServer.members.fetch(userId).catch(() => null);
    if (!member) {
      await interaction.reply({ content: 'Failed to retrieve member.', ephemeral: true });
      return;
    }
    const staffCollection = mongoClient.db().collection('staff');
    const result = await staffCollection.findOneAndUpdate(
      { userId },
      { $set: { userName } },
      { upsert: true },
    );
    if (result.ok) {
      await interaction.reply(`Successfully whitelisted ${userName}.`);
    } else {
      await interaction.reply('Failed to whitelist user.');
    }
  } else if (interaction.commandName === 'staff-list') {
    const staffCollection = mongoClient.db().collection('staff');
    const staffList = await staffCollection.find().toArray();
    const message = staffList.map((staff) => `${staff.userName} (${staff.userId})`).join('\n');
    await interaction.reply(`**Staff List:**\n${message}`);
  }
});