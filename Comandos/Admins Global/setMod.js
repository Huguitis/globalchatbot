module.exports = ({
name: "setMod", 
code: `
  $color[GREEN]
  $description[De acuerdo, ¡desde ahora <@$findUser[$message]> será moderador de Chat Global!]
  $setGlobalUserVar[userrole;:tools: MODERADOR;$findUser[$message]]

  $onlyIf[$getGlobalUserVar[userrole;$findUser[$message]]!=:tools: MODERADOR;:x: ¡Hey <@$authorID>! El usuario <@$findUser[$message]> ($username[$findUser[$message]]#$discriminator[$findUser[$message]]) ya tiene moderador en Chat Global.]
  $onlyIf[$userExists[$findUser[$message]]!=false;:x: ¡Hey <@$authorID>! Indicaste un usuario que no existe.]
  $argsCheck[>1;:x: ¡Hey <@$authorID>! Debes indicar un usuario después del trigger.]

  $onlyForIDs[$botOwnerID;]
` 
})