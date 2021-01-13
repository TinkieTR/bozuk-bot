const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async(client, message, args) => {


  
  
  
  
  const pinkcode = new Discord.MessageEmbed()
  .setColor('#00ffd0')
.setDescription(`
**• Moderasyon Komutları •**

**-afk = Afk Moduna Geçiş Yaparsınız.**
**-anons-yap = Belirttiğiniz Kanala Belirttiğiniz Mesajı Belirttiğiniz Sürede Atar.**
**-anons-sil = Anonsu Siler**
**-muterole = Mute Rolü Belirtirsiniz.**
**-sesmute = Sesteki Kişiye Mute Atarsınız.**
**-mute = Kişiyi Mutelersiniz. (Sohbette)**
**-uyarı = Kişiye Uyarı Verirsiniz.**
**-başvuru = Yetkili Başvuru Yaparsınız.**
**-songörülme = Kişi En Son Ne Zaman Aktif Olmuş.**
**-mesaj-sayar = Toplam Attığınız Mesaj Sayısı.**
**-küfür-sayar = Toplam Ettiğiniz Küfür Sayısı.**
**-reklam-sayar = Toplam Yaptığınız Reklam Sayısı.**
**-resim-sayar = Toplam Attığınız Resim Sayısı.**
**-oylama = Oylama Yaparsınız.**
**-isimdeğiştir = Boost Basmış İseniz İsminizi Değiştirirsiniz.**
**-chat-bilgi = Sohbet Bilgilerinize Bakarsınız.**
**-istek = İsteğinizi Belirtirsiniz.**
**-unmute = Kişinin Mutesini Kaldırırsınız.**
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
  name: "yardım",
  description: "",
  usage: ""
};
   