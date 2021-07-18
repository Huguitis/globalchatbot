module.exports = ({
name: "reset", 
aliases: ["reiniciar"],
code: `
  $color[GREEN]
  $description[De acuerdo $username, he restablecido los valores del Chat Global, vuelve a configurarlo con **c/setChannel** y **c/setInvite**
  
  $resetServerVar[chatchannel]
  $resetServerVar[chatinvite]

  $onlyIf[$getServerVar[chatchannel]!=Sin establecer;{color: ff0000}{description: ¡Hey! Por el momento no hay ningún canal establecido para el Chat Global. Configuralo con **c/setChannel**}]]

  $onlyBotPerms[manageserver;managemessages;sendmessages;viewchannel;managechannels;{description: ¡Hey! Debes darme más permisos para poder hacer eso.}{color: ff0000}]
  $onlyPerms[admin;{description: ¡Hey! Debes ser administrador del servidor para utilizar este comando.}{color: ff0000}]
  $suppressErrors
` 
})