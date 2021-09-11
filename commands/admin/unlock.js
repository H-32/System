const Discord = require('discord.js');

module.exports ={
     name:"unlock",
     aliases: ["فتح"],
     cooldown: 1,

     async run (client, message, args) {

          if(!message.guild.me.hasPermission('MANAGE_CHANNELS'))return message.reply('**i dont hava premission `MANAGE_CHANNELS`:pleading_face: **')
          if(!message.member.hasPermission('MANAGE_CHANNELS'))return message.channel.send(new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription("you dont hava`MANAGE_CHANNELS`Permission.!"))
          
          message.channel.overwritePermissions([{
              id:message.guild.id,
              allow:['SEND_MESSAGES'],
            }]).then(p=>{
                var professor = new Discord.MessageEmbed()
                .setColor('#RANDOM')
                .setThumbnail(client.user.avatarURL())
                .setTitle(`Unlock ${message.channel.name} 🔓`)
                .setDescription(`This Channel is <#${message.channel.id}> 🔓`)
                message.channel.send(professor);
            })
          
            }
}
