module.exports = ({
name: "ping",
code: `
$color[1;GREEN]
$addfield[1;Hosting Provider:;[https://discord.gg/CVbPZRt9yG](Huguitis Nodes)]
$addField[1;Ram:;\`\`\`yaml
$ram MB / $maxRam MB ($sub[$maxRam;$ram] MB available ram)\`\`\`]
$addfield[1;CPU:;\`\`\`yaml
$cpu%\`\`\`;yes]
$addfield[1;CPU Model:;\`\`\`md
$djsEval[require ('os').cpus()[0].model;yes]\`\`\`;no]
$addfield[1;General:;\`\`\`md
Servers : $serverCount
All Users: $allMembersCount\`\`\`;no]
$addfield[1;WS Ping:;\`\`\`arm
$ping ms\`\`\`;yes]
$addfield[1;DB Ping:;\`\`\`arm
$dbPing ms\`\`\`;yes]
$addfield[1;Node.JS Version:;\`\`\`$nodeVersion\`\`\`]

$onlyIf[$getServerVar[GlobalChatChannelID]!=$channelID;]
`
})