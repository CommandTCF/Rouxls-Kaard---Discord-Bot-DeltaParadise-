require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", async message => {
if (message.author.bot) return;

```
if (message.content === "!ping") {
    message.reply("Pongeth. 👑");
}

if (message.content === "!rules") {
    await message.channel.send({ embeds: [rulesEmbed] });
    await message.channel.send({ embeds: [warnSystemEmbed] });
}
```

});


client.login(process.env.DISCORD_TOKEN);
