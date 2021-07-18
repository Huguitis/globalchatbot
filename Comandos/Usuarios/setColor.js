module.exports = ({
name: "setColor", 
code: `
  $color[$getGlobalUserVar[embedcolor]]
  $description[De acuerdo <@$authorID>, desde ahora el color de tu embed para Chat Global estará configurado a **$message[1]**]
  $wait[1s]
  $setGlobalUserVar[embedcolor;$message[1]]
  $onlyIf[isValidHex[$message[1]]!=false;{description: ¡Hey! El color hex que indicaste no es válido.}{color: ff0000}]
  $argsCheck[>1;{description: ¡Hey! Debes indicar el número hex del color después del trigger.}{color: ff0000}]
  $suppressErrors
` 
})