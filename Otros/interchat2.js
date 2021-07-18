module.exports = ({
name: "interchat",
type: "awaitedCommand",
code: `
$useChannel[$getServerVar[chatchannel]]

$description[**$getGlobalUserVar[userrole]** | :inbox_tray: **[UNIRSE AL SERVIDOR]($getServerVar[chatinvite])** 

<@$authorID>: $message]

$author[$username#$discriminator • $authorID;$authorAvatar]

$footer[$serverName | $membersCount usuarios;$serverIcon]
$color[$getGlobalUserVar[embedcolor]]

$addTimestamp
$onlyIf[$channelID==$getservervar[chatchannel];]
$onlyIf[isBot[$authorID]!=true;]
$onlyIf[$checkContains[$message;c/;c/setInvite;c/setChannel]!=true;]
$suppressErrors`
})