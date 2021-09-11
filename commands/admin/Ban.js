const Discord = require('discord.js');
module.exports = {
    name: "ban",
    aliases: ["باند"],
    usage: "[ban or باند]",
    description: "ban command",
    cooldown: 5,
    async run (client, message, args) {
        if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("You don't have permissions")
        if(!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send("I don't have permissions")
        let reason = args.slice(1).join(" ");
        var member = message.mentions.members.first()|| message.guild.members.cache.get(args[1])||message.guild.members.cache.find(m => m.user.username === args.slice(1).join(' '));
             if(!member) return message.channel.send(new Discord.MessageEmbed()
             .setColor("RANDOM")
             .setDescription(`Please Mention user or Type the user ID/Username ${args.slice(1).join(' ')}`))
             if (member.id === message.author.id)return message.channel.send(new Discord.MessageEmbed()
             .setColor("RANDOM")
             .setDescription(`U can't ban yourself`))
   if (member.id === message.guild.me.id)return message.channel.send(new Discord.MessageEmbed()
   .setColor("RANDOM")
   .setDescription(`U can't ban me dumbass`))
                  if(!member.bannable) return message.channel.send(new Discord.MessageEmbed()
                  .setColor("RANDOM")
                  .setDescription(`The member role is higher than me`));

        await member.ban({
                    reason: `Was Band From Server By <@${message.author.id}>`
                }).then(() => message.channel.send(new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription("Was Bannd From Server :" + `${member.user.username}✅`)))

        let channel_log = message.guild.channels.cache.find(ch => ch.name === "log");
        channel_log.send(new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`
        **Info Member**
        Name | (**${member.user.username}**)
        ID | (**${member.user.id}**)
        
        **Bannd**
        Name Guild : (**${message.guild.name}**)
        ID Guild : (**${message.guild.id}**)
        Bannd By : (**<@${message.author.id}>**)`))
 } 
}

