const Discord = require('discord.js');

module.exports = {
     name:"reset",
     aliases: ["رست"],
     cooldown: 1,
     
     async run (client, message, args) {
          const member = message.mentions.members.first();

          if(!member) return message.channel.send(`<@${message.author.id}>`,new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`Please specify a member!`))

          try {
               member.setNickname(null)
               message.channel.send(`<@${message.author.id}>`,new Discord.MessageEmbed()
               .setColor("RANDOM")
               .setDescription(`The member's name has reset`))
          } catch (err){
               message.channel.send(`<@${message.author.id}>`,new Discord.MessageEmbed()
               .setColor("RANDOM")
               .setDescription("I don't have permission to reset" + member.toString() + "nickname"));
          }
     }
}