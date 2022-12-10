module.exports = ({
name: "setPrefix",
aliases: "set-prefix",
code: `
$color[1;GREEN]
$description[1;$getVar[SuccessEmoji] **The prefix has been changed to __$message[1]__ correctly!**]

$setServerVar[DefaultPrefix;$message[1]]

$onlyIf[$charCount[$message]<=3;{newEmbed:{description:$getVar[ErrorEmoji] **The prefix must be 3 characters or less.**}{color:RED}}]

$argsCheck[<2;{newEmbed:{description:$getVar[ErrorEmoji] **The prefix can't contain spaces!**}{color:RED}}]

$argsCheck[>0;{newEmbed:{description:$getVar[ErrorEmoji] **__Correct Usage:__ $getServerVar[DefaultPrefix]setPrefix <new prefix>**}{color:RED}}]

$onlyIf[$hasAnyPerm[$guildID;$authorID;manageserver;admin]!=false;{newEmbed:{color:RED}{description: $getVar[ErrorEmoji] **You need to have the "Manage Server" permission to be able to execute this command.**}}]

$onlyIf[$getServerVar[GlobalChatChannelID]!=$channelID;]
`
})