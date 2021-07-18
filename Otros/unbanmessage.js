module.exports = ({
name: "unbanmessage",
type: "awaitedCommand",
code: `
$useChannel[$getServerVar[chatchannel]]
$color[GREEN]
$description[¡El usuario **<@$findUser[$message]> ($username[$findUser[$message]]#$discriminator[$findUser[$message]])** ha sido desbaneado del Chat Global!]

$onlyIf[isBot[$authorID]!=true;]
$onlyIf[$channelID==$getservervar[chatchannel];]
$suppressErrors`
})