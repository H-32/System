const generator = require('generate-password');
const Discord = require('discord.js');

module.exports = {
     name: "G-password",
     aliases: ["باسورد","pa"],
     usage: "[G-password or باسورد or pa]",
     description: "generate-password",
     cooldown: 5,
     async run (client, message, args) {
          var password = generator.generate({
               length: 20,
               numbers: true,
               symbols: true,
               lowercase: true,
               uppercase: true,
               excludeSimilarCharacters: true,
               exclude: true,
               strict: true
          });
          message.channel.send(new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription("Lock u'r Dm..!"))
          message.author.send(new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription(password))
     }
}