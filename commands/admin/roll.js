const Discord = require('discord.js');

module.exports = {
     name:"roll",
     aliases: ["رند"],
     cooldown: 1,

     async run (client, message, args){
          if(!message.member.hasPermission('MANAGE_CHANNELS'))return message.channel.send(new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription("you dont hava`MANAGE_CHANNELS`Permission.!"))
          let number = Math.floor(Math.random() * 10)
          if (number > 10) number--;
          message.channel.send(new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`${number}`))
     }
}