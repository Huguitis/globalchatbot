require('http').createServer((req, res) => res.end(config.webmessage)).listen(3000);
const Aoijs = require("aoi.js")
const config = require('./config.json')
const chat = new Aoijs.Bot({
  mobile: config.mobilepresence, 
  token: config.token, // Also process.env.token
  prefix: config.prefix, 
  autoUpdate: config.autoupdate
})
chat.loadCommands("./Comandos") 
chat.loadCommands("./Otros")

// Variables, DO NOT CHANGE!
chat.variables({
chatchannel: "Sin establecer",
chatinvite: "Sin establecer",
embedcolor: "#74b559",
userrole: ":busts_in_silhouette: USUARIO",
userban: "No baneado"
})

// Callbacks
chat.onMessage() 
