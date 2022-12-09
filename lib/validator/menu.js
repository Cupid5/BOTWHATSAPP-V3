const fs = require('fs')
const chalk = require('chalk')

exports.menu = (AMOUNT, msg, prefix, runTime, botName, SETTING) => {
  return `┌─────☉ 𝙄𝙉𝙁𝙊 𝘽𝙊𝙏
│𝗕𝗢𝗧 : ${SETTING.botname}
│𝗢𝗪𝗡𝗘𝗥 : ${SETTING.ownername}
│𝗥𝗨𝗡𝗧𝗜𝗠𝗘 : ${runTime}
└──────────────☉

┌─────☉ 𝙄𝙉𝙎𝙏𝙍𝙐𝘾𝙏𝙄𝙊𝙉
│ ■ = Work
│ ▢ = Eror
│ ■ = Work/Maintenance/Error
└──────────────☉

┌─────☉ 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝙏𝙄𝙊𝙉
│${AMOUNT++}. ⇨ ${prefix + 'tes'} ■
│${AMOUNT++}. ⇨ ${prefix + 'ping'} ■ 
│${AMOUNT++}. ⇨ ${prefix + 'runtime'} ■
│${AMOUNT++}. ⇨ ${prefix + 'tesbot'} ■
└──────────────☉

┌─────☉ 𝙊𝙒𝙉𝙀𝙍 𝙊𝙉𝙇𝙔
│${AMOUNT++}. ⇨ ${prefix + 'public'} ■
│${AMOUNT++}. ⇨ ${prefix + 'self'} ■
│${AMOUNT++}. ⇨ ${prefix + 'setppbot'} ■
│${AMOUNT++}. ⇨ ${prefix + 'setthumb'} ■
│${AMOUNT++}. ⇨ ${prefix + 'ohidetag'} ■
│${AMOUNT++}. ⇨ ${prefix + 'culik'} ■
│${AMOUNT++}. ⇨ ${prefix + 'getcase'} ■
└──────────────☉

┌─────☉ 𝙂𝙍𝙊𝙐𝙋 𝙊𝙉𝙇𝙔
│${AMOUNT++}. ⇨ ${prefix + 'add'} ■
│${AMOUNT++}. ⇨ ${prefix + 'kick'} ■
│${AMOUNT++}. ⇨ ${prefix + 'promote'} ■
│${AMOUNT++}. ⇨ ${prefix + 'demote'} ■
│${AMOUNT++}. ⇨ ${prefix + 'hidetag'} ■
│${AMOUNT++}. ⇨ ${prefix + 'ohidetag'} ■
│${AMOUNT++}. ⇨ ${prefix + 'group'} ■
│${AMOUNT++}. ⇨ ${prefix + 'setnamegc'} ■
│${AMOUNT++}. ⇨ ${prefix + 'setdesc'} ■
│${AMOUNT++}. ⇨ ${prefix + 'hidetag'} ■
│${AMOUNT++}. ⇨ ${prefix + 'tagall'} ■
│${AMOUNT++}. ⇨ ${prefix + 'welcome'} ■
└──────────────☉

┌─────☉ 𝙈𝘼𝙆𝙀𝙍
│${AMOUNT++}. ⇨ ${prefix + 'sticker'} ■
└──────────────☉

┌─────☉ 𝙎𝙃𝙊𝙍𝙏𝙀𝙍 𝙇𝙄𝙉𝙆
│${AMOUNT++}. ⇨ ${prefix + 'tinyurl'} ■
└──────────────☉

┌─────☉ 𝙏𝙊𝙊𝙇𝙎
│${AMOUNT++}. ⇨ ${prefix + 'take'} ■
│${AMOUNT++}. ⇨ ${prefix + 'repeat'} ■
│${AMOUNT++}. ⇨ ${prefix + 'toqr'} ■
└──────────────☉

┌─────☉ 𝙎𝙀𝘼𝙍𝘾𝙃𝙄𝙉𝙂
│${AMOUNT++}. ⇨ ${prefix + 'pinterest'} ■
│${AMOUNT++}. ⇨ ${prefix + 'pinstick'} ■ 
│${AMOUNT++}. ⇨ ${prefix + 'play'} ■
│${AMOUNT++}. ⇨ ${prefix + 'music'} ■
└──────────────☉

┌─────☉ 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙀𝙍
│${AMOUNT++}. ⇨ ${prefix + 'youtubemp3'} ■
│${AMOUNT++}. ⇨ ${prefix + 'youtubemp4'} ■
│${AMOUNT++}. ⇨ ${prefix + 'tiktoknowm'} ■
│${AMOUNT++}. ⇨ ${prefix + 'tiktokdl'} ■
└──────────────☉

┌─────☉ 𝙍𝘼𝙉𝘿𝙊𝙈 𝙄𝙈𝘼𝙂𝙀
│${AMOUNT++}. ⇨ ${prefix + 'waifu'} ■
│${AMOUNT++}. ⇨ ${prefix + 'neko'} ■
│${AMOUNT++}. ⇨ ${prefix + 'awoo'} ■
│${AMOUNT++}. ⇨ ${prefix + 'megumin'} ■
│${AMOUNT++}. ⇨ ${prefix + 'shinobu'} ■
└──────────────☉
 
┌─────☉ 𝙂𝘼𝙈𝙀
│${AMOUNT++}. ⇨ ${prefix + 'ulartangga'} ■
└──────────────☉

┌─────☉ 𝙄𝙉𝙎𝙋𝙀𝘾𝙏𝙊𝙍
│${AMOUNT++}. ⇨ ${prefix + 'inviteinfo'} ■
│${AMOUNT++}. ⇨ ${prefix + 'inspect'} ■
└──────────────☉

┌─────☉ 𝘽𝙐𝙂
│${AMOUNT++}. ⇨ ${prefix + 'sendbug'} ■
│${AMOUNT++}. ⇨ ${prefix + 'sendbugkontak'} ■
│${AMOUNT++}. ⇨ ${prefix + 'sendbugrows'} ■
│${AMOUNT++}. ⇨ ${prefix + 'bugpayement'} ■
│${AMOUNT++}. ⇨ ${prefix + 'bugdelete'} ■
└──────────────☉
`
  }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.yellow(`New ${__filename}`))
	delete require.cache[file]
	require(file)
})