module.exports = ({
name: "setInvite", 
aliases: ["set-invite"],
code: `
$color[1;GREEN]
$description[1;$getVar[SuccessEmoji] **The server invite is now configured to $message[1]!**]

$setServerVar[ServerInvite;$message[1]]

$onlyIf[$checkContains[$message[1];https://discord.gg/]!=false;{newEmbed:{color:RED}{description:$getVar[ErrorEmoji] **__That server invite is not valid!__ Must contain \`https://discord.gg/\`**}}]

$onlyIf[$isValidInvite[$message[1]]!=false;{newEmbed:{color:RED}{description:$getVar[ErrorEmoji] **__That server invite is not valid.__**}}]

$onlyIf[$hasAnyPerm[$guildID;$clientID;managechannel;manageserver;admin]!=false;{newEmbed:{color:RED}{description:$getVar[ErrorEmoji] **__I need at least one of the following permissions to be able to execute this command:__ "Manage Channels", "Manage Server" or "Admin"**}}]

$onlyIf[$hasAnyPerm[$guildID;$authorID;managechannel;manageserver;admin]!=false;{newEmbed:{color:RED}{description:$getVar[ErrorEmoji] **__You need at least one of the following permissions to be able to execute this command:__ "Manage Channels", "Manage Server" or "Admin"**}}]

$onlyIf[$getServerVar[GlobalChatChannelID]!=$channelID;]
` 
})