const { Client } = require("discord.js")
const client = new Client({ intents: 53608447 })

client.once("ready", () => {
    console.log(`Bot encendido como: ${client.user.tag}`)
}) 

client.login("MTU2OTI3MTg5ODk1MTM4OTI0NQ.Gxfonq._Ua8WkDRusE_fqtG63wRTI0P7CvfJxN9QQjseA")