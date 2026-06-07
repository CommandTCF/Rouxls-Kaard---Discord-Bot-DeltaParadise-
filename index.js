require("dotenv").config();
const { Client, GatewayIntentBits, EmbedBuilder } = require("discord.js");

const rulesEmbed = new EmbedBuilder()
.setTitle('📜 Rules')
.setColor('#0041a8')
.addFields(
{
name: 'Do not spam.',
value: 'Spam is only allowed in the <#1497906029340397687> channel.'
},
{
name: 'Be respectful.',
value: 'Treat all members with respect, including moderators and staff members.'
},
{
name: 'No NSFW or 18+ content.',
value: 'Do not post inappropriate, explicit, or age-restricted content anywhere in the server.'
},
{
name: 'Use common sense.',
value: 'Staff may take action against behaviour that negatively affects the server, even if it is not explicitly listed in these rules.'
},
{
name: 'No begging, scamming, discrimination, or political discussions.',
value: 'This includes racism, homophobia, scams, and other disruptive behaviour.'
},
{
name: 'Do not send links without permission.',
value: 'Links are only allowed with moderator approval, unless they are images or YouTube videos.'
},
{
name: 'No advertising outside designated channels.',
value: 'Only advertise in the <#1497906029340397681> channel.'
},
{
name: 'Do not abuse loopholes.',
value: 'Attempting to bypass, exploit, or avoid rules or punishments may result in additional consequences.'
},
{
name: 'Do not repeatedly ask for unmuting or unbanning.',
value: 'Use the appeals server for this.'
},
{
name: 'Do not evade punishments.',
value: 'Creating/using alternate accounts or otherwise bypassing mutes, timeouts, or bans is prohibited.'
},
{
name: 'Do not misuse the ticket system.',
value: 'Tickets should only be used for support, reports, appeals, or other legitimate purposes.'
},
{
name: 'All rules apply to staff members.',
value: 'If you believe a staff member is breaking the rules, contact another staff member or create a ticket.'
},
{
name: 'Have fun!',
value: 'Enjoy your time in the server and help create a positive community.'
}
);

const warnSystemEmbed = new EmbedBuilder()
.setTitle('⚠️ Warn System')
.setColor('#7438ff')
.addFields(
{
name: 'Warning 1',
value: 'A verbal warning for minor rule violations or heated arguments. You will receive the <@&1497906027797155949> role.'
},
{
name: 'Warning 2',
value: 'A warning for more serious rule violations. You will receive the <@&1497906027797155950> role and may be timed out for 10 minutes to 6 hours, depending on severity.'
},
{
name: 'Warning 3',
value: 'A warning for repeat offences or moderate rule violations. You will receive the <@&1497906027797155951> role and may be timed out for 1–2 days. Staff may DM you to discuss the situation.'
},
{
name: 'Warning 4',
value: 'A severe warning for repeated misconduct or major rule violations. You will receive the <@&1497906027797155952> role and may be timed out for 5 days to 2 weeks. Staff will likely DM you regarding your behaviour.'
},
{
name: 'Warning 5',
value: 'A very severe punishment for members who repeatedly break rules or refuse to follow staff instructions. You will receive the <@&1497906027797155953> role and may also be placed on <@&1497906027319001222>. Removal from the blacklist is at staff discretion and may require a significant period of improved behaviour.'
},
{
name: 'Blacklist',
value: 'Members placed on <@&1497906027319001222> will lose access to many server features. Removal from the blacklist is at staff discretion and depends on sustained improvement in behaviour.'
}
);

const client = new Client({
intents: [
GatewayIntentBits.Guilds,
GatewayIntentBits.GuildMessages,
GatewayIntentBits.MessageContent
]
});

client.on("clientReady", () => {
console.log(Logged in as ${client.user.tag});
});

client.on("messageCreate", async message => {
if (message.author.bot) return;

if (message.content === "!ping") {
message.reply("Pongeth. 👑");
}

if (message.content === "!rules") {
await message.channel.send({ embeds: [rulesEmbed] });
await message.channel.send({ embeds: [warnSystemEmbed] });
}
});

client.login(process.env.DISCORD_TOKEN);
