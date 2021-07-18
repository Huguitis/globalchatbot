module.exports = ({
name: "setInvite", 
code: `
  $color[GREEN]
  $description[De acuerdo <@$authorID>, desde ahora la invitación de este servidor para Chat Global estará configurada a $message[1] (Recomendamos que la invitación no expire nunca)]
  $wait[1s]
  $setServerVar[chatinvite;$message[1]]
  $onlyIf[$checkContains[$message[1];discord.gg/]!=false;{description: ¡Hey! El link que indicaste no es una invitación del servidor.}{color: ff0000}]
  $argsCheck[>1;{description: ¡Hey! Debes indicar la invitación después del trigger (preferiblemente permanente)}{color: ff0000}]
  $onlyBotPerms[manageserver;managemessages;sendmessages;viewchannel;managechannels;{description: ¡Hey! Debes darme más permisos para poder hacer eso.}{color: ff0000}]
  $onlyPerms[admin;{description: ¡Hey! Debes ser administrador del servidor para utilizar este comando.}{color: ff0000}]
  $suppressErrors
` 
})