const Discord = require('discord.js');

module.exports = {
     name: "clear",
     aliases: ["مسح"],
     usage: "[clear or مسح]",
     description: "Clears messages",
     cooldown: 5,
     async run (client, message, args) {
 
         const amount = args.join(" ");
 
         if(!amount) return message.channel.send(`<@${message.author.id}>`, new Discord.MessageEmbed()
         .setColor("RANDOM")
         .setDescription(`please provide an amount of messages for me to delete`))
 
         if(amount > 1000) return message.channel.send(`${message.author.id}`, new Discord.MessageEmbed()
         .setColor("RANDOM")
         .setDescription(`you cannot clear more than 100 messages at once`))
 
         if(amount < 1) return message.channel.send(`${message.author.id}`, new Discord.MessageEmbed()
         .setColor("RANDOM")
         .setDescription(`you need to delete at least one message`))
 
         await message.channel.messages.fetch({limit: amount}).then(messages => {
             message.channel.bulkDelete(messages
     )});
 
 
     message.channel.send(new Discord.MessageEmbed()
     .setColor("RANDOM")
     .setDescription(`A number of messages have been deleted : \`${amount}\``)).then((m) =>
     {
          m.delete({timeout:500})
     })
 
     }
}