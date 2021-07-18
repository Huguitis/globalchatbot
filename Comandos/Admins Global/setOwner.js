module.exports = ({
name: "setOwner", 
code: `
  $color[GREEN]
  $description[De acuerdo, ¡desde ahora <@$findUser[$message]> será creador de Chat Global!]
  $setGlobalUserVar[userrole;:crown: CREADOR;$findUser[$message]]

  $onlyIf[$getGlobalUserVar[userrole;$findUser[$message]]!=:crown: CREADOR;:x: ¡Hey <@$authorID>! El usuario <@$findUser[$message]> ($username[$findUser[$message]]#$discriminator[$findUser[$message]]) ya tiene creador en Chat Global.]
  $onlyIf[$userExists[$findUser[$message]]!=false;:x: ¡Hey <@$authorID>! Indicaste un usuario que no existe.]
  $argsCheck[>1;:x: ¡Hey <@$authorID>! Debes indicar un usuario después del trigger.]

  $onlyForIDs[$botOwnerID;]
` 
})