const Discord = require('discord.js');

module.exports = {
     name:"kiss",
     aliases: ["قبلة","بوسة"],
     cooldown: 1,

     async run (client, message, args) {
          if (message.author.bot) return;
               const mention = message.mentions.users.first()
               if(message.channel.id === '880624191030837268'){
                    if(!mention) return message.channel.send(new Discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setDescription(`Please specify a user to kiss him`))
                    const { img } = require('../img/kiss.json')
                    message.channel.send(new Discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setImage(`${img}`)
                    .setTitle(`I gave him a kiss ${mention.username}`))
               }
     }
}