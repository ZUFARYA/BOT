const moment = require('moment-timezone');
const menu = (prefix, pushname) => {
	var tim = new Date().getHours(), salam = tim > 2 && tim < 4 ? "Daybreak" : tim < 11 ? "Morning" : tim < 16 ? "Afternoon" : tim < 19 ? "Evening" : "Night"
	let p = 0
	return ` *Z BOT*

Selamat ${salam} ${pushname}, 

*π¦ Total fiture : 137*
*π Owner* : @${configs.ownerList[0].split('@')[0]}
*ποΈ Prefix* : Multi
*β° Time* : ${moment().utcOffset('1000').format('YYYY-MM-DD HH:mm:ss')} WIB
*β£GITHUB* : https://github.com/UrekanVanz
*π΄YOUTUBE* : https://m.youtube.com/channel/UCjfZTj13Xt6kSOMJqfNPTOA





ββββ¬£*OWNER*
ββπ¦ ${prefix}setpp _replyImage_
ββπ¦ ${prefix}eval _text_
ββπ¦ ${prefix}term _code_
ββπ¦ ${prefix}block _@tag_
ββπ¦ ${prefix}unblock _@tag_
ββπ¦ ${prefix}join _link_
ββπ¦ ${prefix}bc _text_
ββπ¦ ${prefix}addvn _replyAudio/vn_
ββπ¦ ${prefix}delvn _name_
ββπ¦ ${prefix}premium add _@tag_
ββπ¦ ${prefix}premium del _@tag_
ββπ¦ ${prefix}premium list
ββπ¦ ${prefix}clearall
ββπ¦ ${prefix}resetlimit
ββπ¦ ${prefix}self
ββπ¦ ${prefix}public
ββββ¬£

ββββ¬£ *GROUP MENU*
ββπ¦ ${prefix}group _open|close_
ββπ¦ ${prefix}antilink _on|off_
ββπ¦ ${prefix}antitagall _on|off_
ββπ¦ ${prefix}antiviewonce _on|off_
ββπ¦ ${prefix}welcome _on|off_
ββπ¦ ${prefix}leave _on|off_
ββπ¦ ${prefix}setgroupicon _replyImage_
ββπ¦ ${prefix}setgroupname _text_
ββπ¦ ${prefix}setgroupdesc _text_
ββπ¦ ${prefix}hidetag _text_
ββπ¦ ${prefix}promote _@tag_
ββπ¦ ${prefix}demote _@tag_
ββπ¦ ${prefix}kick _@tag_
ββπ¦ ${prefix}add _number_
ββπ¦ ${prefix}getpp _@tag_
ββπ¦ ${prefix}tagall
ββπ¦ ${prefix}linkgroup
ββπ¦ ${prefix}revoke
ββπ¦ ${prefix}leave
ββββ¬£

ββββ¬£*DOWNLOADER*
ββπ¦ ${prefix}play _query_
ββπ¦ ${prefix}playvid _query_
ββπ¦ ${prefix}youtubedl _query_
ββπ¦ ${prefix}ytmp3 _link_
ββπ¦ ${prefix}ytmp4 _link_
ββπ¦ ${prefix}igstory _username_
ββπ¦ ${prefix}ig _link_
ββπ¦ ${prefix}joox _song_
ββββ¬£


ββββ¬£*STICKER*
ββπ¦ ${prefix}stickerwm _pack|author_
ββπ¦ ${prefix}takestick _pack|author_
ββπ¦ ${prefix}toimg _replySticker_
ββπ¦ ${prefix}togif _replySticker_
ββπ¦ ${prefix}semoji _emoji_
ββπ¦ ${prefix}stickerfire
ββπ¦ ${prefix}stickernobg
ββπ¦ ${prefix}stickergif
ββπ¦ ${prefix}sticker
ββββ¬£

ββββ¬£*ANIME*
ββπ¦ ${prefix}anime _query_
ββπ¦ ${prefix}manga _query_
ββπ¦ ${prefix}chara _query_
ββπ¦ ${prefix}waifu
ββββ¬£

ββββ¬£*EDUCATION*
ββπ¦ ${prefix}nulis _text_
ββπ¦ ${prefix}brainly _query_
ββπ¦ ${prefix}kbbi _query_
ββπ¦ ${prefix}wiki _query_
ββββ¬£

ββββ¬£*SEARCHING*
ββπ¦ ${prefix}playstore _apk_
ββπ¦ ${prefix}happymod _apk_
ββπ¦ ${prefix}iguser _username_
ββπ¦ ${prefix}igstalk _username_
ββπ¦ ${prefix}ytsearch _query_
ββπ¦ ${prefix}ytplaylist _query_
ββπ¦ ${prefix}ytchannel _channel_
ββπ¦ ${prefix}shoope _product_
ββπ¦ ${prefix}spotify _song_
ββπ¦ ${prefix}gsmarena _hp_
ββπ¦ ${prefix}searchmusic _replyAudio_
ββπ¦ ${prefix}wallpaper _query_
ββπ¦ ${prefix}pinterest _query_
ββπ¦ ${prefix}googleimage _query_
ββπ¦ ${prefix}jagokata _kata_
ββββ¬£

ββββ¬£*PRIMBON*
ββπ¦ ${prefix}jodoh _kamu|dia_
ββπ¦ ${prefix}artinama _nama_
ββπ¦ ${prefix}artimimpi _mimpi_
ββββ¬£

ββββ¬£*RANDOM*
ββπ¦ ${prefix}fml
ββπ¦ ${prefix}randomquran
ββπ¦ ${prefix}meme
ββπ¦ ${prefix}darkjoke
ββπ¦ ${prefix}pantun
ββπ¦ ${prefix}nickepep
ββπ¦ ${prefix}quotes
ββπ¦ ${prefix}estetikpic
ββββ¬£

ββββ¬£*TEXTMAKER*
ββπ¦ ${prefix}wolflogo _text1|text2_
ββπ¦ ${prefix}logoaveng _text1|text2_
ββπ¦ ${prefix}phlogo _text1|text2_
ββπ¦ ${prefix}marvellogo _text1|text2_
ββπ¦ ${prefix}gtext _text1|text2_
ββπ¦ ${prefix}pubglogo _text1|text2_
ββπ¦ ${prefix}snowwrite _text1|text2_
ββπ¦ ${prefix}watercolour _text1|text2_
ββπ¦ ${prefix}harta _text_
ββπ¦ ${prefix}thundertext _text_
ββπ¦ ${prefix}flametext _text_
ββπ¦ ${prefix}glowtext _text_
ββπ¦ ${prefix}smoketext _text_
ββπ¦ ${prefix}lithgtext _text_
ββπ¦ ${prefix}flowertext _text_
ββπ¦ ${prefix}bneon _text_
ββπ¦ ${prefix}matrix _text_
ββπ¦ ${prefix}breakwall _text_
ββπ¦ ${prefix}gneon _text_
ββπ¦ ${prefix}dropwater _text_
ββπ¦ ${prefix}tfire _text_
ββπ¦ ${prefix}sandw _text_
ββπ¦ ${prefix}epep _text_
ββπ¦ ${prefix}gplaybutton _text_
ββπ¦ ${prefix}splaybutton _text_
ββπ¦ ${prefix}text3dbox _text_
ββπ¦ ${prefix}text3d _text_
ββπ¦ ${prefix}logobp _text_
ββπ¦ ${prefix}leavest _text_
ββπ¦ ${prefix}tlight _text_
ββπ¦ ${prefix}naruto _text_
ββπ¦ ${prefix}crosslogo _text_
ββπ¦ ${prefix}cslogo _text_
ββπ¦ ${prefix}crismes _text_
ββββ¬£

ββββ¬£*IMAGEMAKER*
ββπ¦ ${prefix}missing _text1|text2|text3|@tag_
ββπ¦ ${prefix}calender _replyImage / @tag_
ββπ¦ ${prefix}drawing _replyImage / @tag_
ββπ¦ ${prefix}sketch _replyImage / @tag_
ββββ¬£

ββββ¬£*OTHER*
ββπ¦ ${prefix}tomp3 _replyVideo_
ββπ¦ ${prefix}removebg _replyImage / @tag_
ββπ¦ ${prefix}tts _code|text_
ββπ¦ ${prefix}qrencode _text_
ββπ¦ ${prefix}barcode _text_
ββπ¦ ${prefix}jadwalsholat _daerah_
ββπ¦ ${prefix}jadwaltv _channel_
ββπ¦ ${prefix}tebakgambar
ββββ¬£

ββββ¬£*INFO*
ββπ¦ ${prefix}stickermenu
ββπ¦ ${prefix}owner
ββπ¦ ${prefix}limit
ββπ¦ ${prefix}info
ββπ¦ ${prefix}listvn
ββββ¬£`
}

const ingfo = `Bot ini di Sewakan Harga:
15k permanen minat ketik #owner
`

const listCode = `Kode bahasa jgviy tidak ada\n  Code       Bahasa\n    sq        Albanian\n    ar        Arabic\n    hy        Armenian\n    ca        Catalan\n    zh        Chinese\n    zh-cn     Chinese (China)\n    zh-tw     Chinese (Taiwan)\n    zh-yue    Chinese (Cantonese)\n    hr        Croatian\n    cs        Czech\n    da        Danish\n    nl        Dutch\n    en        English\n    en-au     English (Australia)\n    en-uk     English (United Kingdom)\n    en-us     English (United States)\n    eo        Esperanto\n    fi        Finnish\n    fr        French\n    de        German\n    el        Greek\n    ht        Haitian Creole\n    hi        Hindi\n    hu        Hungarian\n    is        Icelandic\n    id        Indonesian\n    it        Italian\n    ja        Japanese\n    ko        Korean\n    la        Latin\n    lv        Latvian\n    mk        Macedonian\n    no        Norwegian\n    pl        Polish\n    pt        Portuguese\n    pt-br     Portuguese (Brazil)\n    ro        Romanian\n    ru        Russian\n    sr        Serbian\n    sk        Slovak\n    es        Spanish\n    es-es     Spanish (Spain)\n    es-us     Spanish (United States)\n    sw        Swahili\n    sv        Swedish\n    ta        Tamil\n    th        Thai\n    tr        Turkish\n    vi        Vietnamese\n    cy        Welsh\n    `

const mess = {
             wait: 'Bentar Yaaa Todβ οΈ',
			 group: 'this command can only be used in groups!',
			 admin: 'only be used by admin!',
			 botAdmin: 'this command can only be used if the bot is an admin groups',
			 limit: 'Limit penggunaan anda sudah habis, \n\nNote: limit akan direset setiap 00.00',
			 ownerOnly: 'This command is only for the owner!'
}

module.exports = {
	menu,
	ingfo,
	listCode,
	mess
}
