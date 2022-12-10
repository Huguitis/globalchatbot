module.exports = ({
name: "<@$clientID>",
nonPrefixed: true,
code: `
$addButton[1;Support Server;5;$nonEscape[$getVar[SupportServerInvite]]]
$addButton[1;Invite Me!;5;$nonEscape[$getBotInvite[admin]]]

$description[1;**Hello $username! You can see all my commands with __$getServerVar[DefaultPrefix]help__**]

$color[1;GREEN]

$cooldown[10s;]
`
});