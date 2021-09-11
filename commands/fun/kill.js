const Discord = require('discord.js');

module.exports = {
     name:"kill",
     aliases: ["قتل","اقتل"],
     cooldown: 1,

     async run (client, message, args) {
          if (message.author.bot) return;
               const mention = message.mentions.users.first()
               if(message.channel.id === '880624191030837268'){
                    if(!mention) return message.channel.send(new Discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setDescription(`Please specify a user to kill him`))
                    const { img } = require('../img/kill.json')
                    message.channel.send(new Discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setImage(`${img}`)
                    .setTitle(`I Kill Him ${mention.username}`))
               }
     }
}