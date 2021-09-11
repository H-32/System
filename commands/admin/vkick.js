const Discord = require('discord.js');

module.exports = {
     name:"vkick",
     aliases: ["اخرج"],
     cooldown: 1,

     async run (client, message, args) {
          if(!message.guild.me.hasPermission('MOVE_MEMBERS'))return message.channel.send(new Discord.MessageEmbed()
          .setColor("RANDOMM")
          .setDescription("i dont hava premission `MOVE_MEMBERS`"))
          if(!message.member.hasPermission('MOVE_MEMBERS'))return message.channel.send(new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription("you dont hava`MOVE_MEMBERS`Permission.!"))

          let user = message.guild.member(
               message.mentions.users.first())
               if(!user) return message.channel.send(`<@${message.author.id}>`,new Discord.MessageEmbed()
               .setColor("RANDOM")
               .setDescription(`Please specify a user`))
               if(!message.guild.member(user).voice.channel) return message.channel.send(new Discord.MessageEmbed()
               .setColor("RANDOM")
               .setDescription(`This person is not included in the voice chat`))
               await user.voice.kick()
               message.channel.send(`<@${message.author.id}>`,new Discord.MessageEmbed()
               .setColor("RANDOM")
               .setDescription(`The person has been kicked out of the voice chat`))
     }
}