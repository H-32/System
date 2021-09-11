const Discord = require('discord.js');

module.exports = {
     name: "server",
     aliases: ["سيرفر"],
     cooldown: 1,
     
     async run (client, message, args) {

          let profe = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setAuthor(message.guild.name, message.guild.iconURL())
          .setTimestamp()
          .setThumbnail(message.guild.iconURL())
          .setTitle("Info Server")
          .setDescription(`
          >  Name Guild :${message.guild.name}
          > Owner Guild :${message.guild.owner}
          > Owner ID :${message.guild.ownerID}
          > Server ID :${message.guild.id}
          
          > Create Guild :${message.guild.createdAt.toLocaleString()}
          > Members :${message.guild.memberCount}
          > Channels  :${message.guild.channels.cache.size}
          > Region :${message.guild.region}

          > VerificationLevel :${message.guild.verificationLevel}
          > Boosts :${message.guild.premiumSubscriptionCount}
          > Roles :${message.guild.roles.cache.size}`)
          
          message.channel.send(profe);
     }
}