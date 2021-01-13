const Discord = require('discord.js');
module.exports.run = async (client, message, args) => { 
const kanal = ("797127566145617950")

    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(new Discord.MessageEmbed().setFooter('Λ P O L L O N ❤ Volkanoloji').setDescription('Bu komudu kullanmak için **Rolleri Yönet** yetkisine sahip olmalısın.')  .setColor('#00ffd0'));
    let kullanıcı = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
    if (!kullanıcı) return message.channel.send(new Discord.MessageEmbed().setFooter('Λ P O L L O N ❤ Volkanoloji').setDescription(`Lütfen bir kullanıcı ismi gir.\nÖrnek: -terfi [@İsim] [@Yetki]`)  .setColor('#00ffd0'));
    let role = message.mentions.roles.first()

    if (!role) return message.channel.send(new Discord.MessageEmbed().setFooter('Λ P O L L O N ❤ Volkanoloji').setDescription(`Lütfen bir rol ismi gir.\nÖrnek: -terfi [@İsim] [@Yetki]`).setColor  .setColor('#00ffd0'));
    let aRole = message.mentions.roles.first()
    if (!aRole) return message.channel.send(new Discord.MessageEmbed().setFooter('Λ P O L L O N ❤ Volkanoloji').setDescription(`Bu rolü bulamıyorum.\nÖrnek: -terfi [@İsim] [@Yetki]`).setColor  .setColor('#00ffd0'));

    if (kullanıcı.roles.cache.has(aRole.id)) return message.channel.send(new Discord.MessageEmbed().setFooter('Λ P O L L O N ❤ Volkanoloji').setDescription('Bu kullanıcı zaten bu terfiyeye ulaşmış')  .setColor('#00ffd0'));
    await (kullanıcı.roles.add(aRole.id))
    client.channels.cache.get(kanal).send(new Discord.MessageEmbed()
                                          .setFooter('Λ P O L L O N ❤ Volkanoloji')
                                          .setTitle('Terfi Oldu!')
                                          .setDescription(`**${kullanıcı}** İsimli Üye Üstün Çabası Ve Yardımlarından Dolayı \`\`${role.name}\`\` Rolüne Terfi Edilmiştir.`)
                                          .setColor('#00ffd0')
.addField('Nasıl Terfi Olurum ?','Diğer Kişilere Olan Yardımlarınız , Sunucuya Olan Çalışmalarınız , Ses Aktifliğiniz Ve Chat Aktifliğinize Göre Terfi Edilirsiniz.')
  )

};

module. exports.conf = {
  aliases: ['terfi-ettir']
};

module.exports.help = {
  name: 'terfi'
};