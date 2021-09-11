const Discord = require('discord.js')
const { tictactoe } = require('reconlx')

module.exports = {
    name : 'xo',
    aliases: ["xo"],
    cooldown: 1,
    async run (client, message, args) {
                     const member = message.mentions.members.first()
                     if(message.channel.id === '880624191030837268'){
                        if(!member)  return  message.channel.send(`<@${message.author.id}>`,new Discord.MessageEmbed()
                        .setColor("RANDOM")
                        .setDescription(`Please specify a member`))
                        
                    new tictactoe({
                        player_two: member, 
                        message: message
                    })
            }
    }
}