module.exports = ({
name: "banUser", 
code: `
  $color[GREEN]
  $description[De acuerdo, ahora <@$findUser[$message]> no podrá enviar mensajes en Chat Global.]

  $forEachChannel[banmessage]

  $setGlobalUserVar[userban;Baneado;$findUser[$message]]

  $onlyIf[$getGlobalUserVar[userban;$findUser[$message]]!=Baneado;:x: ¡Hey <@$authorID>! El usuario <@$findUser[$message]> ($username[$findUser[$message]]#$discriminator[$findUser[$message]]) ya estaba baneado en Chat Global.]
  $onlyIf[$userExists[$findUser[$message]]!=false;:x: ¡Hey <@$authorID>! Indicaste un usuario que no existe.]
  $argsCheck[>1;:x: ¡Hey <@$authorID>! Debes indicar un usuario después del trigger.]

  $onlyIf[$getGlobalUserVar[userrole]!=:tools: MODERADOR;]
` 
})