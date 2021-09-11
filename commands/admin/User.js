const Discord = require('discord.js');
const ms = require('ms');
const moment = require('moment')
module.exports = {
     name:"user",
     aliases: ["معلوماتي","معلومات","يوزر"],
     cooldown: 5,
     async run (client, message, args) {

   var userr = message.mentions.users.first() || message.author;
    var memberr = message.mentions.members.first() || message.member;
    let userinfo = userr.displayAvatarURL({ size: 2048 , dynamic: true });
    let embed = new Discord.MessageEmbed()
    . setColor("BLUE")
    .setAuthor(userr.username,userr.avatarURL({dynamic:true}))
    .setThumbnail(userinfo)
    .addField(`Joind Discord :`,`\`${moment(userr.createdAt).format('YYYY/M/D')} ${moment(userr.createdAt).format('LTS')}\`\n**${moment(userr.createdAt, "YYYYMMDD").fromNow()}**`,true)
    .addField(`Joined Server :`,`\`${moment(memberr.joinedAt).format('YYYY/M/D')} ${moment(memberr.joinedAt).format('LTS')}\`\n**${moment(memberr.joinedAt, "YYYYMMDD").fromNow()}**`,true)
  .setFooter(userr.tag,userr.avatarURL({dynamic:true}))
    message.channel.send(embed)
    }
}
