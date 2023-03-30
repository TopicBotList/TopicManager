require('dotenv').config();

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const { MongoClient } = require('mongodb');

const MONGODB_URI = 'mongodb+srv://Admin:RanveerSoni11@topic.q8qcpfz.mongodb.net';
const DB_NAME = 'topic_staff';

const ADMIN_ID = '787241442770419722';
const STAFF_SERVER_ID = '927923512050597898';

// Connect to MongoDB
let staffCollection;
(async function() {
  const client = await MongoClient.connect(MONGODB_URI, { useUnifiedTopology: true });
  const db = client.db(DB_NAME);
  staffCollection = db.collection('staff');
})();

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand() || interaction.guildId !== STAFF_SERVER_ID || interaction.user.id !== ADMIN_ID) return;

  const { commandName, options } = interaction;

  if (commandName === 'whitelist') {
    const memberId = options.get('member').value;
    const member = await interaction.guild.members.fetch(memberId).catch(() => null);

    if (!member) {
      await interaction.reply(`Invalid member ID provided. Please try again with a valid member ID.`);
      return;
    }

    try {
      const result = await staffCollection.insertOne({ discord_id: member.id, username: member.user.username });
      await interaction.reply(`User ${member.user.username} has been whitelisted!`);
    } catch (err) {
      console.error(err);
      await interaction.reply('An error occurred while whitelisting the user.');
    }
  }

  if (commandName === 'stafflist') {
    try {
      const staffList = await staffCollection.find().toArray();
      const staffNames = staffList.map(staff => staff.username).join('\n');
      await interaction.reply(`The following users are whitelisted staff members:\n${staffNames}`);
    } catch (err) {
      console.error(err);
      await interaction.reply('An error occurred while fetching the staff list.');
    }
  }
});


// inspire from infinitybots