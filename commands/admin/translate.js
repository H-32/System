const Discord = require('discord.js');
const translate = require('@iamtraction/google-translate');

module.exports = {
     name: "translate",
     aliases: ["مترجم"],
     cooldown: 1,
     async run (client, message, args) {

             const txt = args.slice(1).join(" ")
            const lang = args[0]
            if(!txt) return message.channel.send(new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`please provide a text to translate`))
            if(!lang) return message.channel.send(new Discord.MessageEmbed()
            .setDescription('Please provide a ISO code of the language')
            .setColor("RANDOM"))
          translate(txt, { to: lang }).then(res => {
               const embed = new Discord.MessageEmbed()
               .setColor("RANDOM")
               .setDescription(res.text)
               message.channel.send(embed); // OUTPUT: You are amazing!
             }).catch(err => {
               message.channel.send(new Discord.MessageEmbed()
               .setColor("RANDOM")
               .setDescription(`Please provide a valid ISO language code `))
             }); 
     }
}