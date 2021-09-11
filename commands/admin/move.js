const Discord = require('discord.js');


module.exports = {
     name: "move",
     aliases: ["سحب"],
     cooldown: 1,

     async run (client, message, args) {
          
          if (message.member.hasPermission("MOVE_MEMBERS")) {
               if (message.mentions.users.size === 0) {
               return message.channel.send(new Discord.MessageEmbed()
               .setColor("RANDOM")
               .setDescription("لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]"))
              }
              if (message.member.voiceChannel != null) {
               if (message.mentions.members.first().voiceChannel != null) {
               var authorchannel = message.member.voiceChannelID;
               var usermentioned = message.mentions.members.first().id;
              var embed = new Discord.MessageEmbed()
               .setColor("RANDOM")
               .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك✅`)
              var embed = new Discord.MessageEmbed()
              .setTitle(`You are Moved in ${message.guild.name}`)
               .setColor("RANDOM")
              .setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
               message.guild.members.cahce.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
              message.guild.members.cahce.get(usermentioned).send(embed)
              } else {
              message.channel.send(new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setDescription("`لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`"))
              }
              } else {
               message.channel.send(new Discord.MessageEmbed() 
               .setColor("RANDOM")
               .setDescription(`يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك`))
              }
              } else {
              message.react("❌")
              }
     }
}