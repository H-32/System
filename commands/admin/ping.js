const Discord = require('discord.js');
module.exports = {
    name: "ping",
    aliases: ["بنق"],
    usage: "[ping or بنق]",
    description: "ping command",
    cooldown: 5,
    async run (client, message, args) {
     message.channel.send(new Discord.MessageEmbed()
     .setColor("RANDOM")
     .setTitle("My Ping ...?")
     .setDescription(`${client.ws.ping}`)
     .setFooter("Profe 👑"))
    }
}
