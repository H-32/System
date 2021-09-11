const Discord = require('discord.js')
const client = new Discord.Client({
	autoReconnect: true,
	partials: ["MESSAGE", "CHANNEL", "GUILD_MEMBER", "REACTION", "MESSAGE", "USER"],
  disableEveryone: true
});

const fs = require('fs');
const { token, prefix, id} = require("./bot.json");
const fetch = require("node-fetch");

client.on('ready', () => {
     client.user.setActivity("King Profe 👑", {type:"COMPETING"});
     console.log(`${client.user.username} is Online !
     __________________________________________________
     Server => ${client.guilds.cache.size}
     _____________________________________
     
     Developer : King Profe 👑`);
})

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.queue = new Map()

const Categories = ["admin","fun"]; //Commands => Category => Command

Categories.forEach(async function(Category) { //
    fs.readdir(`./commands/${Category}`, async function(error, files) {
      if (error) throw new Error(`Error In Command - Command Handler\n${error}`);
      files.forEach(async function(file) {
        if (!file.endsWith(".js")) throw new Error(`A File Does Not Ends With .js - Command Handler!`);
        let command = require(`./commands/${Category}/${file}`);
   
        if (!command.name || !command.aliases) throw new Error(`No Command Name & Command Aliases In A File - Command Handler!`);
        if (command.name) client.commands.set(command.name, command);
        if (command.aliases) command.aliases.forEach(aliase => client.aliases.set(aliase, command.name));
        if (command.aliases.length === 0) command.aliases = null;
      });
    });
});


client.on("message", async message => {

     let Prefix = prefix

     if (message.author.bot || !message.guild || message.webhookID) return;
   
     if (!message.content.startsWith(Prefix)) return;
   
     let args = message.content.slice(Prefix.length).trim().split(/ +/g);
     let cmd = args.shift().toLowerCase();
   
     let command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
   
     if (!command) return console.log(`No Command Found!`);
   
   
   
     if (command) {
       command.run(client, message, args)
     };
});

client.on('message', function(profe)
{
  if(profe.content.startsWith(prefix + "Help") || profe.content.startsWith(`${prefix}help-me`)
  || profe.content.startsWith(`${prefix}مساعدة`) || profe.content.startsWith(`${prefix}help`))
  {
    let na = profe.content.split(" ").slice(1).join(" ");
    let ritaj = profe.content.split(" ").slice(2).join(" ");
    var HR = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(profe.author.username,profe.author.avatarURL())
    .setThumbnail(profe.author.avatarURL())
    .setTimestamp()
    .setTitle("Rict A Reaction To Open Command")
    .setDescription(`
    > Public : Click this emoji 👨‍👦
    > Admins : Click this emoji ⚙️
    > Music : Click this emoji 🎧
    > Fun : Click this emoji 🎮
    
    > Open Your Dm || افتح الخاص `)
    profe.channel.send(HR).then(p=>
      {
        p.react("👨‍👦")
        p.react("⚙️")
        p.react("🎧")
        p.react("🎮")
        .then(() => p.react("👨‍👦"))
        .then(() => p.react("⚙️"))
        .then(() => p.react("🎧"))
        .then(() => p.react("🎮"))

        let reaction1Filter = (reaction, user) => reaction.emoji.name === '👨‍👦' && user.id === profe.author.id;
        let reaction2Filter = (reaction, user) => reaction.emoji.name === '⚙️' && user.id === profe.author.id;
        let reaction3Filter = (reaction, user) => reaction.emoji.name === '🎧' && user.id === profe.author.id;
        let reaction4Filter = (reaction, user) => reaction.emoji.name === '🎮' && user.id === profe.author.id;
        let reaction1 = p.createReactionCollector(reaction1Filter, {timeout:20000});
        let reaction2 = p.createReactionCollector(reaction2Filter, {timeout:19000});
        let reaction3 = p.createReactionCollector(reaction3Filter, {timeout:18000});
        let reaction4 = p.createReactionCollector(reaction4Filter, {timeout:17000});

        reaction1.on("collect", p =>
        {
          var HR1 = new Discord.MessageEmbed()
          .setTitle("Public Command")
          .setColor("RANDOM")
          .setDescription(`
          > \`${prefix}server\`
          > \`${prefix}user\`
          > \`${prefix}avatr\`
          > \`${prefix}move\`
          > \`${prefix}nick\`
          > \`${prefix}reset\`
          > \`${prefix}tag\`
          > \`${prefix}roll\`
          > \`${prefix}translate\`
          > \`${prefix}Youtube\`
          > \`${prefix}Google\`
          > \`${prefix}G-password\` Open You'r Dm`)
          profe.channel.send(new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`> Lock Your Dm`)).then((p) => {
            p.delete({timeout:10000})
          })
          profe.author.send(HR1)
        })
        reaction2.on("collect", p =>
        {
          var HR2 = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setTitle('Admins Command')
          .setDescription(`
          > \`${prefix}ban\` 
          > \`${prefix}kick\` 
          > \`${prefix}unban\` 
          > \`${prefix}mute\` 
          > \`${prefix}unmute\`
          > \`${prefix}lock\` 
          > \`${prefix}unlock\`
          > \`${prefix}hidden\`
          > \`${prefix}unhidden\`
          > \`${prefix}clear\` 
          > \`${prefix}vkick\`
          > \`${prefix}prison\`
          > \`${prefix}unprison\`
          > \`${prefix}antibots on\`
          > \`${prefix}antibots off\`
          > \`${prefix}antilink on\`
          > \`${prefix}antilink off\`
          > \`${prefix}AntiB.W on\`
          > \`${prefix}AntiB.W off\``)
          profe.channel.send(new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`> Lock Your Dm`)).then((p) => {
            p.delete({timeout:10000})
          })
          profe.author.send(HR2)
        })
        reaction3.on("collect", p =>
        {
          var HR3 = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setTitle("Music Command")
          .setDescription(`
          > \`${prefix}afk\`
          > \`${prefix}loop\`
          > \`${prefix}lyrics\`
          > \`${prefix}playlist\`
          > \`${prefix}remove\`
          > \`${prefix}search\`
          > \`${prefix}shuffle\`
          > \`${prefix}skipto\`
          > \`${prefix}pause\`
          > \`${prefix}play\`
          > \`${prefix}resume\`
          > \`${prefix}queue\`
          > \`${prefix}skip\`
          > \`${prefix}stop\``)
          profe.channel.send(new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`> Lock Your Dm`)).then((p) => {
            p.delete({timeout:10000})
          })
          profe.author.send(HR3)
        })
        reaction4.on("collect", p =>
        {
          var HR4 = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setTitle("Fun Command")
          .setDescription(`
          > \`${prefix}kill\`
          > \`${prefix}kiss\`
          > \`${prefix}xo\``)
          profe.channel.send(new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`> Lock Your Dm`)).then((p) => {
            p.delete({timeout:10000})
          })
          profe.author.send(HR4)
        })
      })
  }
});








////Bad Word => badword.json
client.on('message', message => {
  var args = message.content.split(/[ ]+/)
  if(message.content.startsWith(`عير بيك`) || message.content.startsWith(`كسختك`) || message.content.startsWith(`عير باختك`) || message.content.startsWith(`امك الكحبة`) 
  || message.content.startsWith(`امك تنيج`) || message.content.startsWith(`انت فرخ`) || message.content.startsWith(`فرخ`) || message.content.startsWith(`نيج`) || message.content.startsWith(`كسمك`) || message.content.startsWith(`كسختك`)
  || message.content.startsWith(`كسمك`) || message.content.startsWith(`عير بامك`) || message.content.startsWith(`دنبك العير`) || message.content.startsWith(`فرخ منيوج`) || message.content.startsWith(`دكعد لك بلاع العير`)
  || message.content.startsWith(`دكوم بيه لك فرخ`) || message.content.startsWith(`دكوم بيه`) || message.content.startsWith(`تعال اكعد عليه فرخ`) || message.content.startsWith(`تعال مصه فرخ`)
  || message.content.startsWith(`فروختي`) || message.content.startsWith(`كحبتي`) || message.content.startsWith(`fuck you`) || message.content.startsWith(`fuck`) || message.content.startsWith(`sex`) || message.content.startsWith(`pornhub`)
  || message.content.startsWith(`xnxx`) || message.content.startsWith(`راح انيج امك عله كيف واشك كس اختك  بسيف واخلي الكل ينيجها بكيف راح افتح كس اختك واجب بي وافتح طيز امك واتفل بي وافتح حلك ابوك واخري بي ولك خوش اهل عندك بنيج`) 
  || message.content.startsWith(`امك كحبة`) || message.content.startsWith(`امك`) || message.content.startsWith(`كحبة`) || message.content.startsWith(`اختك`) || message.content.startsWith(`انيج امك`) || message.content.startsWith(`كس اختك`) || message.content.startsWith('عير بيك') || message.content.startsWith(`عير`)
  || message.content.startsWith("انجب")){
    let bad = message.guild.channels.cache.find(ch => ch.name === "log");
    if(!message.guild.me.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`i Don't Have this Permission \`ADMINISTRATOR\``))
    let rolee = message.guild.roles.cache.find(r => r.name === "Mute");
    if(!rolee) return message.channel.send(new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`Make this role \`Mute\` to add role for the member When sending the message BadWord`))
    message.member.roles.add(rolee);
    const prof = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`
    > Name : <@${message.author.id}>
    > ID : ${message.author.id}
    > Tag : ${message.author.tag}
    > Message Delete : ${message.content}`)
    bad.send(prof)
          if(!badword[message.guild.id]) badword[message.guild.id] = {
      onoff: 'Off'

          }
      if(badword[message.guild.id].onoff === 'Off') return;
      message.delete()
  return message.channel.send(new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`The Anti BadWord ON ! So You Cant type Bad Word Here && Now You Have Mute`)
  .setTitle("Anti BadWord Command"))
  }
});
///Bad Word => badword.json
let badword = JSON.parse(fs.readFileSync('./badword.json' , 'utf8'));
client.on('message', profe => {
    if(profe.content.startsWith(prefix + "AntiB.W off")) {
        if(!profe.channel.guild) return profe.channel.send(new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`This Command Only For Servers`));
        if(!profe.member.hasPermission('ADMINISTRATOR')) return profe.channel.send(new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription("Sorry But You Dont Have Permission** `ADMINISTRATOR`"));
        badword[profe.guild.id] = {
onoff: 'Off',
}
profe.channel.send(new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`The AntiBadWord is off ❌`)
.setFooter(`By : ${profe.author.username}`))
          fs.writeFile("./badword.json", JSON.stringify(badword), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }

        })
        client.on('message', profe => {
    if(profe.content.startsWith(prefix + "AntiB.W on")) {
        if(!profe.channel.guild) return profe.channel.send(new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`This Command Only For Servers`));
        if(!profe.member.hasPermission("ADMINISTRATOR")) return profe.channel.send(new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription("Sorry But You Dont Have Permission** `ADMINISTRATOR`"));
        badword[profe.guild.id] = {
onoff: 'On',
}
profe.channel.send(new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`The AntiBadWord is on ✅`)
.setFooter(`By : ${profe.author.username}`))
          fs.writeFile("./badword.json", JSON.stringify(badword), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }

})

///Anti Link => spread.json => spread
let spread = JSON.parse(fs.readFileSync('./spread.json' , 'utf8'));
client.on('message', message => {
    if(message.content.startsWith(prefix + "antilink off")) {
        if(!message.channel.guild) return message.channel.send(new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`This Command Only For Servers`));
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription("Sorry But You Dont Have Permission** `ADMINISTRATOR`"));
spread[message.guild.id] = {
onoff: 'Off',
}
message.channel.send(new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`The AntiLink is off ❌`)
.setFooter(`By : ${message.author.username}`))
          fs.writeFile("./spread.json", JSON.stringify(spread), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }

        })
        client.on('message', message => {
    if(message.content.startsWith(prefix + "antilink on")) {
        if(!message.channel.guild) return message.channel.send(new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`This Command Only For Servers`));
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription("Sorry But You Dont Have Permission** `MANAGE_GUILD`"));
spread[message.guild.id] = {
onoff: 'On',
}
message.channel.send(new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`The AntiLink is on ✅`)
.setFooter(`By : ${message.author.username}`))
          fs.writeFile("./spread.json", JSON.stringify(spread), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }

})

client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://www.snapchat.com/') || message.content.includes('https://www.instagram.com/')
    || message.content.includes('https://www.twitter.com/') || message.content.includes('http://www.facebook.com/') 
    || message.content.includes('https://www.discordapp.com/') || message.content.includes("https://discord.gg/")
    || message.content.includes('https://') || message.content.includes("http://www.gmail.com/") || message.content.includes("discord.gg/")){
      if(message.member.hasPermission('EMBED_LINKS')) return;
      if(message.member.hasPermission('EMBED_LINKS')) return message.channel.send(new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`You Don't Have this permission \`EMBED_LINKS\` So You Can't send link`))
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.channel.send(new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`The Antispread ON ! So You Cant spread Here`)
    .setTitle("Spread Command"))
    }
});

////System
let antibots = JSON.parse(fs.readFileSync('./antibots.json' , 'utf8'));
  client.on('message', message => {
    
      if(message.content.startsWith(prefix + "antibots on")) {
          if(!message.channel.guild) return;
          if(!message.member.hasPermission('ADMINISTRATOR')) return;
  antibots[message.guild.id] = {
  onoff: 'On',
  }
  message.channel.send(`**AntiBots Join Is On**`)
            fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
              if (err) console.error(err)
              .catch(err => {
                console.error(err);
            });
              });
            }
    
          })

  client.on('message', message => {
    if(message.content.startsWith(prefix + "antibots off")) {
          if(!message.channel.guild) return;
          if(!message.member.hasPermission('ADMINISTRATOR')) return;
  antibots[message.guild.id] = {
  onoff: 'Off',
  }
  message.channel.send(`**AntiBots Join Is Off**`)
            fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
              if (err) console.error(err)
              .catch(err => {
                console.error(err);
            });
              });
            }
  
          })    
  
  client.on("guildMemberAdd", member => {
    if(!antibots[member.guild.id]) antibots[member.guild.id] = {
  onoff: 'Off'
  }
    if(antibots[member.guild.id].onoff === 'Off') return;
  if(member.user.bot) return member.kick()
  })
  
  fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
  if (err) console.error(err)
  .catch(err => {
  console.error(err);
  });
  
})



client.login(token)
