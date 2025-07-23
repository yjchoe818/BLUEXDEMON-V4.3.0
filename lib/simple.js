// Entire file content, but only vulnerable parts should be modified minimally
const {
  default: makeWASocket,
  makeWALegacySocket,
  extractMessageContent,
  makeInMemoryStore,
  proto,
  prepareWAMessageMedia,
  downloadContentFromMessage,
  getBinaryNodeChild,
  jidDecode,
  areJidsSameUser,
  generateWAMessage,
  generateForwardMessageContent,
  generateWAMessageFromContent,
  WAMessageStubType,
  getContentType,
  relayMessage,
  WA_DEFAULT_EPHEMERAL
} = require('@whiskeysockets/baileys')
//const chalk = require('chalk')
const { color} = require("./color");
const fetch = require('node-fetch')
const FileType = require ('file-type')
const { Boom } = require('@hapi/boom')
const PhoneNumber = require('awesome-phonenumber')
const fs = require('fs')
const pino = require('pino') 
const path = require('path')
const { Sticker, StickerTypes } = require('wa-sticker-formatter')
const { getRandomFile,getBuffer,sleep, smsg} = require("./myfunc");
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./exif.js')
const store = makeInMemoryStore({ logger: pino().child({ level: 'fatal', stream: 'store' }) })
const delay = ms => (ms) && new Promise(resolve => setTimeout(resolve, ms))

exports.makeWASocket2 = (connectionOptions,m, options = {}) => {
const conn = connectionOptions


const buffer = async (path) => {
let result = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? {url: path} : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return result
}

...

conn.sendImageAsSticker = async (jid, media, t, options = {}) => {
let jancok = new Sticker(media, {
pack: "Rangel°᭄ᴮᵒᵗ", // The pack name
author: "Created By єнanz", // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 50, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandomFile(".webp")
  let nono = await jancok.toFile(stok)
  let nah = fs.readFileSync(nono)
  await conn.sendMessage(jid, { contextInfo: { externalAdReply: { showAdAttribution: false,
  title: `${botName}`,body: `${baileysVersion}`,previewType:"PHOTO",thumbnailUrl: 'https://telegra.ph/file/61538939e150b3f96fcd3.jpg',
  sourceUrl:`${web}`	
  }}, sticker: nah }, { quoted: m})   				
  return await fs.unlinkSync(stok)
  }

...

conn.getFile = async (PATH, returnAsFilename) => {
let res, filename
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await fetch(PATH)).buffer() : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'
}
if (data && returnAsFilename && !filename) {
  // Sanitize the filename to prevent path traversal
  const sanitizedFilename = path.join(__dirname, path.basename(new Date * 1 + '.' + type.ext));
  await fs.promises.writeFile(sanitizedFilename, data);
  filename = sanitizedFilename;
}
return {
res,
filename,
...type,
data
}
}

...

conn.sendButImage = async(id, text1, desc1, gam1, but = [], options1 = {}) => {
  let buttonMessage = {
  image: await buffer(gam1),
  caption: text1,
  footer: desc1,
  buttons: but,
  headerType: 4
  }
  return await conn.sendMessage(id, buttonMessage, options1)
  }

...

conn.send5ButImg = async(id, text1, desc1, gam1, but = [], options1 = {}) => {
  let buttonMessage = {
  image: await buffer(gam1),
  caption: text1,
  footer: desc1,
  templateButtons: but,
  headerType: 4
  }
  
  return await conn.sendMessage(id, buttonMessage, options1)               
  }

...

conn.send5ButLoc = async(id, text1, desc1, gam1, but = [],options1 = {}) => {
  let buttonMessage = {
  location: { jpegThumbnail: await buffer(gam1) } ,
  caption: text1,
  footer: desc1,
  viewOnce: true,
  templateButtons: but,
  headerType: "LOCATION"
  }
  return await conn.sendMessage(id, buttonMessage, options1)
    }

...

conn.sendButLoc = async(id, text1, desc1, gam1, but = [], options1 = {}) => {
  let buttonMessage = {
  location: { jpegThumbnail: await buffer(gam1) } ,
  caption: text1,
  footer: desc1,
  buttons: but,
  headerType: "LOCATION"
  }
  return await conn.sendMessage(id, buttonMessage, options1)
  }

...

conn.sendButMessage = async (id, text1, desc1, but = [], options  ) => {
  let buttonMessage = {
  text: text1,
  footer: desc1,
  buttons: but,
  headerType: 1
  }
  return conn.sendMessage(id, buttonMessage,{quoted: options})
  }

...

conn.send5ButMessage = async (id, text1, desc1, but = [], options  ) => {
  let buttonMessage = {
  text: text1,
  footer: desc1,
  templateButtons: but,
  headerType: 1
  }
  return conn.sendMessage(id, buttonMessage,{quoted: options})
  }

...

conn.send5ButGif = async (id, text1, desc1, gam1, but = [],gam, options = {}) => {
   let buff = /^https?:\/\//.test(gam) ? await getBuffer(gam) : gam
  let buttonMessage = {
  video: await buffer(gam1),
  caption: text1,
  footer: desc1,
  templateButtons: but,
  gifPlayback: true,
  jpegThumbnail: buff, 
  fileLength : 99, 
  headerType: 'VIDEO'
  }
  return await conn.sendMessage(id, buttonMessage, options)
  }

...

conn.sendButGif = async(id, text1, desc1, gam1, but = [], gam,options1 = {}) => {
  let buff = /^https?:\/\//.test(gam) ? await getBuffer(gam) : gam
  let buttonMessage = {
  video: await buffer(gam1),
  caption: text1,
  footer: desc1,
  buttons: but,
  gifPlayback: true,
  jpegThumbnail: buff, 
  fileLength : 99, 
  headerType: 'VIDEO'
  }
  return await conn.sendMessage(id, buttonMessage, options1)
  }

...

conn.sendButDoc = async(id, text1, desc1, gam1, but = [], options,  options1 = {}) => {	
  let buff = /^https?:\/\//.test(gam1) ? await getBuffer(gam1) : gam1
  if(docType === "pptx"){
  var AppType = "application/vnd.openxmlformats-officedocument.presentationml.presentation"
  } else if(docType === "xlsx"){
  var AppType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  } else if(docType === "zip"){
  var AppType = "application/zip"
  } else if(docType === "pdf"){
  var AppType = "application/pdf"
  } else if(docType === "docx"){
  var AppType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  } 
  const buttonMessage = {
  contextInfo: options,
  document:{ url: "https://wa.me/628388024064" },
  mimetype: AppType, 
  title : "Footer text", 
  fileLength : 99999, 
  pageCount: 1, 
  fileName : "Bot WhatsApp", 
  caption: text1,
  footer: desc1,
  buttons: but,
  headerType: "DOCUMENT",
  jpegThumbnail: buff
  }
  
  return conn.sendMessage(id, buttonMessage,options1)
  } 

...

conn.send5ButDoc = async(id, text1, desc1, gam1, but = [], options,  options1 = {}) => {	
   let buff = /^https?:\/\//.test(gam1) ? await getBuffer(gam1) : gam1
  if(docType === "pptx"){
  var AppType = "application/vnd.openxmlformats-officedocument.presentationml.presentation"
  } else if(docType === "xlsx"){
  var AppType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  } else if(docType === "zip"){
  var AppType = "application/zip"
  } else if(docType === "pdf"){
  var AppType = "application/pdf"
  } else if(docType === "docx"){
  var AppType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  } 
  const buttonMessage = {
  contextInfo: options,
 document:{ url: "https://wa.me/6281320170984" },
  mimetype: AppType, 
  title : "Footer text", 
  fileLength : 999999999999, 
  pageCount: 100, 
  fileName : "Extream", 
  caption: text1,
  footer: desc1,
  templateButtons: but,
  headerType: "DOCUMENT",
  jpegThumbnail: buff
  }
  
  return conn.sendMessage(id, buttonMessage,options1)
  } 

...

conn.sendListM = async (jid, button, rows, quoted, options = {}) => {
const sections = [
{
title: button.title,
rows: [...rows]
}
]
const listMessage = {
text: button.description,
footer: button.footerText,
mentions: await conn.parseMention(button.description),
ephemeralExpiration: global.ephemeral,
title: '',
buttonText:button.buttonText,
sections
}
conn.sendMessage(jid, listMessage, {
quoted,
contextInfo: {
forwardingScore: 999999,
isForwarded: true,
...options
}
})
} 

...

  Object.defineProperty(conn, 'name', {
      value: { ...(options.chats || {}) },
      configurable: true,
  })
  if (conn.user?.id) conn.user.jid = conn.decodeJid(conn.user.id)
  //bind(conn)
  store.bind(conn.ev)
  return conn









//------------------------------[ BATAS KATULISTIWA ]----------------------------\\
}

/**
* Serialize Message
* @param {WAConnection} conn 
* @param {Object} m 
* @param {Boolean} hasParent 
*/ 
exports.smsg = (conn, m, hasParent) => {
if (!m) return m
let M = proto.WebMessageInfo
conn.adReply = async (jid, text, title = '', body = '', buffer, source = '', quoted, options) => {
let { data } = await conn.getFile(buffer, true)
return conn.sendMessage(jid, { text: text,
contextInfo: {
mentionedJid: await conn.parseMention(text),
externalAdReply: {
showAdAttribution: true,
mediaType: 1,
title: title,
body: body,
thumbnail: data,
renderLargerThumbnail: true,
sourceUrl: source
}
}
}, { quoted: quoted, ...options })
}
m = M.fromObject(m)
if (m.key) {
m.id = m.key.id
m.isBaileys = m.id && m.id.length === 16 || m.id.startsWith('3EB0') && m.id.length === 12 || false
m.chat = conn.decodeJid(m.key.remoteJid || message.message?.senderKeyDistributionMessage?.groupId || '')
m.now = m.messageTimestamp
m.isGroup = m.chat.endsWith('@g.us')
m.sender = conn.decodeJid(m.key.fromMe && conn.user.id || m.participant || m.key.participant || m.chat || '')
m.fromMe = m.key.fromMe || areJidsSameUser(m.sender, conn.user.id)
m.from  = m.key.remoteJid
m.groupMetadata = (m.isGroup ? (conn.chats[m.chat] || {}).metadata : {}) || {}
m.groupName =  (m.isGroup ? m.groupMetadata.subject : []) || []
m.groupId =  (m.isGroup ? m.groupMetadata.Jid : []) || []
m.groupMembers = (m.isGroup ? m.groupMetadata.participants : []) || []
m.groupDesc =  (m.isGroup ? m.groupMetadata.desc : []) || []
m.groupOwner =  (m.isGroup ? m.groupMetadata.owner : []) || []
const user = (m.isGroup ? m.groupMembers.find(u => conn.decodeJid(u.id) === m.sender) : {}) || {} // User Data
const bot = (m.isGroup ? m.groupMembers.find(u => conn.decodeJid(u.id) == conn.user.jid) : {}) || {} // Your Data
m.isRAdmin = user && user.admin == 'superadmin' || false
m.isAdmin = m.isRAdmin || user && user.admin == 'admin' || false 
m.isBotAdmin = bot && bot.admin == 'admin' || false // Are you Admin?  
}


  
if (m.message) {
let mtype = Object.keys(m.message)
m.mtype = (!['senderKeyDistributionMessage', 'messageContextInfo'].includes(mtype[0]) && mtype[0]) || 
(mtype.length >= 3 && mtype[1] !== 'messageContextInfo' && mtype[1]) || mtype[mtype.length - 1] 
m.type = getContentType(m.message)
m.content = JSON.stringify(m.message)
m.botNumber = conn.user.id ? conn.user.id.split(":")[0]+"@s.whatsapp.net" : conn.user.jid
m.senderNumber = m.sender.split("@")[0]
m.pushname = m.pushName || "No Name"
m.itsMe = m.sender == m.botNumber ? true : false
m.mentionByTag = m.type == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
m.mentionByReply = m.type == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || "" : "" 
m.users = m.mentionByReply? m.mentionByReply : m.mentionByTag[0]
m.budy = (m.type === 'conversation') ? m.message.conversation : (m.type === 'extendedTextMessage') ? m.message.extendedTextMessage.text : '' 
m.body = (m.type === 'conversation') ? m.message.conversation : (m.type == 'imageMessage') ? m.message.imageMessage.caption : (m.type == 'videoMessage') ? m.message.videoMessage.caption : (m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || dev.message.listResponseMessage?.singleSelectReply.selectedRowId ) : ''
m.args = m.body.trim().split(/ +/).slice(1) 
m.numberQuery = m.args.join(' ').replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
   

m.msg = (m.mtype == 'viewOnceMessage' ? m.message[m.mtype].message[getContentType(m.message[m.mtype].message)] : m.message[m.type])
if (m.chat == 'status@broadcast' && ['protocolMessage', 'senderKeyDistributionMessage'].includes(m.mtype)) m.chat = (m.key.remoteJid !== 'status@broadcast' && m.key.remoteJid) || m.sender
if (m.mtype == 'protocolMessage' && m.msg.key) {
if (m.msg.key.remoteJid == 'status@broadcast') m.msg.key.remoteJid = m.chat
if (!m.msg.key.participant || m.msg.key.participant == 'status_me') m.msg.key.participant = m.sender
m.msg.key.fromMe = conn.decodeJid(m.msg.key.participant) === conn.decodeJid(conn.user.id)
if (!m.msg.key.fromMe && m.msg.key.remoteJid === conn.decodeJid(conn.user.id)) m.msg.key.remoteJid = m.sender
}
  //m.msg.text || m.msg.caption || m.msg.contentText ||
m.text =   m.msg || ''
//m.body = m.message.conversation || m.msg.caption || m.msg.text || (m.mtype == 'listResponseMessage') && m.msg.singleSelectReply.selectedRowId || (m.mtype == 'buttonsResponseMessage') && m.msg.selectedButtonId || (m.mtype == 'viewOnceMessage') && m.msg.caption || m.text
       
  /*
 if (typeof m.text !== 'string') {
            if ([
                'protocolMessage',
                'messageContextInfo',
                'stickerMessage',
                'audioMessage',
                'senderKeyDistributionMessage'
            ].includes(m.mtype)) m.text = ''
            else m.text = m.text.selectedDisplayText || m.text.hydratedTemplate?.hydratedContentText || m.text
        }


*/
  
  m.mentionedJid = m.msg?.contextInfo?.mentionedJid?.length && m.msg.contextInfo.mentionedJid || []
        let quoted = m.quoted = m.msg?.contextInfo?.quotedMessage ? m.msg.contextInfo.quotedMessage : null
        if (m.quoted) {
            let type = Object.keys(m.quoted)[0]
            m.quoted = m.quoted[type]
            if (typeof m.quoted === 'string') m.quoted = { text: m.quoted }
            m.quoted.mtype = type
            m.quoted.id = m.msg.contextInfo.stanzaId
            m.quoted.chat = conn.decodeJid(m.msg.contextInfo.remoteJid || m.chat || m.sender)
            m.quoted.isBaileys = m.quoted.id && m.quoted.id.length === 16 || false
            m.quoted.sender = conn.decodeJid(m.msg.contextInfo.participant)
            m.quoted.fromMe = m.quoted.sender === conn.user.jid
            
            m.quoted.text = m.quoted.text || m.quoted.caption || m.quoted.contentText || ''
            m.quoted.name = conn.getName(m.quoted.sender)
            m.quoted.mentionedJid = m.quoted.contextInfo?.mentionedJid?.length && m.quoted.contextInfo.mentionedJid || []
            let vM = m.quoted.fakeObj = M.fromObject({
                key: {
                    fromMe: m.quoted.fromMe,
                    remoteJid: m.quoted.chat,
                    id: m.quoted.id
                },
                message: quoted,
                ...(m.isGroup ? { participant: m.quoted.sender } : {})
            })
            m.getQuotedObj = m.getQuotedMessage = async () => {
                if (!m.quoted.id) return null
                let q = M.fromObject(await conn.loadMessage(m.quoted.id) || vM)
                return exports.smsg(conn, q)
            }
            if (m.quoted.url || m.quoted.directPath) m.quoted.download = (saveToFile = false) => conn.downloadM(m.quoted, m.quoted.mtype.replace(/message/i, ''), saveToFile)
            
            /**
             * Reply to quoted message
             * @param {String|Object} text
             * @param {String|false} chatId
             * @param {Object} options
             */
            m.quoted.reply = (text, chatId, options) => conn.reply(chatId ? chatId : m.chat, text, vM, options)
            m.quoted.replys = (text, chatId, options) => conn.replys(chatId ? chatId : m.chat, text, vM, options)
            /**
             * Copy quoted message
             */
            m.quoted.copy = () => exports.smsg(conn, M.fromObject(M.toObject(vM)))

            /**
             * Forward Quoted Message
             * @param {String} jid
             * @param {Boolean} forceForward
             */
            m.quoted.forward = (jid, forceForward = false) => conn.forwardMessage(jid, vM, forceForward)

            /**
             * Exact Forward quoted message
             * @param {String} jid
             * @param {Boolean|Number} forceForward
             * @param {Object} options
            */
            m.quoted.copyNForward = (jid, forceForward = true, options = {}) => conn.copyNForward(jid, vM, forceForward, options)

            /**
             * Modify quoted Message
             * @param {String} jid
             * @param {String} tex
             * @param {String} sender
             * @param {Object} options
             */
            m.quoted.cMod = (jid, text = '', sender = m.quoted.sender, options = {}) => conn.cMod(jid, vM, text, sender, options)

            /**
             * Delete quoted message
             */
            m.quoted.delete = () => conn.sendMessage(m.quoted.chat, { delete: vM.key })
        }
    }
    m.name = !nullish(m.pushName) && m.pushName || conn.getName(m.sender)
    if (m.msg && m.msg.url) m.download = (saveToFile = false) => conn.downloadM(m.msg, m.mtype.replace(/message/i, ''), saveToFile)
 
    /**
     * Reply to this message
     * @param {String|Object} text
     * @param {String|false} chatId
     * @param {Object} options
     */
    m.reply = (text, chatId, options) => conn.reply(chatId ? chatId : m.chat, text, m, options)
    m.replys = (text, chatId, options) => conn.replys(chatId ? chatId : m.chat, text, m, options)
    /**
     * Exact Forward this message
     * @param {String} jid
     * @param {Boolean} forceForward
     * @param {Object} options
     */
    m.copyNForward = (jid = m.chat, forceForward = true, options = {}) => conn.copyNForward(jid, m, forceForward, options)
    /**
     * Modify this Message
     * @param {String} jid 
     * @param {String} text 
     * @param {String} sender 
     * @param {Object} options 
     */
    m.cMod = (jid, text = '', sender = m.sender, options = {}) => conn.cMod(jid, m, text, sender, options)

    /**
     * Delete this message
     */
    m.delete = () => conn.sendMessage(m.chat, { delete: m.key })
    try {
        conn.saveName(m.sender, m.name)
        conn.pushMessage(m)
        if (m.isGroup) conn.saveName(m.chat)
        if (m.msg && m.mtype == 'protocolMessage') conn.ev.emit('message.delete', m.msg.key)
    } catch (e) {
        console.error(e)
    }
    return m
}

exports.logic = (check, inp, out) => {
    if (inp.length !== out.length) throw new Error('Input and Output must have same length')
    for (let i in inp) if (util.isDeepStrictEqual(check, inp[i])) return out[i]
    return null
}

exports.protoType = () => {
  Buffer.prototype.toArrayBuffer = function toArrayBufferV2() {
    const ab = new ArrayBuffer(this.length);
    const view = new Uint8Array(ab);
    for (let i = 0; i < this.length; ++i) {
        view[i] = this[i];
    }
    return ab;
  }
  /**
   * @returns {ArrayBuffer}
   */
  Buffer.prototype.toArrayBufferV2 = function toArrayBuffer() {
    return this.buffer.slice(this.byteOffset, this.byteOffset + this.byteLength)
  }
  /**
   * @returns {Buffer}
   */
  ArrayBuffer.prototype.toBuffer = function toBuffer() {
    return Buffer.from(new Uint8Array(this))
  }
  // /**
  //  * @returns {String}
  //  */
  // Buffer.prototype.toUtilFormat = ArrayBuffer.prototype.toUtilFormat = Object.prototype.toUtilFormat = Array.prototype.toUtilFormat = function toUtilFormat() {
  //     return util.format(this)
  // }
  Uint8Array.prototype.getFileType = ArrayBuffer.prototype.getFileType = Buffer.prototype.getFileType = async function getFileType() {
    return await fileTypeFromBuffer(this)
  }
  /**
   * @returns {Boolean}
   */
  String.prototype.isNumber = Number.prototype.isNumber = isNumber
  /**
   *
   * @returns {String}
   */
  String.prototype.capitalize = function capitalize() {
    return this.charAt(0).toUpperCase() + this.slice(1, this.length)
  }
  /**
   * @returns {String}
   */
  String.prototype.capitalizeV2 = function capitalizeV2() {
    const str = this.split(' ')
    return str.map(v => v.capitalize()).join(' ')
  }
  String.prototype.decodeJid = function decodeJid() {
    if (/:\d+@/gi.test(this)) {
      const decode = jidDecode(this) || {}
      return (decode.user && decode.server && decode.user + '@' + decode.server || this).trim()
    } else return this.trim()
  }
  /**
   * number must be milliseconds
   * @returns {string}
   */
  Number.prototype.toTimeString = function toTimeString() {
    // const milliseconds = this % 1000
    const seconds = Math.floor((this / 1000) % 60)
    const minutes = Math.floor((this / (60 * 1000)) % 60)
    const hours = Math.floor((this / (60 * 60 * 1000)) % 24)
    const days = Math.floor((this / (24 * 60 * 60 * 1000)))
    return (
      (days ? `${days} day(s) ` : '') +
      (hours ? `${hours} hour(s) ` : '') +
      (minutes ? `${minutes} minute(s) ` : '') +
      (seconds ? `${seconds} second(s)` : '')
    ).trim()
  }
  Number.prototype.getRandom = String.prototype.getRandom = Array.prototype.getRandom = getRandom
}

function isNumber() {
  const int = parseInt(this)
  return typeof int === 'number' && !isNaN(int)
}

function getRandom() {
  if (Array.isArray(this) || this instanceof String) return this[Math.floor(Math.random() * this.length)]
  return Math.floor(Math.random() * this)
}

/**
 * ??
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
 * @returns {boolean}
 */
function nullish(args) {
  return !(args !== null && args !== undefined)
}