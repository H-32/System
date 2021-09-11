const Discord = require('discord.js');

module.exports = {
    name:"unmute",
    aliases: ["تكلم"],
    cooldown: 1,

    async run (client, message, args) {

        if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send("You don't have permissions");
        var member = message.mentions.members.first()||message.guild.members.cache.get(args[1])||message.guild.members.cache.find(m => m.user.username === args.slice(1).join(' '));
                     if(!member) return message.channel.send(`**Please Mention user or Type the user ID/Username **`)
                let muterole = message.guild.roles.cache.find(r => r.name === 'Muted')
        if(!member.roles.cache.has(muterole.id))return message.channel.send(new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`${member.user.username} is not muted`))
        await member.roles.remove(muterole);
        message.channel.send(new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`
        > Has been unmuted ${member.user.username}`))
    }
}