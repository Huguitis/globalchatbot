module.exports = ({
name: "$alwaysExecute", 
code: `
  $forEachChannel[interchat]
  $cooldown[7s;{description: ¡Oye! No envies mensajes tan rápido $username.}{color: ff0000}{delete:2s}]
  $deleteCommand
  $onlyIf[$getGlobalUserVar[userban]!=Baneado;{description: ¡Oye $username! No puedes enviar mensajes en el Chat Global, estás baneado. Apela aquí: https://discord.gg/GeVRXn8KZ3}{color: ff0000}{delete:5s}]
  $onlyIf[$channelID==$getServerVar[chatchannel;$guildID]]
  $onlyIf[$getServerVar[chatinvite]!=Sin establecer;]
  
  $onlyIf[$checkContains[$message;c/;c/setInvite;c/setChannel]!=true;]
  
  
  $suppressErrors
` 
})