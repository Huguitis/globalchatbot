module.exports = ({
name: "unbanServer", 
aliases: ["unban-server"],
code: `
$color[1;GREEN]
$description[1;$getVar[SuccessEmoji] **The server "[$serverName[$message[1]]]($createServerInvite[$message[1]])" has been successfully unbanned!**]

$setServerVar[Banned;No;$message[1]]

$onlyIf[$getServerVar[Banned;$message[1]]!=No;{newEmbed:{description:$getVar[ErrorEmoji] **That server is not banned.**}{color:RED}}]

$onlyIf[$serverExists[$message[1]]!=false;{newEmbed:{description:$getVar[ErrorEmoji] **I can't find any server with that ID.**}{color:RED}}]

$onlyIf[$message[1]!=;{newEmbed:{description:$getVar[ErrorEmoji] **Please specify the server ID.**}{color:RED}}]

$onlyIf[$checkContains[$getGlobalUserVar[UserRole];Owner;Moderator]!=false;{newEmbed:{description:$getVar[ErrorEmoji] **You cannot use this command!**}{color:RED}}]
` 
})