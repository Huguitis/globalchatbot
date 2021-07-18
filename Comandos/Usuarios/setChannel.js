module.exports = ({
name: "setChannel", 
aliases: ["set-channel"],
code: `
  $color[GREEN]

  $description[De acuerdo <@$authorID>, desde ahora el Chat Global estará configurado a <#$findChannel[$message]>, establece ahora una invitación con **c/setInvite**]

  $setServerVar[chatchannel;$findChannel[$channelID]]
  $channelCooldown[5s;]
  $onlyIf[$channelExists[$findChannel[$channelID]]==true;]

  $onlyPerms[managechannels;{description::x: ¡Necesitas más permisos para poder ejecutar este comando!}{color: ff0000}]
  $onlyBotPerms[manageserver;managemessages;sendmessages;viewchannel;managechannels;{description: ¡Hey! Debes darme más permisos para poder hacer eso.}{color: ff0000}]
  $onlyPerms[admin;{description: ¡Hey! Debes ser administrador del servidor para utilizar este comando.}{color: ff0000}]
  $suppressErrors
` 
})