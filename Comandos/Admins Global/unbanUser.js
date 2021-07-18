module.exports = ({
name: "unbanUser", 
code: `
  $color[GREEN]
  $description[De acuerdo, ahora <@$findUser[$message]> podrá enviar mensajes en Chat Global.]

  $forEachChannel[unbanmessage]

  $setGlobalUserVar[userban;No baneado;$findUser[$message]]

  $onlyIf[$getGlobalUserVar[userban;$findUser[$message]]!=No baneado;:x: ¡Hey <@$authorID>! El usuario <@$findUser[$message]> ($username[$findUser[$message]]#$discriminator[$findUser[$message]]) no estaba baneado en Chat Global.]
  $onlyIf[$userExists[$findUser[$message]]!=false;:x: ¡Hey <@$authorID>! Indicaste un usuario que no existe.]
  $argsCheck[>1;:x: ¡Hey <@$authorID>! Debes indicar un usuario después del trigger.]

  $onlyIf[$getGlobalUserVar[userrole]!=:tools: MODERADOR;]
` 
})