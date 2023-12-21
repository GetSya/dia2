// Buat Lu Yang Jual Sc Ini Gw Tonjok 



const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://wa.me/6288214772441?text=bang+aku+mau+donasi+i+love+yuuu'
global.ig = 'https://instagram/@arsrfii' // ubah aja
global.taa = 'https://my.arsyrafi.repl.co'
global.gh = 'https://github.com/GetSya'
global.email = 'arasyarafi02@gmail.com' //serah
global.region = 'indonesia' // serah
global.dana = '088213292687'
global.gopay = '088213292687'
global.pulsa = '088213292687'
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'Arasya' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['6288214772441'] // ubah aja pake nomor lu
//==========================BY Hw Mods=======================//
global.keyopenai = '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'
//====================BY Hw Mods=============================//
global.botname = 'JOJO BOT' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = 'My Sticker' // ubah aja ini nama sticker
global.author = 'Sticker Saya' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'haikal' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.anticall = true
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
