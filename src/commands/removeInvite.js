module.exports = ({
name: "removeInvite", 
aliases: ["remove-invite"],
code: `
$color[1;GREEN]
$description[1;$getVar[SuccessEmoji] **The server invite now is removed!**]

$setServerVar[ServerInvite;None]

$onlyIf[$hasAnyPerm[$guildID;$clientID;managechannel;manageserver;admin]!=false;{newEmbed:{color:RED}{description:$getVar[ErrorEmoji] **__I need at least one of the following permissions to be able to execute this command:__ "Manage Channels", "Manage Server" or "Admin"**}}]

$onlyIf[$hasAnyPerm[$guildID;$authorID;managechannel;manageserver;admin]!=false;{newEmbed:{color:RED}{description:$getVar[ErrorEmoji] **__You need at least one of the following permissions to be able to execute this command:__ "Manage Channels", "Manage Server" or "Admin"**}}]

$onlyIf[$getServerVar[GlobalChatChannelID]!=$channelID;]
` 
})