const Discord = require('discord.js');

module.exports = {
     name:"nick",
     aliases: ["تغير"],
     cooldown: 1,
     
     async run (client, message, args) {
          const member = message.mentions.members.first();

          if(!member) return message.channel.send(`<@${message.author.id}>`,new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`Please specify a member!`))

          const arguments = args.slice(1).join(" ")

          if(!arguments) return message.channel.send(`<@${message.author.id}>`,new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription("Please specify a nickname!"))

          try {
               member.setNickname(arguments)
               message.channel.send(`<@${message.author.id}>`,new Discord.MessageEmbed()
               .setColor("RANDOM")
               .setDescription(`The member's name has changed : \`${arguments}\``))
          } catch (err){
               console.log(err);
               message.channel.send(`<@${message.author.id}>`,new Discord.MessageEmbed()
               .setColor("RANDOM")
               .setDescription("I don't have permission to set" + member.toString() + "nickname"));
          }
     }
}