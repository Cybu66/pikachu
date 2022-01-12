const Asena = require("../Utilis/events")
const { MessageType } = require("@adiwajshing/baileys");
const { getJson, getBuffer } = require("../Utilis/download")

Asena.addCommand( { pattern: 'subtitle ?(.*)', fromMe: true, desc: "Show Subtitle." }, async (message, match) => {
    if(match == '') return await message.sendMessage('*Give me a movie name*')
    let { result } = await getJson(`https://untitled-3lmot7du2tk1.runkit.sh/subtitle?name=${match}`)
    let { buffer, mime, name } = await getBuffer(result)
    return await message.sendMessage(buffer, {mimetype: mime, filename: name}, MessageType.document)
  })