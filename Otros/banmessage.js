module.exports = ({
name: "banmessage",
type: "awaitedCommand",
code: `
$useChannel[$getServerVar[chatchannel]]
$color[RED]
$description[El usuario **<@$findUser[$message]> ($username[$findUser[$message]]#$discriminator[$findUser[$message]])** ha sido baneado del Chat Global.]

$onlyIf[isBot[$authorID]!=true;]
$onlyIf[$channelID==$getservervar[chatchannel];]
$suppressErrors`
})