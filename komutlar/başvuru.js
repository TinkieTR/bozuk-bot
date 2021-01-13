const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix

exports.run = async(client, message, args) => {

 const neden = args.slice(0).join(" ");
  if(!neden) return message.channel.send(new Discord.MessageEmbed()
.setColor('#00ffd0')
.setDescription('> **Neden Seni Seçmeliyiz?** ')) 
const embed = new Discord.MessageEmbed()
  .setColor('#00ffd0')
.setDescription('Başvurunuz Gönderildi :white_check_mark:')
message.channel.send(embed)

const embed2 = new Discord.MessageEmbed()
  .setColor('#00ffd0')
.setTitle(`**${message.author.tag}** İsimli Kullanıcı Yetki Başvurusu Yaptı`)
.addField(`<a:mavikalp:797222086895599636> __Başvuru Yapan Kişi__`,` <@!${message.author.id}>`)
.addField(`<a:mavikalp:797222086895599636> __Neden Sen?__`,` \`\`\`${neden}\`\`\` `)
client.channels.cache.get('797136829601677333').send(embed2); 
};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["başvuru","yetkili-başvuru"],
    permLevel: 0
}

exports.help = {
    name: 'başvuru',
    description: 'Yetki Başvurusu Yaparsınız.',
    usage: 'başvuru'
}