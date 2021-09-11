const Discord = require('discord.js');

module.exports = {
    name: "kick",
    usage: "[kick or كيك or برا]",
    description: "Kicks a member from the server",
    aliases: ['برا','كيك','طرد','سيو'],
    cooldown: 1,
    async run (client, message, args) {

if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(new Discord.MessageEmbed()
.setDescription("> You don't have permissions"))
                 if(!message.guild.me.hasPermission('KICK_MEMBERS')) return message.channel.send(new Discord.MessageEmbed()
                 .setColor("RANDOM")
                 .setDescription("> I don't have permissions"))
              let member = message.mentions.members.first()||message.guild.members.cache.get(args[1])||message.guild.members.cache.find(m => m.user.username === args.slice(1).join(' '));
                      if(!member) return message.channel.send(new Discord.MessageEmbed()
                      .setColor("RANDOM")
                      .setDescription("> Please Mention user or Type the user ID/Username"))
                      if (member.id === message.author.id)return message.channel.send(`<@${message.author.id}>`,new Discord.MessageEmbed()
                      .setColor("RANDOM")
                      .setDescription(`> You can't kick yourself`))
            if (member.id === message.guild.me.id)return message.channel.send(new Discord.MessageEmbed()
            .setDescription("> You can't kick me dumbass"))
                           if(!member.kickable) return message.channel.send(`**> The member role is higher than me**`);
      
               await member.kick()
               message.channel.send(new Discord.MessageEmbed()
               .setColor("RANDOM")
               .setDescription(`**${member.user.username} Has been kicked from the server ✈**`))

              const log = message.guild.channels.cache.find(ch => ch.name === "log");
              log.send(new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`
        **Info Member**
        Name | (**${member.user.username}**)
        ID | (**${member.user.id}**)
        
        **Kick**
        Name Guild : (**${message.guild.name}**)
        ID Guild : (**${message.guild.id}**)
        Kick By : (**<@${message.author.id}>**)`))
          }
}