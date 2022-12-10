module.exports = ({
name: "help", 
aliases: ["commands"],
code: `
$addButton[1;Support Server;5;$nonEscape[$getVar[SupportServerInvite]]]
$addButton[1;Invite Me!;5;$nonEscape[$getBotInvite[admin]]]

$color[1;GREEN]
    
$description[1;**__Chat Config Commands:__**
> \`$getServerVar[DefaultPrefix]setChannel\` - Sets the global chat channel for the server.
> \`$getServerVar[DefaultPrefix]setInvite\` - Sets an invite of your server for the bot.
> \`$getServerVar[DefaultPrefix]removeInvite\` - Deletes the invite for your server on the bot.

**__General Config Commands:__**
> \`$getServerVar[DefaultPrefix]register\` - Register to be able to send messages.
> \`$getServerVar[DefaultPrefix]userConfig\` - Customize your global chat account/messages.
> \`$getServerVar[DefaultPrefix]setPrefix\` - Changes the bot prefix for this server.

**__Misc Commands:__**
> \`$getServerVar[DefaultPrefix]help\` - Shows this message.
> \`$getServerVar[DefaultPrefix]ping\` - Shows the bot information and latency.

**__Bot Moderator Commands:__**
> \`$getServerVar[DefaultPrefix]modifyUser\` - Modifies an user for the global chat.
> \`$getServerVar[DefaultPrefix]banServer\` - Blocks the use of the global chat on a server.
> \`$getServerVar[DefaultPrefix]unbanServer\` - Unblocks the use of the global chat on a server.
]

$onlyIf[$getServerVar[GlobalChatChannelID]!=$channelID;]
` 
})