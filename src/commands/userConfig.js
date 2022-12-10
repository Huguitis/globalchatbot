module.exports = [{
name: "userConfig", 
code: `
$addButton[1;Change Embed Thumbnail;primary;ChangeEmbedThumbnail_$authorID]
$addButton[1;Change Embed Color;primary;ChangeEmbedColor_$authorID]

$image[1;$if[$isValidImageLink[$getGlobalUserVar[UserEmbedThumbnail;$authorID]]==true;$getGlobalUserVar[UserEmbedThumbnail;$authorID];https://cdn.pixabay.com/photo/2013/07/12/13/50/prohibited-147408_960_720.png]]
$thumbnail[1;$userAvatar[$authorID]]
$color[1;$if[$getGlobalUserVar[Banned;$authorID]==Yes;RED;GREEN]]
$description[1;
**__User Info:__**
**Role:** $getGlobalUserVar[UserRole;$authorID] $if[$getGlobalUserVar[UserRole;$authorID]==User;$getVar[RoleUserEmoji];$if[$getGlobalUserVar[UserRole;$authorID]==Moderator;$getVar[RoleModeratorEmoji];$getVar[RoleOwnerEmoji]]]
**Banned:** $getGlobalUserVar[Banned;$authorID] $if[$getGlobalUserVar[Banned;$authorID]==Yes;$getVar[SuccessEmoji];$getVar[ErrorEmoji]]
**Messages Sent:** $getGlobalUserVar[MessagesSent]
**Embed Color:** $getGlobalUserVar[UserEmbedColor;$authorID]
**Embed Thumbnail:**]

$onlyIf[$getServerVar[GlobalChatChannelID]!=$channelID;]
`
}, {
type: "interaction",
prototype: "button",
code: `
$interactionUpdate[;{newEmbed:{color:YELLOW}{description:**Please send the __hex__ code of your new embed color:**}]
           
$awaitMessages[$channelID;$authorID;1m;everything;changeembedcolor;{newEmbed:{color:RED}{description:$getVar[ErrorEmoji] **Out of time.**}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds" : "{newEmbed:{description:$getVar[ErrorEmoji] **You cannot use this button!**}{color:RED}}","ephemeral" : true,"options" : {"interaction" : true}}]
        
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==ChangeEmbedColor;]
`
}, {
name: "changeembedcolor",
type: "awaited",
code: `
$addButton[1;Change Embed Thumbnail;primary;ChangeEmbedThumbnail_$authorID]
$addButton[1;Change Embed Color;primary;ChangeEmbedColor_$authorID]

$image[1;$if[$isValidImageLink[$getGlobalUserVar[UserEmbedThumbnail;$authorID]]==true;$getGlobalUserVar[UserEmbedThumbnail;$authorID];https://cdn.pixabay.com/photo/2013/07/12/13/50/prohibited-147408_960_720.png]]
$thumbnail[1;$userAvatar[$authorID]]
$color[1;$if[$getGlobalUserVar[Banned;$authorID]==Yes;RED;GREEN]]
$description[1;
> $getVar[SuccessEmoji] ***__Embed color successfully modified!__***

**__User Info:__**
**Role:** $getGlobalUserVar[UserRole;$authorID] $if[$getGlobalUserVar[UserRole;$authorID]==User;$getVar[RoleUserEmoji];$if[$getGlobalUserVar[UserRole;$authorID]==Moderator;$getVar[RoleModeratorEmoji];$getVar[RoleOwnerEmoji]]]
**Banned:** $getGlobalUserVar[Banned;$authorID] $if[$getGlobalUserVar[Banned;$authorID]==Yes;$getVar[SuccessEmoji];$getVar[ErrorEmoji]]
**Messages Sent:** $getGlobalUserVar[MessagesSent]
**Embed Color:** $getGlobalUserVar[UserEmbedColor;$authorID]
**Embed Thumbnail:**]

$wait[0.5s]

$setGlobalUserVar[UserEmbedColor;$message]

$onlyIf[$isValidHex[$message]!=false;{newEmbed:{description:$getVar[ErrorEmoji] **That is not a valid hex number!**}{color:RED}}]
`
}, {
type: "interaction",
prototype: "button",
code: `
$interactionUpdate[;{newEmbed:{color:YELLOW}{description:**Please send the image  __attachment__ of your new embed thumbnail:**}]
           
$awaitMessages[$channelID;$authorID;1m;everything;changeembedthumbnail;{newEmbed:{color:RED}{description:$getVar[ErrorEmoji] **Out of time.**}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds" : "{newEmbed:{description:$getVar[ErrorEmoji] **You cannot use this button!**}{color:RED}}","ephemeral" : true,"options" : {"interaction" : true}}]
        
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==ChangeEmbedThumbnail;]
`
}, {
name: "changeembedthumbnail",
type: "awaited",
code: `
$addButton[1;Change Embed Thumbnail;primary;ChangeEmbedThumbnail_$authorID]
$addButton[1;Change Embed Color;primary;ChangeEmbedColor_$authorID]

$image[1;$if[$isValidImageLink[$getGlobalUserVar[UserEmbedThumbnail;$authorID]]==true;$getGlobalUserVar[UserEmbedThumbnail;$authorID];https://cdn.pixabay.com/photo/2013/07/12/13/50/prohibited-147408_960_720.png]]
$thumbnail[1;$userAvatar[$authorID]]
$color[1;$if[$getGlobalUserVar[Banned;$authorID]==Yes;RED;GREEN]]
$description[1;
> $getVar[SuccessEmoji] ***__Embed thumbnail successfully modified!__***

**__User Info:__**
**Role:** $getGlobalUserVar[UserRole;$authorID] $if[$getGlobalUserVar[UserRole;$authorID]==User;$getVar[RoleUserEmoji];$if[$getGlobalUserVar[UserRole;$authorID]==Moderator;$getVar[RoleModeratorEmoji];$getVar[RoleOwnerEmoji]]]
**Banned:** $getGlobalUserVar[Banned;$authorID] $if[$getGlobalUserVar[Banned;$authorID]==Yes;$getVar[SuccessEmoji];$getVar[ErrorEmoji]]
**Messages Sent:** $getGlobalUserVar[MessagesSent]
**Embed Color:** $getGlobalUserVar[UserEmbedColor;$authorID]
**Embed Thumbnail:**]

$wait[0.5s]

$setGlobalUserVar[UserEmbedThumbnail;$messageAttachment]

$onlyIf[$isValidImageLink[$messageAttachment]!=false;{newEmbed:{description:$getVar[ErrorEmoji] **That is not a valid image attachment!**}{color:RED}}]
`
}]