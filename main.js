const aoijs = require('aoi.js');
const setting = require("./settings.js")

const bot = new aoijs.AoiClient({
  token: setting.BotToken,
  prefix: "$getServerVar[DefaultPrefix]",
  suppressAllErrors: false,
  sharding: true,
  shardCount: 2,
  errorMessage: "",
  intents: "all",
  respondOnEdit:{
       commands: false,
       alwaysExecute: false,
       nonPrefixed: false
 },    
  database: {
   db: require("dbdjs.db"),
   type: "dbdjs.db",
   path: "./Database/",
   tables: ["GlobalChat"],
 }
})

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./src/")

loader.setColors({
    walking:["blink","dim","fgWhite"],
    failedWalking:{
        name:["bright","fgYellow","underline"],
        text:["bright","fgRed"]
    },
    typeError:{
        command:["bright","fgYellow"],
        type:["fgYellow"],
        text:["bright","fgRed"]
    },
    failLoad:{
        command:["bright","fgMagenta"],
        type:["fgRed"],
        text:["bright","fgRed"],
        },
    loaded:{
           command:["bright","fgCyan"],
           type:["bright","fgBlue"],
           text:["bright","fgGreen"]
           },
})

bot.onMessage()
bot.onMessageUpdate()
bot.onGuildJoin()
bot.onJoin()
bot.onInteractionCreate()

process.on('unhandledRejection', (reason, p) => {
  console.log('[antiCrash] :: Unhandled Rejection/Catch');
  console.log(reason, p);
});
process.on("uncaughtException", (err, origin) => {
  console.log('[antiCrash] :: Uncaught Exception/Catch');
  console.log(err, origin);
}); process.on('uncaughtExceptionMonitor', (err, origin) => {
  console.log('[antiCrash] :: Uncaught Exception/Catch (MONITOR)');
  console.log(err, origin);
});
process.on('multipleResolves', (type, promise, reason) => {
  console.log('[antiCrash] :: Multiple Resolves');
});

bot.status({
  text: "your messages!",
  type: "WATCHING",
  status: "online",
  time: 12
})

bot.variables({
    SuccessEmoji: setting.SuccessEmoji,
    ErrorEmoji: setting.ErrorEmoji,
    LoadingEmoji: setting.LoadingEmoji,
    NotifyEmoji: setting.InfoEmoji,
    SupportServerInvite: setting.SupportServerInvite,
    RoleUserEmoji: setting.RoleUserEmoji,
    RoleModeratorEmoji: setting.RoleModeratorEmoji,
    RoleOwnerEmoji: setting.RoleOwnerEmoji,
    BlockedContent: setting.BlockedContent,
    ImgBBApiKey: setting.ImgBBApiKey,

    DefaultPrefix: "gc!",
    GlobalChatChannelID: "None",
    ServerInvite: "None",
    Registered: "No",
    UserRole: "User",
    UserEmbedThumbnail: "None",
    UserEmbedColor: "#000000",
    Banned: "No",
    MessagesSent: "0",
    TotalMessagesSent: "0",

    TemporallyImageSended: ""
})