const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async(client, message, args) => {

let k =  db.fetch(`küfür_${message.guild.id}_${message.author.id}`) 
let a =  db.fetch(`msayaraz_${message.guild.id}_${message.author.id}`) 
let b =  db.fetch(`msayarfazla_${message.guild.id}_${message.author.id}`) 
let sonuc = a+b  
let r =  db.fetch(`reklam_${message.guild.id}_${message.author.id}`) 


if(!a) a = 0

if(!b) b = 0 

let sonucresim = a+b
  
  
  
  const pinkcode = new Discord.MessageEmbed()
  .setColor('#00ffd0')
.setDescription(`
**• İşte Sohbet Bilgin •**

**Toplam Mesaj Sayın : \`${sonuc}\`**
**Toplam Ettiğin Küfür Sayısı : \`${k}\`**
**Toplam Attığın Resim Sayısı : \`${a}\`**
**Toplam Yaptığın Reklam Sayısı : \`${r}\`**
`)
    .setFooter('Λ P O L L O N ❤ Volkanoloji')
 message.channel.send(pinkcode)

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y"],
  permLevel: 0
};
exports.help = {
  name: "chat-bilgi",
  description: "",
  usage: ""
};
   