module.exports = [{
name: "$alwaysExecute",
code: `
$if[$messageAttachment==;{execute:sendGlobalMessage1};{execute:sendGlobalMessageCheckImage}]

$loop[1;{};sendLoadingMessage]

$setGlobalUserVar[MessagesSent;$sum[$getGlobalUserVar[MessagesSent];1]]
$setVar[TotalMessagesSent;$sum[$getVar[TotalMessagesSent];1]]

$advanceCooldown[10s;$authorID;{delete:7s}{newEmbed:{description:$getVar[ErrorEmoji] **You need to wait __%time%__ before sending another message here!**}{color:RED}}]

$onlyIf[$checkContains[$message;$getServerVar[DefaultPrefix]]!=true;]

$onlyIf[$checkContains[$message;$joinSplitText[;]]!=true;{newEmbed:{description: $getVar[ErrorEmoji] **Your message contains words or content not allowed.**}{color:RED}{delete:7s}}]
$textSplit[$getVar[BlockedContent];, ]

$onlyIf[$getGlobalUserVar[Registered]!=No;{"components": "{actionRow:{button:Register:success:Register_$authorID}}","embeds": "{newEmbed:{description:**<@$authorID>, __to send messages with the bot for the first time, you must register.__**\\n\\n> **Do you want to do it now?**}{color:YELLOW}}", "options": "{delete:15s}"}]

$onlyIf[$getServerVar[Banned]!=Yes;]

$onlyIf[$getGlobalUserVar[Banned]!=Yes;{newEmbed:{color:RED}{description:$getVar[ErrorEmoji] **<@$authorID>, you are banned.**}{delete:7s}}]

$deleteCommand

$if[$messageAttachment==;;{execute:UploadToImgBB}]

$onlyIf[$getServerVar[GlobalChatChannelID]==$channelID;]
`
}, {
name: "UploadToImgBB",
type: "awaited",
code: `
$setGlobalUserVar[TemporallyImageSended;$get[Image]]
$let[Image;$httpRequest[https://api.imgbb.com/1/upload?key=$getVar[ImgBBApiKey]&image=$messageAttachment;POST;;data.display_url]]
`
}, {
name: "sendGlobalMessageCheckImage",
type: "awaited",
code: `
$if[$isValidImageLink[$getGlobalUserVar[TemporallyImageSended]]==true;{execute:sendGlobalMessageWithImage1};{execute:sendGlobalMessage1}]
`
}, {
name: "sendGlobalMessage1",
type: "awaited",
code: `
$forEachChannel[1;{"GuildID": "$guildID"};sendGlobalMessage2;]

$onlyIf[$getServerVar[GlobalChatChannelID]==$channelID;]
`
}, {
name: "sendGlobalMessageWithImage1",
type: "awaited",
code: `
$forEachChannel[1;{"GuildID": "$guildID"};sendGlobalMessageWithImage2;]

$onlyIf[$getServerVar[GlobalChatChannelID]==$channelID;]
`
}, {
name: "sendGlobalMessage2",
type: "awaited",
code: `
$thumbnail[1;$if[$isValidImageLink[$getGlobalUserVar[UserEmbedThumbnail]]==true;$getGlobalUserVar[UserEmbedThumbnail];https://i.ibb.co/mHPKH0y/Captura-de-pantalla-2022-12-07-200308.png]]

$description[1;$if[$getGlobalUserVar[UserRole]==User;$getVar[RoleUserEmoji];$if[$getGlobalUserVar[UserRole]==Moderator;$getVar[RoleModeratorEmoji];$getVar[RoleOwnerEmoji]]] **$getGlobalUserVar[UserRole]** | Sent from $if[$guildID==$awaitData[GuildID];this server.;$if[$isValidInvite[$getServerVar[ServerInvite;$awaitData[GuildID]]]==true;**[$serverName[$awaitData[GuildID]]]($getServerVar[ServerInvite;$awaitData[GuildID]])**;$serverName[$awaitData[GuildID]]]] | Message **#$getVar[TotalMessagesSent]**

<@$authorID>: $message]
    
$author[1;$username#$discriminator • $authorID;$authorAvatar]

$footer[1;$serverName[$awaitData[GuildID]] ($awaitData[GuildID]) | $membersCount[$awaitData[GuildID]] members;$serverIcon[$awaitData[GuildID]]]
    
$color[1;$getGlobalUserVar[UserEmbedColor]]
    
$addTimestamp
    
$onlyIf[$getServerVar[GlobalChatChannelID]==$channelID;]
`
}, {
name: "sendGlobalMessageWithImage2",
type: "awaited",
code: `
$image[1;$getGlobalUserVar[TemporallyImageSended]]

$thumbnail[1;$if[$isValidImageLink[$getGlobalUserVar[UserEmbedThumbnail]]==true;$getGlobalUserVar[UserEmbedThumbnail];https://i.ibb.co/mHPKH0y/Captura-de-pantalla-2022-12-07-200308.png]]

$description[1;$if[$getGlobalUserVar[UserRole]==User;$getVar[RoleUserEmoji];$if[$getGlobalUserVar[UserRole]==Moderator;$getVar[RoleModeratorEmoji];$getVar[RoleOwnerEmoji]]] **$getGlobalUserVar[UserRole]** | Sent from $if[$guildID==$awaitData[GuildID];this server.;$if[$isValidInvite[$getServerVar[ServerInvite;$awaitData[GuildID]]]==true;**[$serverName[$awaitData[GuildID]]]($getServerVar[ServerInvite;$awaitData[GuildID]])**;$serverName[$awaitData[GuildID]]]] | Message **#$getVar[TotalMessagesSent]**

<@$authorID>: $message]
    
$author[1;$username#$discriminator • $authorID;$authorAvatar]

$footer[1;$serverName[$awaitData[GuildID]] ($awaitData[GuildID]) | $membersCount[$awaitData[GuildID]] members;$serverIcon[$awaitData[GuildID]]]
    
$color[1;$getGlobalUserVar[UserEmbedColor]]
    
$addTimestamp
    
$onlyIf[$getServerVar[GlobalChatChannelID]==$channelID;]
`
}, {
name: "sendLoadingMessage",
type: "awaited",
code: `
$deleteIn[5s]

$description[1;$getVar[LoadingEmoji] **Sending your message...**]
$color[1;YELLOW]
`
}]