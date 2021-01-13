const Discord = require('discord.js');
const db = require('quick.db');
const a = require('../ayarlar.json') 
 
exports.run = async function(client, message, args) {

  let user = message.author
    
  const cfx2 = new Discord.MessageEmbed()
  .setDescription(`\`${user.tag}\` Lütfen isteğinizi belirtin.`)
  .setColor("#00ff88")
  .setFooter(`Apollon | İstek Sistemi.`, client.user.avatarURL());
  const cfx3 = new Discord.MessageEmbed()
  .setDescription(`\`${user.tag}\` İsteğinin Gönderilmesini istiyorsan \`istiyorum\` yazman gerekiyor.`)
  .setColor("#00ff88")
  .setFooter(`Apollon | İstek Sistemi.`, client.user.avatarURL());
  const cfx4 = new Discord.MessageEmbed()
  .setDescription(`\`${user.tag}\` İsteğin bildirildi!`)
  .setColor("#00ff88")
  .setFooter(`Apollon | İstek Sistemi.`, client.user.avatarURL());
  
  
  
    let code = args.slice(0).join(' ');
    if (code.length < 1) return message.channel.send(cfx2);
  if (message.author) {
message.channel.send(cfx3)
//CodeFENIX // CFX
.then(() => {
message.channel.awaitMessages(response =>response.content ==='istiyorum', {
max: 1,
time: 30000,
errors: ['time'],
})

.then((collected) => {
message.channel.send(cfx4)
//CodeFENIX //CFX
const cfx = new Discord.MessageEmbed()
.setColor("#00ff88")
.addField(`Kullanıcı Adı`,message.author.username,true)
.addField(`Kullanıcı ID`,message.author.id,true)
.addField(`Kullanıcı Tagı`,message.author.discriminator,true)
.addField("İstek", code)
.setThumbnail(message.author.avatarURL());
client.channels.cache.get("797228976388177980").send(cfx)
});
});
}};

// CodeFENIX // CFX
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'istek',
  description: 'CODEFENIX KOD PAYLASIM',
  usage: 'istek <istediğiniz>'
};
