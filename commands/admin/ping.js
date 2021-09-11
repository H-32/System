const Discord = require('discord.js');
module.exports = {
    name: "ping",
    aliases: ["بنق"],
    usage: "[ban or باند]",
    description: "ban command",
    cooldown: 5,
    async run (client, message, args) {
     message.channel.send(new Discord.MessageEmbed()
     .setColor("RANDOM")
     .setTitle("My Ping ...?")
     .setDescription(`${client.ws.ping}`)
     .setFooter("Profe 👑"))
    }
}