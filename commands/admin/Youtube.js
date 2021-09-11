const Discord = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
     name: "Youtube",
     aliases: ["يوتيوب","مشاهده","yt"],
     description: "Clears messages",
     cooldown: 5,
     async run (client, message, args) {
          const chn = message.member.voice.channel
          const channel = message.member.voice.channelID;
          if (!chn) return message.channel.send("**عليك دخول روم صوتي اولاً**");
          if(!message.guild.me.hasPermission("CREATE_INSTANT_INVITE")) return message.channel.send(`**لا امتلك صلاحية \`Create Invite\`**`) 
        
        fetch(`https://discord.com/api/v8/channels/${channel}/invites`, {
         method: "POST",
         body: JSON.stringify({
         max_age: 3600, // نظام الدقائق , يعني 86400 = يوم كامل
         max_uses: 99, // عدد القادرين على دخول البث
         target_application_id: "755600276941176913", // لا تغيره ما راح يشتغل اليوتيوب بدونه
         target_type: 2, // خليه مثل ما هو
         temporary: false, // (هذا مؤقت للبث) خليه مثل ما هو
         validate: null // خليه مثل ما هو ما يحتاج تغيره ابداً
        }),
           headers: {
           "Authorization": `Bot ${client.token}`, // خليه مثل ما هو لا  تغيره
           "Content-Type": "application/json" // خليه مثل ما هو لا  تغيره
          }
        })
           .then(json => json.json())
           .then(link => {
            if (link.error || !link.code) return message.channel.send("**هُناك خطأ**");
             const embedy  = {
             fields: {
             name: 'YouTube Broadcast',
             value: `[Click me](https://discord.gg/${link.code})`
            }
           }
          message.channel.send({ embed: embedy });
        })
           .catch((err) => {
            message.channel.send(`**هُناك مشكلة عليك اصلاحها**`); 
            console.log(err)
           })
     }
}