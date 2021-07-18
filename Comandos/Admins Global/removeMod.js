module.exports = ({
name: "removeMod", 
code: `
  $color[GREEN]
  $description[De acuerdo, ¡desde ahora <@$findUser[$message]> dejará de ser moderador de Chat Global!]
  $setGlobalUserVar[userrole;:busts_in_silhouette: USUARIO;$findUser[$message]]

  $onlyIf[$getGlobalUserVar[userrole;$findUser[$message]]!=:busts_in_silhouette: USUARIO;:x: ¡Hey <@$authorID>! El usuario <@$findUser[$message]> ($username[$findUser[$message]]#$discriminator[$findUser[$message]]) no tenía moderador en Chat Global.]
  $onlyIf[$userExists[$findUser[$message]]!=false;:x: ¡Hey <@$authorID>! Indicaste un usuario que no existe.]
  $argsCheck[>1;:x: ¡Hey <@$authorID>! Debes indicar un usuario después del trigger.]

  $onlyForIDs[$botOwnerID;]
` 
})