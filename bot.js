const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json")

client.on("ready", () => {
  console.log("At your service!");
});

client.on("message", (message) => {
  if (message.content.startsWith(config.prefix + "ping")) {
    message.channel.send("pong! pong pong!");
  }
  if (message.content.startsWith(config.prefix + "bot")) {
    message.channel.send("i am not a bot");
  }
  if (message.content.valueOf() > 9000) {
    message.channel.send("wow over nine thousand!!");
  }
  if (message.content.startsWith("panther hackers")) {
    message.channel.send("NO THIS IS PANTHERHACKERS!!");
  }
});

client.login("config.token");
