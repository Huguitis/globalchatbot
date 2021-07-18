module.exports = ({
name: "config", 
aliases: ["info", "informacion", "configuracion"],
code: `
  $color[GREEN]
  $description[- **ID del canal configurado:** <#$getServerVar[chatchannel]>
  - **Invitación del servidor configurada:** $getServerVar[chatinvite]
  - **Color de tu embed:** $getGlobalUserVar[embedcolor]
  - **Tu rol de interchat:** $getGlobalUserVar[userrole]]

  $onlyIf[$getServerVar[chatinvite]!=Sin establecer;{color: ff0000}{description: ¡Hey! Por el momento no se ha establecido una invitación de este servidor para Chat Global, establecela con **c/setInvite** y vuelve a intentarlo.}]
  $onlyIf[$getServerVar[chatchannel]!=Sin establecer;{color: ff0000}{description: ¡Hey! Por el momento no se ha establecido un canal de Chat Global, establecelo con **c/setChannel** y vuelve a intentarlo.}]
  $suppressErrors
` 
})