module.exports = ({
name: "setChannel", 
aliases: ["set-channel"],
code: `
$channelSendMessage[$findServerChannel[$message];{newEmbed:{color:GREEN}{description:$getVar[NotifyEmoji] **__Channel configured as the global chat.__**}}]

$color[1;GREEN]
$description[1;$getVar[SuccessEmoji] **The global chat channel is now configured to <#$findServerChannel[$message]>!**]

$slowmode[5s;$findServerChannel[$message]]
$setServerVar[GlobalChatChannelID;$findServerChannel[$message]]

$onlyIf[$getServerVar[GlobalChatChannelID]!=$findServerChannel[$message];{newEmbed:{color:RED}{description:$getVar[ErrorEmoji] **__That channel is already configured for the global chat**}}]

$onlyIf[$hasAnyPerm[$guildID;$clientID;managechannel;manageserver;admin]!=false;{newEmbed:{color:RED}{description:$getVar[ErrorEmoji] **__I need at least one of the following permissions to be able to execute this command:__ "Manage Channels", "Manage Server" or "Admin"**}}]

$onlyIf[$hasAnyPerm[$guildID;$authorID;managechannel;manageserver;admin]!=false;{newEmbed:{color:RED}{description:$getVar[ErrorEmoji] **__You need at least one of the following permissions to be able to execute this command:__ "Manage Channels", "Manage Server" or "Admin"**}}]

$onlyIf[$getServerVar[GlobalChatChannelID]!=$channelID;]
` 
})
