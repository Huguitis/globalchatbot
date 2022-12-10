module.exports = [{
name: "modifyUser", 
code: `
$addButton[1;Change User Role;primary;ChangeUserRole_$authorID_$findUser[$message]]
$addButton[1;Unban User;success;UnbanUser_$authorID_$findUser[$message];$if[$getGlobalUserVar[Banned;$findUser[$message]]==No;yes;no]]
$addButton[1;Temp Ban User;danger;TempBanUser_$authorID_$findUser[$message];$if[$getGlobalUserVar[Banned;$findUser[$message]]==Yes;yes;no]]
$addButton[1;Ban User;danger;BanUser_$authorID_$findUser[$message];$if[$getGlobalUserVar[Banned;$findUser[$message]]==Yes;yes;no]]

$thumbnail[1;$userAvatar[$findUser[$message]]]
$color[1;$if[$getGlobalUserVar[Banned;$findUser[$message]]==Yes;RED;GREEN]]
$description[1;
**__General Info:__**
**Discord Tag:** $userTag[$findUser[$message]]
**Discord ID:** $findUser[$message]
**Discord Mention:** <@$findUser[$message]>
**Creation Date:** $creationDate[$findUser[$message];date]

**__Global Chat Info:__**
**Role:** $getGlobalUserVar[UserRole;$findUser[$message]] $if[$getGlobalUserVar[UserRole;$findUser[$message]]==User;$getVar[RoleUserEmoji];$if[$getGlobalUserVar[UserRole;$findUser[$message]]==Moderator;$getVar[RoleModeratorEmoji];$getVar[RoleOwnerEmoji]]]
**Banned:** $getGlobalUserVar[Banned;$findUser[$message]] $if[$getGlobalUserVar[Banned;$findUser[$message]]==Yes;$getVar[SuccessEmoji];$getVar[ErrorEmoji]]
**Messages Sent:** $getGlobalUserVar[MessagesSent;$findUser[$message]]
**Embed Color:** $getGlobalUserVar[UserEmbedColor;$findUser[$message]]
**Embed Thumbnail:**]
$image[1;$if[$isValidImageLink[$getGlobalUserVar[UserEmbedThumbnail;$findUser[$message]]]==true;$getGlobalUserVar[UserEmbedThumbnail;$findUser[$message]];https://cdn.pixabay.com/photo/2013/07/12/13/50/prohibited-147408_960_720.png]]

$onlyIf[$checkContains[$getGlobalUserVar[UserRole];Owner;Moderator]!=false;{newEmbed:{description:$getVar[ErrorEmoji] **You cannot use this command!**}{color:RED}}]

$onlyIf[$getServerVar[GlobalChatChannelID]!=$channelID;]
`
}, {
type: "interaction",
prototype: "button",
code: `
$interactionUpdate[;{newEmbed:{color:$if[$getGlobalUserVar[Banned;$advancedTextSplit[$interactionData[customId];_;3]]==Yes;RED;GREEN]}{thumbnail:$userAvatar[$advancedTextSplit[$interactionData[customId];_;3]]}{description:
> ***__User banned successfully!__***

**__General Info:__**
**Discord Tag:** $userTag[$advancedTextSplit[$interactionData[customId];_;3]]
**Discord ID:** $advancedTextSplit[$interactionData[customId];_;3]
**Discord Mention:** <@$advancedTextSplit[$interactionData[customId];_;3]>
**Creation Date:** $creationDate[$advancedTextSplit[$interactionData[customId];_;3];date]

**__Global Chat Info:__**
**Role:** $getGlobalUserVar[UserRole;$advancedTextSplit[$interactionData[customId];_;3]] $if[$getGlobalUserVar[UserRole;$advancedTextSplit[$interactionData[customId];_;3]]==User;$getVar[RoleUserEmoji];$if[$getGlobalUserVar[UserRole;$advancedTextSplit[$interactionData[customId];_;3]]==Moderator;$getVar[RoleModeratorEmoji];$getVar[RoleOwnerEmoji]]]
**Banned:** $getGlobalUserVar[Banned;$advancedTextSplit[$interactionData[customId];_;3]] $if[$getGlobalUserVar[Banned;$advancedTextSplit[$interactionData[customId];_;3]]==Yes;$getVar[SuccessEmoji];$getVar[ErrorEmoji]]
**Messages Sent:** $getGlobalUserVar[MessagesSent;$advancedTextSplit[$interactionData[customId];_;3]]
**Embed Color:** $getGlobalUserVar[UserEmbedColor;$advancedTextSplit[$interactionData[customId];_;3]]
**Embed Thumbnail:**
}{image:$if[$isValidImageLink[$getGlobalUserVar[UserEmbedThumbnail;$advancedTextSplit[$interactionData[customId];_;3]]]==true;$getGlobalUserVar[UserEmbedThumbnail;$advancedTextSplit[$interactionData[customId];_;3]];https://cdn.pixabay.com/photo/2013/07/12/13/50/prohibited-147408_960_720.png]}};{actionRow:{button:Ban User:danger:BanUser_$authorID_$advancedTextSplit[$interactionData[customId];_;3]:$if[$getGlobalUserVar[Banned;$advancedTextSplit[$interactionData[customId];_;3]]==Yes;yes;no]}{button:Temp Ban User:danger:TempBanUser_$authorID_$advancedTextSplit[$interactionData[customId];_;3]:$if[$getGlobalUserVar[Banned;$advancedTextSplit[$interactionData[customId];_;3]]==Yes;yes;no]}{button:Unban User:success:UnbanUser_$authorID_$advancedTextSplit[$interactionData[customId];_;3]:$if[$getGlobalUserVar[Banned;$advancedTextSplit[$interactionData[customId];_;3]]==No;yes;no]}{button:Change User Role:primary:ChangeUserRole_$authorID_$advancedTextSplit[$interactionData[customId];_;3]:no}}]

$setGlobalUserVar[Banned;Yes;$advancedTextSplit[$interactionData[customId];_;3]]

$if[$isUserDMEnabled[$advancedTextSplit[$interactionData[customId];_;3]]==true;{execute:UserBanSendDM};]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds" : "{newEmbed:{description:$getVar[ErrorEmoji] **You cannot use this button!**}{color:RED}}","ephemeral" : true,"options" : {"interaction" : true}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==BanUser;]
`
}, {
type: "interaction",
prototype: "button",
code: `
$interactionUpdate[;{newEmbed:{color:$if[$getGlobalUserVar[Banned;$advancedTextSplit[$interactionData[customId];_;3]]==Yes;RED;GREEN]}{thumbnail:$userAvatar[$advancedTextSplit[$interactionData[customId];_;3]]}{description:
> ***__User unbanned successfully!__***

**__General Info:__**
**Discord Tag:** $userTag[$advancedTextSplit[$interactionData[customId];_;3]]
**Discord ID:** $advancedTextSplit[$interactionData[customId];_;3]
**Discord Mention:** <@$advancedTextSplit[$interactionData[customId];_;3]>
**Creation Date:** $creationDate[$advancedTextSplit[$interactionData[customId];_;3];date]

**__Global Chat Info:__**
**Role:** $getGlobalUserVar[UserRole;$advancedTextSplit[$interactionData[customId];_;3]] $if[$getGlobalUserVar[UserRole;$advancedTextSplit[$interactionData[customId];_;3]]==User;$getVar[RoleUserEmoji];$if[$getGlobalUserVar[UserRole;$advancedTextSplit[$interactionData[customId];_;3]]==Moderator;$getVar[RoleModeratorEmoji];$getVar[RoleOwnerEmoji]]]
**Banned:** $getGlobalUserVar[Banned;$advancedTextSplit[$interactionData[customId];_;3]] $if[$getGlobalUserVar[Banned;$advancedTextSplit[$interactionData[customId];_;3]]==Yes;$getVar[SuccessEmoji];$getVar[ErrorEmoji]]
**Messages Sent:** $getGlobalUserVar[MessagesSent;$advancedTextSplit[$interactionData[customId];_;3]]
**Embed Color:** $getGlobalUserVar[UserEmbedColor;$advancedTextSplit[$interactionData[customId];_;3]]
**Embed Thumbnail:**
}{image:$if[$isValidImageLink[$getGlobalUserVar[UserEmbedThumbnail;$advancedTextSplit[$interactionData[customId];_;3]]]==true;$getGlobalUserVar[UserEmbedThumbnail;$advancedTextSplit[$interactionData[customId];_;3]];https://cdn.pixabay.com/photo/2013/07/12/13/50/prohibited-147408_960_720.png]}};{actionRow:{button:Ban User:danger:BanUser_$authorID_$advancedTextSplit[$interactionData[customId];_;3]:$if[$getGlobalUserVar[Banned;$advancedTextSplit[$interactionData[customId];_;3]]==Yes;yes;no]}{button:Temp Ban User:danger:TempBanUser_$authorID_$advancedTextSplit[$interactionData[customId];_;3]:$if[$getGlobalUserVar[Banned;$advancedTextSplit[$interactionData[customId];_;3]]==Yes;yes;no]}{button:Unban User:success:UnbanUser_$authorID_$advancedTextSplit[$interactionData[customId];_;3]:$if[$getGlobalUserVar[Banned;$advancedTextSplit[$interactionData[customId];_;3]]==No;yes;no]}{button:Change User Role:primary:ChangeUserRole_$authorID_$advancedTextSplit[$interactionData[customId];_;3]:no}}]

$setGlobalUserVar[Banned;No;$advancedTextSplit[$interactionData[customId];_;3]]

$if[$isUserDMEnabled[$advancedTextSplit[$interactionData[customId];_;3]]==true;{execute:UserUnbanSendDM};]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds" : "{newEmbed:{description:$getVar[ErrorEmoji] **You cannot use this button!**}{color:RED}}","ephemeral" : true,"options" : {"interaction" : true}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==UnbanUser;]
`
}, {
type: "interaction",
prototype: "button",
code: `
$interactionUpdate[;{newEmbed:{color:YELLOW}{thumbnail:$userAvatar[$advancedTextSplit[$interactionData[customId];_;3]]}{description:
> **For how long do you want to mute <@$advancedTextSplit[$interactionData[customId];_;3]>?**

- 10 Minutes.
- 1 Hour.
- 12 Hours.
- 3 Days
- 1 Week
}};{actionRow:{button:10 Minutes:primary:10MinutesTimeout_$authorID_$advancedTextSplit[$interactionData[customId];_;3]:no}{button:1 Hour:primary:1HourTimeout_$authorID_$advancedTextSplit[$interactionData[customId];_;3]:no}{button:12 Hours:primary:12HoursTimeout_$authorID_$advancedTextSplit[$interactionData[customId];_;3]:no}{button:3 Days:primary:3DaysTimeout_$authorID_$advancedTextSplit[$interactionData[customId];_;3]:no}{button:1 Week:primary:1WeekTimeout_$authorID_$advancedTextSplit[$interactionData[customId];_;3]:no}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds" : "{newEmbed:{description:$getVar[ErrorEmoji] **You cannot use this button!**}{color:RED}}","ephemeral" : true,"options" : {"interaction" : true}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==TimeoutUser;]
`
}, {
type: "interaction",
prototype: "button",
code: `
$interactionUpdate[;{newEmbed:{color:YELLOW}{thumbnail:$userAvatar[$advancedTextSplit[$interactionData[customId];_;3]]}{description:
> **Select a new role for <@$advancedTextSplit[$interactionData[customId];_;3]>:**

- User.
- Moderator.
}};{actionRow:{button:User:primary:UserRole_$authorID_$advancedTextSplit[$interactionData[customId];_;3]:no}{button:Moderator:primary:ModeratorRole_$authorID_$advancedTextSplit[$interactionData[customId];_;3]:no}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds" : "{newEmbed:{description:$getVar[ErrorEmoji] **You cannot use this button!**}{color:RED}}","ephemeral" : true,"options" : {"interaction" : true}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==ChangeUserRole;]
`
}, {
type: "interaction",
prototype: "button",
code: `
$interactionUpdate[;{newEmbed:{color:$if[$getGlobalUserVar[Banned;$findUser[$message]]==Yes;RED;GREEN]}{thumbnail:$userAvatar[$advancedTextSplit[$interactionData[customId];_;3]]}{description:
> ***__User role changed to "User" correctly!__***

**__General Info:__**
**Discord Tag:** $userTag[$advancedTextSplit[$interactionData[customId];_;3]]
**Discord ID:** $advancedTextSplit[$interactionData[customId];_;3]
**Discord Mention:** <@$advancedTextSplit[$interactionData[customId];_;3]>
**Creation Date:** $creationDate[$advancedTextSplit[$interactionData[customId];_;3];date]

**__Global Chat Info:__**
**Role:** $getGlobalUserVar[UserRole;$advancedTextSplit[$interactionData[customId];_;3]] $if[$getGlobalUserVar[UserRole;$advancedTextSplit[$interactionData[customId];_;3]]==User;$getVar[RoleUserEmoji];$if[$getGlobalUserVar[UserRole;$advancedTextSplit[$interactionData[customId];_;3]]==Moderator;$getVar[RoleModeratorEmoji];$getVar[RoleOwnerEmoji]]]
**Banned:** $getGlobalUserVar[Banned;$advancedTextSplit[$interactionData[customId];_;3]] $if[$getGlobalUserVar[Banned;$advancedTextSplit[$interactionData[customId];_;3]]==Yes;$getVar[SuccessEmoji];$getVar[ErrorEmoji]]
**Messages Sent:** $getGlobalUserVar[MessagesSent;$advancedTextSplit[$interactionData[customId];_;3]]
**Embed Color:** $getGlobalUserVar[UserEmbedColor;$advancedTextSplit[$interactionData[customId];_;3]]
**Embed Thumbnail:**
}{image:$if[$isValidImageLink[$getGlobalUserVar[UserEmbedThumbnail;$advancedTextSplit[$interactionData[customId];_;3]]]==true;$getGlobalUserVar[UserEmbedThumbnail;$advancedTextSplit[$interactionData[customId];_;3]];https://cdn.pixabay.com/photo/2013/07/12/13/50/prohibited-147408_960_720.png]}};{actionRow:{button:Ban User:danger:BanUser_$authorID_$advancedTextSplit[$interactionData[customId];_;3]:$if[$getGlobalUserVar[Banned;$advancedTextSplit[$interactionData[customId];_;3]]==Yes;yes;no]}{button:Temp Ban User:danger:TempBanUser_$authorID_$advancedTextSplit[$interactionData[customId];_;3]:$if[$getGlobalUserVar[Banned;$advancedTextSplit[$interactionData[customId];_;3]]==Yes;yes;no]}{button:Unban User:success:UnbanUser_$authorID_$advancedTextSplit[$interactionData[customId];_;3]:$if[$getGlobalUserVar[Banned;$advancedTextSplit[$interactionData[customId];_;3]]==No;yes;no]}{button:Change User Role:primary:ChangeUserRole_$authorID_$advancedTextSplit[$interactionData[customId];_;3]:no}}]

$setGlobalUserVar[UserRole;User;$advancedTextSplit[$interactionData[customId];_;3]]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds" : "{newEmbed:{description:$getVar[ErrorEmoji] **You cannot use this button!**}{color:RED}}","ephemeral" : true,"options" : {"interaction" : true}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==UserRole;]
`
}, {
type: "interaction",
prototype: "button",
code: `
$interactionUpdate[;{newEmbed:{color:$if[$getGlobalUserVar[Banned;$findUser[$message]]==Yes;RED;GREEN]}{thumbnail:$userAvatar[$advancedTextSplit[$interactionData[customId];_;3]]}{description:
> ***__User role changed to "Moderator" correctly!__***

**__General Info:__**
**Discord Tag:** $userTag[$advancedTextSplit[$interactionData[customId];_;3]]
**Discord ID:** $advancedTextSplit[$interactionData[customId];_;3]
**Discord Mention:** <@$advancedTextSplit[$interactionData[customId];_;3]>
**Creation Date:** $creationDate[$advancedTextSplit[$interactionData[customId];_;3];date]

**__Global Chat Info:__**
**Role:** $getGlobalUserVar[UserRole;$advancedTextSplit[$interactionData[customId];_;3]] $if[$getGlobalUserVar[UserRole;$advancedTextSplit[$interactionData[customId];_;3]]==User;$getVar[RoleUserEmoji];$if[$getGlobalUserVar[UserRole;$advancedTextSplit[$interactionData[customId];_;3]]==Moderator;$getVar[RoleModeratorEmoji];$getVar[RoleOwnerEmoji]]]
**Banned:** $getGlobalUserVar[Banned;$advancedTextSplit[$interactionData[customId];_;3]] $if[$getGlobalUserVar[Banned;$advancedTextSplit[$interactionData[customId];_;3]]==Yes;$getVar[SuccessEmoji];$getVar[ErrorEmoji]]
**Messages Sent:** $getGlobalUserVar[MessagesSent;$advancedTextSplit[$interactionData[customId];_;3]]
**Embed Color:** $getGlobalUserVar[UserEmbedColor;$advancedTextSplit[$interactionData[customId];_;3]]
**Embed Thumbnail:**
}{image:$if[$isValidImageLink[$getGlobalUserVar[UserEmbedThumbnail;$advancedTextSplit[$interactionData[customId];_;3]]]==true;$getGlobalUserVar[UserEmbedThumbnail;$advancedTextSplit[$interactionData[customId];_;3]];https://cdn.pixabay.com/photo/2013/07/12/13/50/prohibited-147408_960_720.png]}};{actionRow:{button:Ban User:danger:BanUser_$authorID_$advancedTextSplit[$interactionData[customId];_;3]:$if[$getGlobalUserVar[Banned;$advancedTextSplit[$interactionData[customId];_;3]]==Yes;yes;no]}{button:Temp Ban User:danger:TempBanUser_$authorID_$advancedTextSplit[$interactionData[customId];_;3]:$if[$getGlobalUserVar[Banned;$advancedTextSplit[$interactionData[customId];_;3]]==Yes;yes;no]}{button:Unban User:success:UnbanUser_$authorID_$advancedTextSplit[$interactionData[customId];_;3]:$if[$getGlobalUserVar[Banned;$advancedTextSplit[$interactionData[customId];_;3]]==No;yes;no]}{button:Change User Role:primary:ChangeUserRole_$authorID_$advancedTextSplit[$interactionData[customId];_;3]:no}}]

$setGlobalUserVar[UserRole;Moderator;$advancedTextSplit[$interactionData[customId];_;3]]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds" : "{newEmbed:{description:$getVar[ErrorEmoji] **You cannot use this button!**}{color:RED}}","ephemeral" : true,"options" : {"interaction" : true}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==ModeratorRole;]
`


//                   // 
//                   // 
//       START       // 
//     SEND  DMS     //
//                   // 
//                   // 
//                   // 


}, {
type: "awaited",
name: "UserBanSendDM",
code: `
$sendDM[{newEmbed:{description:**__You has been banned from sending messages to the global chat permanently.__**
**If you think that this is an error please [contact us]($getVar[SupportServerInvite]).**}{color:RED}};$advancedTextSplit[$interactionData[customId];_;3]]
`
}, {
type: "awaited",
name: "UserUnbanSendDM",
code: `
$sendDM[{newEmbed:{description:**__You has been unbanned from sending messages to the global chat.__**}{color:GREEN}};$advancedTextSplit[$interactionData[customId];_;3]]
`
}, {
type: "awaited",
name: "UserBan10mSendDM",
code: `
$sendDM[{newEmbed:{description:**__You has been banned from sending messages to the global chat for 10 minutes.__**
**If you think that this is an error please [contact us]($getVar[SupportServerInvite]).**}{color:RED}};$advancedTextSplit[$interactionData[customId];_;3]]
`
}, {
type: "awaited",
name: "UserBan1hSendDM",
code: `
$sendDM[{newEmbed:{description:**__You has been banned from sending messages to the global chat for 1 hour.__**
**If you think that this is an error please [contact us]($getVar[SupportServerInvite]).**}{color:RED}};$advancedTextSplit[$interactionData[customId];_;3]]
`
}, {
type: "awaited",
name: "UserBan12hSendDM",
code: `
$sendDM[{newEmbed:{description:**__You has been banned from sending messages to the global chat for 12 hours.__**
**If you think that this is an error please [contact us]($getVar[SupportServerInvite]).**}{color:RED}};$advancedTextSplit[$interactionData[customId];_;3]]
`
}, {
type: "awaited",
name: "UserBan3dSendDM",
code: `
$sendDM[{newEmbed:{description:**__You has been banned from sending messages to the global chat for 3 days.__**
**If you think that this is an error please [contact us]($getVar[SupportServerInvite]).**}{color:RED}};$advancedTextSplit[$interactionData[customId];_;3]]
`
}, {
type: "awaited",
name: "UserBan1wSendDM",
code: `
$sendDM[{newEmbed:{description:**__You has been banned from sending messages to the global chat for 1 week.__**
**If you think that this is an error please [contact us]($getVar[SupportServerInvite]).**}{color:RED}};$advancedTextSplit[$interactionData[customId];_;3]]
`


//                   // 
//                   // 
//      FINISH       // 
//     SEND  DMS     //
//                   // 
//                   // 
//                   // 


//                   // 
//                   // 
//       START       // 
//      TIMEOUTS     //
//                   // 
//                   // 
//                   // 


}, {
type: "interaction",
prototype: "button",
code: `
$interactionUpdate[;{newEmbed:{color:$if[$getGlobalUserVar[Banned;$findUser[$message]]==Yes;RED;GREEN]}{thumbnail:$userAvatar[$advancedTextSplit[$interactionData[customId];_;3]]}{description:
> ***__User muted successfully for 10 minutes!__***

**__General Info:__**
**Discord Tag:** $userTag[$advancedTextSplit[$interactionData[customId];_;3]]
**Discord ID:** $advancedTextSplit[$interactionData[customId];_;3]
**Discord Mention:** <@$advancedTextSplit[$interactionData[customId];_;3]>
**Creation Date:** $creationDate[$advancedTextSplit[$interactionData[customId];_;3];date]

**__Global Chat Info:__**
**Role:** $getGlobalUserVar[UserRole;$advancedTextSplit[$interactionData[customId];_;3]] $if[$getGlobalUserVar[UserRole;$advancedTextSplit[$interactionData[customId];_;3]]==User;$getVar[RoleUserEmoji];$if[$getGlobalUserVar[UserRole;$advancedTextSplit[$interactionData[customId];_;3]]==Moderator;$getVar[RoleModeratorEmoji];$getVar[RoleOwnerEmoji]]]
**Banned:** $getGlobalUserVar[Banned;$advancedTextSplit[$interactionData[customId];_;3]] $if[$getGlobalUserVar[Banned;$advancedTextSplit[$interactionData[customId];_;3]]==Yes;$getVar[SuccessEmoji];$getVar[ErrorEmoji]]
**Messages Sent:** $getGlobalUserVar[MessagesSent;$advancedTextSplit[$interactionData[customId];_;3]]
**Embed Color:** $getGlobalUserVar[UserEmbedColor;$advancedTextSplit[$interactionData[customId];_;3]]
**Embed Thumbnail:**
}{image:$if[$isValidImageLink[$getGlobalUserVar[UserEmbedThumbnail;$advancedTextSplit[$interactionData[customId];_;3]]]==true;$getGlobalUserVar[UserEmbedThumbnail;$advancedTextSplit[$interactionData[customId];_;3]];https://cdn.pixabay.com/photo/2013/07/12/13/50/prohibited-147408_960_720.png]}};{actionRow:{button:Ban User:danger:BanUser_$authorID_$advancedTextSplit[$interactionData[customId];_;3]:$if[$getGlobalUserVar[Banned;$advancedTextSplit[$interactionData[customId];_;3]]==Yes;yes;no]}{button:Temp Ban User:danger:TempBanUser_$authorID_$advancedTextSplit[$interactionData[customId];_;3]:$if[$getGlobalUserVar[Banned;$advancedTextSplit[$interactionData[customId];_;3]]==Yes;yes;no]}{button:Unban User:success:UnbanUser_$authorID_$advancedTextSplit[$interactionData[customId];_;3]:$if[$getGlobalUserVar[Banned;$advancedTextSplit[$interactionData[customId];_;3]]==No;yes;no]}{button:Change User Role:primary:ChangeUserRole_$authorID_$advancedTextSplit[$interactionData[customId];_;3]:no}}]

$setTimeout[10MinutesTimeout;10m;{"UserID": "$advancedTextSplit[$interactionData[customId];_;3]"};no]
$setGlobalUserVar[Banned;Yes;$advancedTextSplit[$interactionData[customId];_;3]]

$if[$isUserDMEnabled[$advancedTextSplit[$interactionData[customId];_;3]]==true;{execute:UserBan10mSendDM};]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds" : "{newEmbed:{description:$getVar[ErrorEmoji] **You cannot use this button!**}{color:RED}}","ephemeral" : true,"options" : {"interaction" : true}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==10MinutesTimeout;]
`
}, {
name: "10MinutesTimeout",
type: "timeout",
code: `
$setGlobalUserVar[Banned;No;$timeoutData[UserID]]
`
}, {
type: "interaction",
prototype: "button",
code: `
$interactionUpdate[;{newEmbed:{color:$if[$getGlobalUserVar[Banned;$findUser[$message]]==Yes;RED;GREEN]}{thumbnail:$userAvatar[$advancedTextSplit[$interactionData[customId];_;3]]}{description:
> ***__User muted successfully for 1 hour!__***

**__General Info:__**
**Discord Tag:** $userTag[$advancedTextSplit[$interactionData[customId];_;3]]
**Discord ID:** $advancedTextSplit[$interactionData[customId];_;3]
**Discord Mention:** <@$advancedTextSplit[$interactionData[customId];_;3]>
**Creation Date:** $creationDate[$advancedTextSplit[$interactionData[customId];_;3];date]

**__Global Chat Info:__**
**Role:** $getGlobalUserVar[UserRole;$advancedTextSplit[$interactionData[customId];_;3]] $if[$getGlobalUserVar[UserRole;$advancedTextSplit[$interactionData[customId];_;3]]==User;$getVar[RoleUserEmoji];$if[$getGlobalUserVar[UserRole;$advancedTextSplit[$interactionData[customId];_;3]]==Moderator;$getVar[RoleModeratorEmoji];$getVar[RoleOwnerEmoji]]]
**Banned:** $getGlobalUserVar[Banned;$advancedTextSplit[$interactionData[customId];_;3]] $if[$getGlobalUserVar[Banned;$advancedTextSplit[$interactionData[customId];_;3]]==Yes;$getVar[SuccessEmoji];$getVar[ErrorEmoji]]
**Messages Sent:** $getGlobalUserVar[MessagesSent;$advancedTextSplit[$interactionData[customId];_;3]]
**Embed Color:** $getGlobalUserVar[UserEmbedColor;$advancedTextSplit[$interactionData[customId];_;3]]
**Embed Thumbnail:**
}{image:$if[$isValidImageLink[$getGlobalUserVar[UserEmbedThumbnail;$advancedTextSplit[$interactionData[customId];_;3]]]==true;$getGlobalUserVar[UserEmbedThumbnail;$advancedTextSplit[$interactionData[customId];_;3]];https://cdn.pixabay.com/photo/2013/07/12/13/50/prohibited-147408_960_720.png]}};{actionRow:{button:Ban User:danger:BanUser_$authorID_$advancedTextSplit[$interactionData[customId];_;3]:$if[$getGlobalUserVar[Banned;$advancedTextSplit[$interactionData[customId];_;3]]==Yes;yes;no]}{button:Temp Ban User:danger:TempBanUser_$authorID_$advancedTextSplit[$interactionData[customId];_;3]:$if[$getGlobalUserVar[Banned;$advancedTextSplit[$interactionData[customId];_;3]]==Yes;yes;no]}{button:Unban User:success:UnbanUser_$authorID_$advancedTextSplit[$interactionData[customId];_;3]:$if[$getGlobalUserVar[Banned;$advancedTextSplit[$interactionData[customId];_;3]]==No;yes;no]}{button:Change User Role:primary:ChangeUserRole_$authorID_$advancedTextSplit[$interactionData[customId];_;3]:no}}]

$setTimeout[1HourTimeout;1h;{"UserID": "$advancedTextSplit[$interactionData[customId];_;3]"};no]
$setGlobalUserVar[Banned;Yes;$advancedTextSplit[$interactionData[customId];_;3]]

$if[$isUserDMEnabled[$advancedTextSplit[$interactionData[customId];_;3]]==true;{execute:UserBan1hSendDM};]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds" : "{newEmbed:{description:$getVar[ErrorEmoji] **You cannot use this button!**}{color:RED}}","ephemeral" : true,"options" : {"interaction" : true}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==1HourTimeout;]
`
}, {
name: "1HourTimeout",
type: "timeout",
code: `
$setGlobalUserVar[Banned;No;$timeoutData[UserID]]
`
}, {
type: "interaction",
prototype: "button",
code: `
$interactionUpdate[;{newEmbed:{color:$if[$getGlobalUserVar[Banned;$findUser[$message]]==Yes;RED;GREEN]}{thumbnail:$userAvatar[$advancedTextSplit[$interactionData[customId];_;3]]}{description:
> ***__User muted successfully for 12 hours!__***

**__General Info:__**
**Discord Tag:** $userTag[$advancedTextSplit[$interactionData[customId];_;3]]
**Discord ID:** $advancedTextSplit[$interactionData[customId];_;3]
**Discord Mention:** <@$advancedTextSplit[$interactionData[customId];_;3]>
**Creation Date:** $creationDate[$advancedTextSplit[$interactionData[customId];_;3];date]

**__Global Chat Info:__**
**Role:** $getGlobalUserVar[UserRole;$advancedTextSplit[$interactionData[customId];_;3]] $if[$getGlobalUserVar[UserRole;$advancedTextSplit[$interactionData[customId];_;3]]==User;$getVar[RoleUserEmoji];$if[$getGlobalUserVar[UserRole;$advancedTextSplit[$interactionData[customId];_;3]]==Moderator;$getVar[RoleModeratorEmoji];$getVar[RoleOwnerEmoji]]]
**Banned:** $getGlobalUserVar[Banned;$advancedTextSplit[$interactionData[customId];_;3]] $if[$getGlobalUserVar[Banned;$advancedTextSplit[$interactionData[customId];_;3]]==Yes;$getVar[SuccessEmoji];$getVar[ErrorEmoji]]
**Messages Sent:** $getGlobalUserVar[MessagesSent;$advancedTextSplit[$interactionData[customId];_;3]]
**Embed Color:** $getGlobalUserVar[UserEmbedColor;$advancedTextSplit[$interactionData[customId];_;3]]
**Embed Thumbnail:**
}{image:$if[$isValidImageLink[$getGlobalUserVar[UserEmbedThumbnail;$advancedTextSplit[$interactionData[customId];_;3]]]==true;$getGlobalUserVar[UserEmbedThumbnail;$advancedTextSplit[$interactionData[customId];_;3]];https://cdn.pixabay.com/photo/2013/07/12/13/50/prohibited-147408_960_720.png]}};{actionRow:{button:Ban User:danger:BanUser_$authorID_$advancedTextSplit[$interactionData[customId];_;3]:$if[$getGlobalUserVar[Banned;$advancedTextSplit[$interactionData[customId];_;3]]==Yes;yes;no]}{button:Temp Ban User:danger:TempBanUser_$authorID_$advancedTextSplit[$interactionData[customId];_;3]:$if[$getGlobalUserVar[Banned;$advancedTextSplit[$interactionData[customId];_;3]]==Yes;yes;no]}{button:Unban User:success:UnbanUser_$authorID_$advancedTextSplit[$interactionData[customId];_;3]:$if[$getGlobalUserVar[Banned;$advancedTextSplit[$interactionData[customId];_;3]]==No;yes;no]}{button:Change User Role:primary:ChangeUserRole_$authorID_$advancedTextSplit[$interactionData[customId];_;3]:no}}]

$setTimeout[12HoursTimeout;12h;{"UserID": "$advancedTextSplit[$interactionData[customId];_;3]"};no]
$setGlobalUserVar[Banned;Yes;$advancedTextSplit[$interactionData[customId];_;3]]

$if[$isUserDMEnabled[$advancedTextSplit[$interactionData[customId];_;3]]==true;{execute:UserBan12hSendDM};]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds" : "{newEmbed:{description:$getVar[ErrorEmoji] **You cannot use this button!**}{color:RED}}","ephemeral" : true,"options" : {"interaction" : true}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==12HoursTimeout;]
`
}, {
name: "12HoursTimeout",
type: "timeout",
code: `
$setGlobalUserVar[Banned;No;$timeoutData[UserID]]
`
}, {
type: "interaction",
prototype: "button",
code: `
$interactionUpdate[;{newEmbed:{color:$if[$getGlobalUserVar[Banned;$findUser[$message]]==Yes;RED;GREEN]}{thumbnail:$userAvatar[$advancedTextSplit[$interactionData[customId];_;3]]}{description:
> ***__User muted successfully for 3 days!__***

**__General Info:__**
**Discord Tag:** $userTag[$advancedTextSplit[$interactionData[customId];_;3]]
**Discord ID:** $advancedTextSplit[$interactionData[customId];_;3]
**Discord Mention:** <@$advancedTextSplit[$interactionData[customId];_;3]>
**Creation Date:** $creationDate[$advancedTextSplit[$interactionData[customId];_;3];date]

**__Global Chat Info:__**
**Role:** $getGlobalUserVar[UserRole;$advancedTextSplit[$interactionData[customId];_;3]] $if[$getGlobalUserVar[UserRole;$advancedTextSplit[$interactionData[customId];_;3]]==User;$getVar[RoleUserEmoji];$if[$getGlobalUserVar[UserRole;$advancedTextSplit[$interactionData[customId];_;3]]==Moderator;$getVar[RoleModeratorEmoji];$getVar[RoleOwnerEmoji]]]
**Banned:** $getGlobalUserVar[Banned;$advancedTextSplit[$interactionData[customId];_;3]] $if[$getGlobalUserVar[Banned;$advancedTextSplit[$interactionData[customId];_;3]]==Yes;$getVar[SuccessEmoji];$getVar[ErrorEmoji]]
**Messages Sent:** $getGlobalUserVar[MessagesSent;$advancedTextSplit[$interactionData[customId];_;3]]
**Embed Color:** $getGlobalUserVar[UserEmbedColor;$advancedTextSplit[$interactionData[customId];_;3]]
**Embed Thumbnail:**
}{image:$if[$isValidImageLink[$getGlobalUserVar[UserEmbedThumbnail;$advancedTextSplit[$interactionData[customId];_;3]]]==true;$getGlobalUserVar[UserEmbedThumbnail;$advancedTextSplit[$interactionData[customId];_;3]];https://cdn.pixabay.com/photo/2013/07/12/13/50/prohibited-147408_960_720.png]}};{actionRow:{button:Ban User:danger:BanUser_$authorID_$advancedTextSplit[$interactionData[customId];_;3]:$if[$getGlobalUserVar[Banned;$advancedTextSplit[$interactionData[customId];_;3]]==Yes;yes;no]}{button:Temp Ban User:danger:TempBanUser_$authorID_$advancedTextSplit[$interactionData[customId];_;3]:$if[$getGlobalUserVar[Banned;$advancedTextSplit[$interactionData[customId];_;3]]==Yes;yes;no]}{button:Unban User:success:UnbanUser_$authorID_$advancedTextSplit[$interactionData[customId];_;3]:$if[$getGlobalUserVar[Banned;$advancedTextSplit[$interactionData[customId];_;3]]==No;yes;no]}{button:Change User Role:primary:ChangeUserRole_$authorID_$advancedTextSplit[$interactionData[customId];_;3]:no}}]

$setTimeout[3DaysTimeout;3d;{"UserID": "$advancedTextSplit[$interactionData[customId];_;3]"};no]
$setGlobalUserVar[Banned;Yes;$advancedTextSplit[$interactionData[customId];_;3]]

$if[$isUserDMEnabled[$advancedTextSplit[$interactionData[customId];_;3]]==true;{execute:UserBan3dSendDM};]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds" : "{newEmbed:{description:$getVar[ErrorEmoji] **You cannot use this button!**}{color:RED}}","ephemeral" : true,"options" : {"interaction" : true}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==3DaysTimeout;]
`
}, {
name: "3DaysTimeout",
type: "timeout",
code: `
$setGlobalUserVar[Banned;No;$timeoutData[UserID]]
`
}, {
type: "interaction",
prototype: "button",
code: `
$interactionUpdate[;{newEmbed:{color:$if[$getGlobalUserVar[Banned;$findUser[$message]]==Yes;RED;GREEN]}{thumbnail:$userAvatar[$advancedTextSplit[$interactionData[customId];_;3]]}{description:
> ***__User muted successfully for 1 week!__***

**__General Info:__**
**Discord Tag:** $userTag[$advancedTextSplit[$interactionData[customId];_;3]]
**Discord ID:** $advancedTextSplit[$interactionData[customId];_;3]
**Discord Mention:** <@$advancedTextSplit[$interactionData[customId];_;3]>
**Creation Date:** $creationDate[$advancedTextSplit[$interactionData[customId];_;3];date]

**__Global Chat Info:__**
**Role:** $getGlobalUserVar[UserRole;$advancedTextSplit[$interactionData[customId];_;3]] $if[$getGlobalUserVar[UserRole;$advancedTextSplit[$interactionData[customId];_;3]]==User;$getVar[RoleUserEmoji];$if[$getGlobalUserVar[UserRole;$advancedTextSplit[$interactionData[customId];_;3]]==Moderator;$getVar[RoleModeratorEmoji];$getVar[RoleOwnerEmoji]]]
**Banned:** $getGlobalUserVar[Banned;$advancedTextSplit[$interactionData[customId];_;3]] $if[$getGlobalUserVar[Banned;$advancedTextSplit[$interactionData[customId];_;3]]==Yes;$getVar[SuccessEmoji];$getVar[ErrorEmoji]]
**Messages Sent:** $getGlobalUserVar[MessagesSent;$advancedTextSplit[$interactionData[customId];_;3]]
**Embed Color:** $getGlobalUserVar[UserEmbedColor;$advancedTextSplit[$interactionData[customId];_;3]]
**Embed Thumbnail:**
}{image:$if[$isValidImageLink[$getGlobalUserVar[UserEmbedThumbnail;$advancedTextSplit[$interactionData[customId];_;3]]]==true;$getGlobalUserVar[UserEmbedThumbnail;$advancedTextSplit[$interactionData[customId];_;3]];https://cdn.pixabay.com/photo/2013/07/12/13/50/prohibited-147408_960_720.png]}};{actionRow:{button:Ban User:danger:BanUser_$authorID_$advancedTextSplit[$interactionData[customId];_;3]:$if[$getGlobalUserVar[Banned;$advancedTextSplit[$interactionData[customId];_;3]]==Yes;yes;no]}{button:Temp Ban User:danger:TempBanUser_$authorID_$advancedTextSplit[$interactionData[customId];_;3]:$if[$getGlobalUserVar[Banned;$advancedTextSplit[$interactionData[customId];_;3]]==Yes;yes;no]}{button:Unban User:success:UnbanUser_$authorID_$advancedTextSplit[$interactionData[customId];_;3]:$if[$getGlobalUserVar[Banned;$advancedTextSplit[$interactionData[customId];_;3]]==No;yes;no]}{button:Change User Role:primary:ChangeUserRole_$authorID_$advancedTextSplit[$interactionData[customId];_;3]:no}}]

$setTimeout[1WeekTimeout;1w;{"UserID": "$advancedTextSplit[$interactionData[customId];_;3]"};no]
$setGlobalUserVar[Banned;Yes;$advancedTextSplit[$interactionData[customId];_;3]]

$if[$isUserDMEnabled[$advancedTextSplit[$interactionData[customId];_;3]]==true;{execute:UserBan1wSendDM};]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds" : "{newEmbed:{description:$getVar[ErrorEmoji] **You cannot use this button!**}{color:RED}}","ephemeral" : true,"options" : {"interaction" : true}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==1WeekTimeout;]
`
}, {
name: "1WeekTimeout",
type: "timeout",
code: `
$setGlobalUserVar[Banned;No;$timeoutData[UserID]]
`


//                   // 
//                   // 
//       FINISH      // 
//      TIMEOUTS     //
//                   // 
//                   // 
//                   // 
}]