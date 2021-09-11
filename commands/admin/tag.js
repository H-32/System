const figlet = require ("figlet")
const Discord = require('discord.js')

module.exports = {
     name:"tag",
     aliases: ["تاق"],
     cooldown: 1,
     
     async run (client, message, args) {
          if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`Type a Message`))
          figlet(args.join(" "), (err, tagmsg) => {
               let profe = new Discord.MessageEmbed()
                 .setColor("RANDOM")
                 .setDescription(`\`\`\`${tagmsg}\`\`\``)
                 .setFooter(`Requested by ${message.author.tag}`)
                 message.channel.send(profe)
          })
     }
}