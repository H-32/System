const Discord = require('discord.js');

module.exports = {
     name:"unban",
     aliases: ["الغاء"],
     cooldown: 1,
     async run (client, message, args){
          if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription("You dont have permission \`BAN_MEMBERS\`"))
          if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`I don\'t have the right permissions. \`BAN_MEMBERS\``))

          let userID = message.content.split(' ').slice(1).join(' ')
          if(!userID || isNaN(userID)) {
               return message.channel.send(new Discord.MessageEmbed()
               .setColor("RANDOM")
               .setDescription(`Please enter the user id to unban`))
          } else{
               let member;

               try{
                    member = await client.users.fetch(userID)
               } catch(err) {
                    console.log(err)
                    return message.channel.send(new Discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setDescription(`Not a valid user!`)).then(m =>
                         m.delete({ timeout: 5000 }))
               }
               message.guild.fetchBans().then( bans => {
                    const user = bans.find(ban => ban.user.id === member.id );

                    if(user) {
                         let channel_log = message.guild.channels.cache.find(ch => ch.name === "log");
                         channel_log.send(new Discord.MessageEmbed()
                         .setColor("RANDOM")
                         .setTitle("UnBan Log Command")
                         .setDescription(`
                         **Info Server**
                         Name Guild : (**${message.guild.name}**)
                         Guild ID : (**${message.guild.id}**)
                         Owner Guild : (**${message.guild.owner}**)
                         
                         **Info Unban**
                         Name Admin : ${message.author.username}
                         Name Member : (**${user.user.username}**)`))
                         message.guild.members.unban(user.user.id)
                    }
                    message.channel.send(new Discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setDescription(`Was Unban from this member ${member.tag}`))
               })
          }
     }
}